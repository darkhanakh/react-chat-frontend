import React, { useState } from 'react';
import { Input, Button } from 'antd';
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { UploadField } from '@navjobs/upload';
import { Picker } from 'emoji-mart';

import './ChatInput.scss';

const ChatInput = () => {
  const [text, setText] = useState('');
  const [isEmojiVisible, setIsEmojiVisible] = useState(false);

  return (
    <div className="chat-input">
      <div className="chat-input__smile-button">
        {isEmojiVisible && (
          <div className="chat-input__emoji-picker">
            <Picker set="apple" />
          </div>
        )}
        <Button
          type="link"
          shape="circle"
          icon={<SmileOutlined style={{ color: '#b4b4b4' }} />}
          onClick={() => setIsEmojiVisible(!isEmojiVisible)}
        />
      </div>
      <Input
        placeholder="Введите текст сообщения…"
        size="large"
        onChange={e => setText(e.target.value)}
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
          <Button
            type="link"
            shape="circle"
            icon={<CameraOutlined style={{ color: '#b4b4b4' }} />}
          />
        </UploadField>

        {text ? (
          <Button
            type="link"
            shape="circle"
            icon={<SendOutlined style={{ color: '#b4b4b4' }} />}
          />
        ) : (
          <Button
            type="link"
            shape="circle"
            icon={<AudioOutlined style={{ color: '#b4b4b4' }} />}
          />
        )}
      </div>
    </div>
  );
};

export default ChatInput;
