import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import socket from 'core/socket';
import { Dialogs as BaseDialogs } from 'components';
import { dialogsActions } from 'store/actions';

const Dialogs = ({
  items,
  userId,
  fetchAllDialogs,
  setCurrentDialogId,
  currentDialogId,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [filtred, setFiltredItems] = useState(Array.from(items));

  const onChangeHandler = value => {
    setFiltredItems(
      items.filter(
        dialog =>
          dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setInputValue(value);
  };

  useEffect(() => {
    if (!items.length) {
      fetchAllDialogs();
    } else {
      setFiltredItems(items);
    }
    socket.on('SERVER:DIALOG_CREATED', data => {
      console.log('data: ', data);
      fetchAllDialogs();
    });
  }, [fetchAllDialogs, items]);

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeHandler}
      inputValue={inputValue}
      currentDialogId={currentDialogId}
      onSelectDialog={setCurrentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);
