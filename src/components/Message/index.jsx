import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';
import classNames from 'classnames';

import checkedSvg from 'assets/image/checked.svg';
import notCheckedSvg from 'assets/image/not_checked.svg';

import './Message.scss';

const Message = ({ text, avatar, date, user, isMe, isReaded, attachments }) => {
  return (
    <div className={classNames('message', { 'message--isme': isMe })}>
      <div className="message__content">
        {isMe && isReaded ? (
          <img
            src={checkedSvg}
            alt="checked"
            className="message__icon-readed"
          />
        ) : (
          <img
            src={notCheckedSvg}
            alt="not checked"
            className="message__icon-readed message__icon-readed--not"
          />
        )}

        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.fullName}`} />
        </div>
        <div className="message__info">
          <div className="message__bubble">
            <p className="message__text">{text}</p>
          </div>
          <div className="message__attachments">
            {attachments &&
              attachments.map(item => (
                <div className="message__attachments-item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
          </div>
          <time className="message__date">
            {formatDistanceToNow(new Date(date), {
              locale: ruLocale,
              addSuffix: true,
            })}
          </time>
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
};

export default Message;
