import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';

import { CheckedIcon } from 'components';

import './DialogItem.scss';

const getMessageTime = createdAt =>
  isToday(new Date(createdAt))
    ? format(new Date(createdAt), 'HH:mm')
    : format(new Date(createdAt), 'dd.MM.yyyy');

const getAvatar = avatar => {
  if (avatar) {
    return <img src={avatar} alt="avatar" />;
  } else {
    // make avatar
  }
};

const DialogItem = ({ user, unreadMessages, isMe, createdAt, text }) => {
  return (
    <div
      className={classNames('dialogs__item', {
        'dialogs__item--online': user.isOnline,
      })}
    >
      <div className="dialogs__item-avatar">{getAvatar(user.avatar)}</div>
      <div className="dialogs__item-info info">
        <div className="info__top">
          <b className="info__name">{user.fullname}</b>
          <time className="info__date">{getMessageTime(createdAt)}</time>
        </div>
        <div className="info__bottom">
          <p className="info__text">{text}</p>

          {isMe && <CheckedIcon isMe isReaded={false} />}
          {unreadMessages > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {unreadMessages > 9 ? '+9' : unreadMessages}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

DialogItem.propTypes = {
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
};

export default DialogItem;
