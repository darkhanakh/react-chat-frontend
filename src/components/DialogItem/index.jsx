import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { CheckedIcon, Avatar } from 'components';
import { getMessageTime } from 'utils/helpers';
import './DialogItem.scss';

const DialogItem = ({
  _id,
  unreadMessages,
  isMe,
  currentDialogId,
  lastMessage,
  onSelectDialog,
}) => {
  return (
    <React.Fragment>
      <Link to={`/dialog/${_id}`}>
        <div
          className={classNames('dialogs__item', {
            'dialogs__item--online': lastMessage.user.isOnline,
            'dialogs__item--selected': currentDialogId === _id,
          })}
          onClick={onSelectDialog.bind(this, _id)}
        >
          <div className="dialogs__item-avatar">
            <Avatar user={lastMessage.user} />
          </div>
          <div className="dialogs__item-info info">
            <div className="info__top">
              <b className="info__name">{lastMessage.user.fullname}</b>
              <time className="info__date">
                {getMessageTime(lastMessage.createdAt)}
              </time>
            </div>
            <div className="info__bottom">
              <p className="info__text">{lastMessage.text}</p>

              {isMe && <CheckedIcon isMe isReaded={false} />}
              {unreadMessages > 0 && (
                <div className="dialogs__item-info-bottom-count">
                  {unreadMessages > 9 ? '+9' : unreadMessages}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};

DialogItem.propTypes = {
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
};

export default DialogItem;
