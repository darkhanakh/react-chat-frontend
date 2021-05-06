import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popover, Button, Icon } from 'antd';
import { Emoji } from 'emoji-mart';
import reactStringReplace from 'react-string-replace';

import { Time, CheckedIcon, Avatar, MessageAudio } from 'components';
import { isAudio } from 'utils/helpers';
import './Message.scss';

const Message = ({
  text,
  date,
  user,
  isMe,
  readed,
  attachments,
  isTyping,
  onRemoveMessage,
  setPreviewImage,
}) => {
  const renderAttachment = item => {
    if (item.ext !== 'webm') {
      return (
        <div
          key={item._id}
          onClick={() => setPreviewImage(item.url)}
          className="message__attachments-item"
        >
          <div className="message__attachments-item-overlay">
            <Icon type="eye" style={{ color: 'white', fontSize: 18 }} />
          </div>

          <img src={item.url} alt={item.filename} />
        </div>
      );
    } else {
      return <MessageAudio key={item._id} audioSrc={item.url} />;
    }
  };

  return (
    <div
      className={classNames('message', {
        'message--is-me': isMe,
        'message--is-typing': isTyping,
        'message--image':
          !isAudio(attachments) &&
          attachments &&
          attachments.length === 1 &&
          !text,
        'message--audio': isAudio(attachments),
      })}
    >
      <div className="message__content">
        <CheckedIcon isMe={isMe} isReaded={readed} />

        <Popover
          content={
            <div>
              <Button onClick={onRemoveMessage}>Удалить сообщение</Button>
            </div>
          }
          trigger="click"
        >
          <div className="message__icon-actions">
            <Button type="link" shape="circle" icon="ellipsis" />
          </div>
        </Popover>

        <div className="message__avatar">
          <Avatar user={user} />
        </div>
        <div className="message__info">
          {(text || isTyping) && (
            <div className="message__bubble">
              <div className="message__text">
                {text &&
                  reactStringReplace(text, /:(.+?):/g, (match, i) => (
                    <Emoji emoji={match} set="apple" size={16} key={i} />
                  ))}
              </div>
              {isTyping && (
                <p className="message__typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </p>
              )}
              {false && <MessageAudio audioSrc={null} />}
            </div>
          )}

          {attachments && (
            <div className="message__attachments">
              {attachments.map(item => renderAttachment(item))}
            </div>
          )}

          {date && (
            <time className="message__date">
              <Time date={date} />
            </time>
          )}
        </div>
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool,
  audio: PropTypes.string,
};

export default Message;
