import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';
import Loader from 'react-loader-spinner';
import classNames from 'classnames';

import { Message } from 'components';

import './Messages.scss';

const Messages = ({ items, isLoading, blockRef, user, onRemoveMessage }) => {
  return (
    <div
      ref={blockRef}
      className={classNames('messages', { 'messages--loading': isLoading })}
    >
      {isLoading ? (
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
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
