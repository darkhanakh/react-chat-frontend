import React, { useState } from 'react';
import { Dialogs as BaseDialogs } from 'components';

const Dialogs = ({ items, userId }) => {
  const [inputValue, setInputValue] = useState('');
  const [filtred, setFiltredItems] = useState(Array.from(items));

  const onChangeHandler = value => {
    setFiltredItems(
      items.filter(
        dialog =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setInputValue(value);
  };

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeHandler}
      inputValue={inputValue}
    />
  );
};

export default Dialogs;
