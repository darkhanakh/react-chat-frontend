import React, { useState } from 'react';
import { connect } from 'react-redux';
import { userApi, dialogsApi } from 'utils/api';

import { Sidebar as SidebarBase } from 'components';

const Sidebar = ({ user }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(false);
  const [messageText, setMessageText] = useState('');

  const onModalClose = () => setIsModalVisible(false);

  const onModalShow = () => setIsModalVisible(true);

  const handleChangeInput = text => setInputValue(text);

  const onSearch = async value => {
    setIsLoading(true);
    try {
      const { data } = await userApi.findUser(value);

      setUsers(data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  };

  const onSelectUser = userId => {
    setSelectedUserId(userId);
  };

  const onAddDialog = async () => {
    try {
      await dialogsApi.create({
        partner: selectedUserId,
        text: messageText,
      });
      onModalClose();
    } catch (e) {
      setIsLoading(false);
    }
  };

  const onChangeTextArea = e => setMessageText(e.target.value);

  return (
    <SidebarBase
      user={user}
      users={users}
      isModalVisible={isModalVisible}
      onClose={onModalClose}
      onShow={onModalShow}
      inputValue={inputValue}
      onChangeInput={handleChangeInput}
      onSearch={onSearch}
      onSelectUser={onSelectUser}
      isLoading={isLoading}
      messageText={messageText}
      onModalOk={onAddDialog}
      onChangeTextArea={onChangeTextArea}
      selectedUserId={selectedUserId}
    />
  );
};

export default connect(({ user }) => ({ user: user.data }))(Sidebar);
