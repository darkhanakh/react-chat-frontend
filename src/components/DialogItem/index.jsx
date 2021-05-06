import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { CheckedIcon, Avatar } from 'components';
import { getMessageTime, renderLastMessage } from 'utils/helpers';
import './DialogItem.scss';

const DialogItem = ({
  _id,
  unreadMessages,
  isMe,
  currentDialogId,
  lastMessage,
  readed,
  partner,
  userId,
}) => {
  return (
    <React.Fragment>
      <Link to={`/dialog/${_id}`}>
        <div
          className={classNames('dialogs__item', {
            'dialogs__item--online': partner.isOnline,
            'dialogs__item--selected': currentDialogId === _id,
          })}
        >
          <div className="dialogs__item-avatar">
            <Avatar user={partner} />
          </div>
          <div className="dialogs__item-info info">
            <div className="info__top">
              <b className="info__name">{partner.fullname}</b>
              <time className="info__date">
                {getMessageTime(lastMessage.createdAt)}
              </time>
            </div>
            <div className="info__bottom">
              <p className="info__text">
                {renderLastMessage(lastMessage, userId)}
              </p>

              {isMe && <CheckedIcon isMe={isMe} isReaded={readed} />}
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
