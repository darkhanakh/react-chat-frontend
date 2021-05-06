/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Empty } from 'antd';

import socket from 'core/socket';
import { messagesActions } from 'store/actions';
import { Messages as BaseMessages } from 'components';

const Messages = ({
  currentDialogId,
  items,
  fetchAllMessages,
  isLoading,
  addMessage,
  user,
  removeMessageById,
  attachments,
}) => {
  if (!currentDialogId) {
    return <Empty description="Откройте диалог" />;
  }

  const [previewImage, setPreviewImage] = useState(null);
  const [blockHeight, setBlockHeight] = useState(138);
  const [isTyping, setIsTyping] = useState(false);
  let typingTimeoutId = null;

  const messagesRef = useRef(null);

  const toggleIsTyping = () => {
    setIsTyping(true);
    clearInterval(typingTimeoutId);
    typingTimeoutId = setTimeout(() => {
      setIsTyping(false);
    }, 3000);
  };

  useEffect(() => {
    socket.on('DIALOGS:TYPING', toggleIsTyping);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (attachments.length) {
      setBlockHeight(245);
    } else {
      setBlockHeight(135);
    }
  }, [attachments]);

  useEffect(() => {
    const onNewMessage = data => {
      addMessage(data);
    };

    if (currentDialogId) {
      fetchAllMessages(currentDialogId);
    }

    socket.on('SERVER:NEW_MESSAGE', onNewMessage);

    return () => socket.removeListener('SERVER:NEW_MESSAGE', onNewMessage);
  }, [addMessage, currentDialogId, fetchAllMessages]);

  useEffect(() => {
    messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);
  }, [items]);

  return currentDialogId ? (
    <BaseMessages
      user={user}
      items={items}
      isLoading={isLoading && !user.data}
      blockRef={messagesRef}
      onRemoveMessage={removeMessageById}
      previewImage={previewImage}
      setPreviewImage={setPreviewImage}
      blockHeight={blockHeight}
      isTyping={isTyping}
    />
  ) : null;
};

export default connect(
  ({ dialogs, messages, user, attachments }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading,
    user,
    attachments: attachments.items,
  }),
  messagesActions
)(Messages);
