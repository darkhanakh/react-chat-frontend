import React from 'react';

import checkedSvg from 'assets/image/checked.svg';
import notCheckedSvg from 'assets/image/not_checked.svg';

const CheckedIcon = ({ isMe, isReaded }) =>
  (isMe &&
    (isReaded ? (
      <img
        className="message__icon-readed"
        src={checkedSvg}
        alt="Readed icon"
      />
    ) : (
      <img
        className="message__icon-readed message__icon-readed--no"
        src={notCheckedSvg}
        alt="No readed icon"
      />
    ))) ||
  null;

export default CheckedIcon;
