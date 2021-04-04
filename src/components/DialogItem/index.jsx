import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Time, CheckedIcon } from 'components';

import './DialogItem.scss';

const getAvatar = avatar => {
  if (avatar) {
    return (
      <img
        src="https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album"
        alt="avatar"
      />
    );
  } else {
    // make avatar
  }
};

const DialogItem = ({ user, message, unreadedMessages }) => {
  return (
    <div
      className={classNames('dialogs__item', {
        'dialogs__item--online': user.isOnline,
      })}
    >
      <div className="dialogs__item-avatar">
        {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
        {getAvatar(
          'https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album'
        )}
      </div>
      <div className="dialogs__item-info info">
        <div className="info__top">
          <b className="info__name">Фёдор Достоевский</b>
          <time className="info__date">
            {/* <Time date={new Date()} /> */}
            13:03
          </time>
        </div>
        <div className="info__bottom">
          <p className="info__text">
            Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши
            ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша
          </p>

          {unreadedMessages > 0 ? (
            <div className="info__count">
              {unreadedMessages > 9 ? '+9' : unreadedMessages}
            </div>
          ) : (
            <CheckedIcon isMe isReaded={false} />
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
