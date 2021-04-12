import React, { useState } from 'react';
import { Input, Button } from 'antd';
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  SendOutlined,
} from '@ant-design/icons';

import './ChatInput.scss';

const ChatInput = () => {
  const [text, setText] = useState('');

  return (
    <div className="chat-input">
      <div className="chat-input__smile-button">
        <Button
          type="link"
          shape="circle"
          icon={<SmileOutlined style={{ color: '#b4b4b4' }} />}
        />
      </div>
      <Input
        placeholder="Введите текст сообщения…"
        size="large"
        onChange={e => setText(e.target.value)}
      />
      <div className="chat-input__actions">
        <Button
          type="link"
          shape="circle"
          icon={<CameraOutlined style={{ color: '#b4b4b4' }} />}
        />
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
