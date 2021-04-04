import React from 'react';

import checkedSvg from 'assets/image/checked.svg';
import notCheckedSvg from 'assets/image/not_checked.svg';

const CheckedIcon = ({ isMe, isReaded }) =>
  isMe &&
  (isReaded ? (
    <img src={checkedSvg} alt="checked" className="message__icon-readed" />
  ) : (
    <img
      src={notCheckedSvg}
      alt="not checked"
      className="message__icon-readed message__icon-readed--not"
    />
  ));

export default CheckedIcon;
