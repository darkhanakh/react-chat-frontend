import React from 'react';
import PropTypes from 'prop-types';
import { Empty, Modal } from 'antd';
import Loader from 'react-loader-spinner';
import classNames from 'classnames';

import { Message } from 'components';

import './Messages.scss';

const Messages = ({
  items,
  isLoading,
  blockRef,
  user,
  onRemoveMessage,
  previewImage,
  setPreviewImage,
  blockHeight,
  isTyping,
}) => {
  return (
    <div
      className="chat__dialog-messages"
      style={{ height: `calc(100% - ${blockHeight}px)` }}
    >
      <div
        ref={blockRef}
        className={classNames('messages', { 'messages--loading': isLoading })}
      >
        {isLoading && !user ? (
          <Loader type="Oval" color="#4CA5FF" height={80} width={80} />
        ) : items && !isLoading ? (
          <div>
            {items.length > 0 ? (
              items.map(item => (
                <Message
                  {...item}
                  key={item._id}
                  isMe={user.data._id === item.user._id}
                  onRemoveMessage={onRemoveMessage.bind(this, item._id)}
                  setPreviewImage={setPreviewImage}
                  /* isTyping={isTyping} */
                />
              ))
            ) : (
              <div className="message-empty">
                <Empty description="Диалог пуст" />
              </div>
            )}
          </div>
        ) : (
          <div className="message-empty">
            <Empty description="Откройте диалог" />
          </div>
        )}
        <Modal
          visible={Boolean(previewImage)}
          onCancel={() => setPreviewImage(null)}
          footer={null}
        >
          <img src={previewImage} style={{ width: '100%' }} alt="preview" />
        </Modal>
      </div>
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
