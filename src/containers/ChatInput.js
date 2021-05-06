/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import socket from 'core/socket';

import { ChatInput as ChatInputBase } from 'components';
import { connect } from 'react-redux';
import { messagesActions, attachmentsActions } from 'store/actions';
import { attachmentsApi } from 'utils/api';

const ChatInput = ({
  fetchSendMessage,
  currentDialogId,
  removeAttachment,
  attachments,
  setAttachments,
  user,
}) => {
  if (!currentDialogId) {
    return null;
  }

  window.navigator.getUserMedia =
    window.navigator.getUserMedia ||
    window.navigator.mozGetUserMedia ||
    window.navigator.msGetUserMedia ||
    window.navigator.webkitGetUserMedia;

  const [text, setText] = useState('');
  const [isEmojiVisible, setIsEmojiVisible] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const el = document.querySelector('.chat-input__smile-button');
    document.addEventListener('click', handleEmojiOutsideClick.bind(this, el));
    return () => {
      document.removeEventListener(
        'click',
        handleEmojiOutsideClick.bind(this, el)
      );
    };
  }, []);

  const sendMessage = () => {
    if (isRecording) {
      mediaRecorder.stop();
    } else if (text) {
      fetchSendMessage({
        text,
        dialogId: currentDialogId,
        attachments: attachments.map(file => file.uid),
      });
      setText('');
      setAttachments([]);
    }
  };

  const sendAudio = audioId => {
    return fetchSendMessage({
      text: null,
      dialogId: currentDialogId,
      attachments: [audioId],
    });
  };

  const handleSendMessage = e => {
    socket.emit('DIALOGS:TYPING', { dialogId: currentDialogId, user });
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const addEmojiToText = emojiObj => {
    setText((text + '  ' + emojiObj.colons).trim());
  };

  const handleEmojiOutsideClick = (el, e) => {
    if (el && !el.contains(e.target)) {
      setIsEmojiVisible(false);
    }
  };

  const onFilesUpload = async files => {
    let uploaded = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const uid = Math.round(Math.random() * 1000);
      uploaded = [
        ...uploaded,
        {
          uid,
          name: file.name,
          status: 'uploading',
        },
      ];
      setAttachments(uploaded);
      // eslint-disable-next-line no-loop-func
      await attachmentsApi.upload(file).then(({ data }) => {
        uploaded = uploaded.map(item => {
          if (item.uid === uid) {
            return {
              status: 'done',
              uid: data.file._id,
              name: data.file.filename,
              url: data.file.url,
            };
          }
          return item;
        });
      });
    }
    setAttachments(uploaded);
  };

  const onRecord = () => {
    if (navigator.getUserMedia) {
      navigator.getUserMedia({ audio: true }, onRecording, onError);
    }
  };

  const onRecording = stream => {
    const recorder = new MediaRecorder(stream);
    setMediaRecorder(recorder);

    recorder.start();

    recorder.onstart = () => setIsRecording(true);

    recorder.onstop = () => setIsRecording(false);

    recorder.ondataavailable = async e => {
      const file = new File([e.data], 'audio.webm');
      setIsLoading(true);
      const { data } = await attachmentsApi.upload(file);
      await sendAudio(data.file._id);
      setIsLoading(false);
    };
  };

  const onError = err => console.log('The following error occured: ' + err);

  const onHideRecording = () => {
    setIsRecording(false);
  };

  return (
    <React.Fragment>
      <ChatInputBase
        handleSendMessage={handleSendMessage}
        addEmojiToText={addEmojiToText}
        handleEmojiOutsideClick={handleEmojiOutsideClick}
        isEmojiVisible={isEmojiVisible}
        text={text}
        setText={setText}
        setIsEmojiVisible={setIsEmojiVisible}
        attachments={attachments}
        onFilesUpload={onFilesUpload}
        removeAttachment={removeAttachment}
        isRecording={isRecording}
        onRecord={onRecord}
        onHideRecording={onHideRecording}
        sendMessage={sendMessage}
        isLoading={isLoading}
      />
    </React.Fragment>
  );
};

export default connect(
  ({ dialogs, attachments, user }) => ({
    ...dialogs,
    attachments: attachments.items,
    user: user.data,
  }),
  {
    ...messagesActions,
    ...attachmentsActions,
  }
)(ChatInput);
