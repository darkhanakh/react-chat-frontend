import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'antd';

import './Status.scss';

const Status = ({ online = true, fullname }) => (
  <header className="chat__dialog-header">
    <div />
    <div className="chat__dialog-header-center">
      <b className="chat__dialog-header-username">{fullname}</b>
      <div className="chat__dialog-header-status">
        <span className={classNames('status', { 'status--online': online })}>
          {online ? 'онлайн' : 'офлайн'}
        </span>
      </div>
    </div>
    <Button
      type="link"
      shape="circle"
      icon="more"
      size="large"
      onClick={() => {
        localStorage.removeItem('token');
        window.location.reload();
      }}
    />
  </header>
);

Status.propTypes = {
  online: PropTypes.bool,
  fullname: PropTypes.string,
};

export default Status;
