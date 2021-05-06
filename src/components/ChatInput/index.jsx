import React, { Fragment } from 'react';
import { Input, Button } from 'antd';
import { UploadField } from '@navjobs/upload';
import { Picker } from 'emoji-mart';

import { UploadFiles } from 'components';

import './ChatInput.scss';

const ChatInput = ({
  handleSendMessage,
  addEmojiToText,
  isEmojiVisible,
  text,
  setIsEmojiVisible,
  setText,
  attachments,
  onFilesUpload,
  removeAttachment,
  isRecording,
  onRecord,
  onHideRecording,
  sendMessage,
  isLoading,
}) => {
  return (
    <Fragment>
      <div className="chat-input">
        <div>
          <div className="chat-input__smile-button">
            <div className="chat-input__emoji-picker">
              {isEmojiVisible && (
                <Picker set="apple" onSelect={addEmojiToText} />
              )}
            </div>
            <Button
              type="link"
              shape="circle"
              icon="smile"
              size="large"
              onClick={() => setIsEmojiVisible(!isEmojiVisible)}
            />
          </div>
          {isRecording ? (
            <div className="chat-input__record-status">
              <i className="chat-input__record-status-bubble" />
              Recording...
              <Button
                type="link"
                shape="circle"
                icon="close"
                size="large"
                onClick={onHideRecording}
                className="stop-recording"
              />
            </div>
          ) : (
            <Input.TextArea
              placeholder="Введите текст сообщения…"
              size="large"
              onChange={e => setText(e.target.value)}
              onKeyUp={handleSendMessage}
              value={text}
              autoSize={{ maxRows: 6, minRows: 1 }}
            />
          )}

          <div className="chat-input__actions">
            <UploadField
              onFiles={onFilesUpload}
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

            {isLoading ? (
              <Button type="link" shape="circle" icon="loading" />
            ) : isRecording || text || attachments.length ? (
              <Button
                onClick={sendMessage}
                type="link"
                shape="circle"
                icon="check-circle"
              />
            ) : (
              <div className="chat-input__record-btn">
                <Button
                  onClick={onRecord}
                  type="link"
                  shape="circle"
                  icon="audio"
                />
              </div>
            )}
          </div>
        </div>
        <div className="chat-input__attachments">
          <UploadFiles
            attachments={attachments}
            removeAttachment={removeAttachment}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ChatInput;
