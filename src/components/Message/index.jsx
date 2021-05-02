import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { Emoji } from 'emoji-mart';

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

        <div className="message__avatar">
          <Avatar user={user} />
        </div>
        <div className="message__info">
          {(audio || text || isTyping) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
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
