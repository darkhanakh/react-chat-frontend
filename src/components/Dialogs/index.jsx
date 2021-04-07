import React from 'react';
import orderBy from 'lodash/orderBy';

import { DialogItem } from 'components';

import './Dialogs.scss';

const Dialogs = ({ items, userId }) => {
  return (
    <section className="dialogs">
      {orderBy(items, ['createdAt'], ['desc']).map(item => (
        <DialogItem key={item._id} isMe={item.user._id === userId} {...item} />
      ))}
    </section>
  );
};

export default Dialogs;
