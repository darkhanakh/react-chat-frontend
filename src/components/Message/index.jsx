import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popover, Button } from 'antd';
import { Emoji } from 'emoji-mart';
import reactStringReplace from 'react-string-replace';

import { Time, CheckedIcon, Avatar, MessageAudio } from 'components';
import './Message.scss';

const Message = ({
  text,
  date,
  user,
  isMe,
  isReaded,
  attachments,
  isTyping,
  audio,
  onRemoveMessage,
}) => {
  return (
    <div
      className={classNames('message', {
        'message--is-me': isMe,
        'message--is-typing': isTyping,
        'message--image': attachments && attachments.length === 1,
        'message--audio': audio,
      })}
    >
      <div className="message__content">
        <CheckedIcon isMe={isMe} isReaded={isReaded} />

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
          {(audio || text || isTyping) && (
            <div className="message__bubble">
              {text &&
                reactStringReplace(text, /:(.+?):/g, (match, i) => (
                  <Emoji emoji={match} set="apple" size={16} key={i} />
                ))}
              {isTyping && (
                <p className="message__typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </p>
              )}
              {audio && <MessageAudio audioSrc={audio} />}
            </div>
          )}

          {attachments && (
            <div className="message__attachments">
              {attachments.map((item, i) => (
                <div className="message__attachments-item" key={i}>
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
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
