import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { UploadField } from '@navjobs/upload';
import { Picker } from 'emoji-mart';

import './ChatInput.scss';

const ChatInput = ({ onSendMessage, currentDialogId }) => {
  const [text, setText] = useState('');
  const [isEmojiVisible, setIsEmojiVisible] = useState(false);

  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      onSendMessage(text, currentDialogId);
      setText('');
    }
  };

  const handleInputClick = e => {
    onSendMessage(text, currentDialogId);
    setText('');
  };

  const addEmojiToText = emojiObj => {
    setText((text + '  ' + emojiObj.colons).trim());
  };

  const handleEmojiOutsideClick = (el, e) => {
    if (el && !el.contains(e.target)) {
      setIsEmojiVisible(false);
    }
  };

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

  return (
    <div className="chat-input">
      <div className="chat-input__smile-button">
        <div className="chat-input__emoji-picker">
          {isEmojiVisible && <Picker set="apple" onSelect={addEmojiToText} />}
        </div>
        <Button
          type="link"
          shape="circle"
          icon="smile"
          size="large"
          onClick={() => setIsEmojiVisible(!isEmojiVisible)}
        />
      </div>
      <Input.TextArea
        placeholder="Введите текст сообщения…"
        size="large"
        onChange={e => setText(e.target.value)}
        onKeyUp={handleKeyUp}
        value={text}
        autoSize={{ maxRows: 6, minRows: 1 }}
      />
      <div className="chat-input__actions">
        <UploadField
          onFiles={files => console.log(files)}
          containerProps={{
            className: 'chat-input__actions-upload-btn',
          }}
          uploadProps={{
            accept: '.jpg,.jpeg,.png,.gif,.bmp',
            multiple: 'multiple',
          }}
        >
          <Button type="link" shape="circle" icon="camera" size="large" />
        </UploadField>

        {text ? (
          <Button
            type="link"
            shape="circle"
            icon="check-circle"
            size="large"
            onClick={handleInputClick}
          />
        ) : (
          <Button type="link" shape="circle" icon="audio" size="large" />
        )}
      </div>
    </div>
  );
};

export default ChatInput;
