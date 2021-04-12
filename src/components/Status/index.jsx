import React from 'react';
import classNames from 'classnames';

import './Status.scss';

const Status = ({ isOnline }) => (
  <div className={classNames('status', { 'status--online': isOnline })}>
    {isOnline ? 'онлайн' : 'оффлайн'}
  </div>
);

export default Status;
