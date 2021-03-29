import classNames from 'classnames';
import React from 'react';

import './Block.scss';

const Block = ({ children, className }) => {
  return <div className={classNames('block', className)}>{children}</div>;
};

export default Block;
