import React from 'react';
import orderBy from 'lodash/orderBy';
import { Input, Empty } from 'antd';

import { SearchOutlined } from '@ant-design/icons';

import { DialogItem } from 'components';

const Dialogs = ({
  items,
  userId,
  onSearch,
  inputValue,
  onSelectDialog,
  currentDialogId,
}) => {
  return (
    <section className="dialogs">
      <div className="dialogs__search">
        <Input
          placeholder="Поиск среди контактов"
          onChange={e => onSearch(e.target.value)}
          prefix={<SearchOutlined style={{ color: '#cbcbcb' }} />}
          className="chat__sidebar-search-input"
          style={{ backgroundColor: '#f7f8f9' }}
          value={inputValue}
        />
      </div>
      {items.length ? (
        orderBy(items, ['created_at'], ['desc']).map(item => (
          <DialogItem
            onSelectDialog={onSelectDialog}
            key={item._id}
            isMe={item.user._id === userId}
            currentDialogId={currentDialogId}
            {...item}
          />
        ))
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Ничего не найдено"
        />
      )}
    </section>
  );
};

export default Dialogs;
