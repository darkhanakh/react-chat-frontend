import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { CheckedIcon, Avatar } from 'components';
import { getMessageTime } from 'utils/helpers';
import './DialogItem.scss';

const DialogItem = ({ user, unreadMessages, isMe, created_at, text }) => {
  return (
    <div
      className={classNames('dialogs__item', {
        'dialogs__item--online': user.isOnline,
      })}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={user} />
      </div>
      <div className="dialogs__item-info info">
        <div className="info__top">
          <b className="info__name">{user.fullname}</b>
          <time className="info__date">{getMessageTime(created_at)}</time>
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
