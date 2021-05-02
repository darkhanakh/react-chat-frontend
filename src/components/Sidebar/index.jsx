import React from 'react';
import { Icon, Button, Modal, Select, Input, Form } from 'antd';

import { Dialogs } from 'containers';

import './Sidebar.scss';

const Sidebar = ({
  user,
  users,
  isModalVisible,
  onClose,
  onShow,
  inputValue,
  onChangeInput,
  onSearch,
  onSelectUser,
  isLoading,
  messageText,
  onModalOk,
  onChangeTextArea,
  selectedUserId,
}) => {
  const options = users.map(user => (
    <Select.Option key={user._id}>{user.fullname}</Select.Option>
  ));

  return (
    <div>
      <aside className="chat__sidebar">
        <header className="chat__sidebar-header">
          <div className="chat__sidebar-header-group">
            <Icon type="team" style={{ fontSize: '16px' }} />
            <span className="chat__sidebar-header-text">Список диалогов</span>
          </div>
          <Button type="link" shape="circle" icon="form" onClick={onShow} />
        </header>
        <div className="chat__sidebar-dialogs">
          <Dialogs userId={user && user._id} />
        </div>
        <Modal
          title="Создать диалог"
          visible={isModalVisible}
          onCancel={onClose}
          footer={[
            <Button key="back" onClick={onClose}>
              Закрыть
            </Button>,
            <Button
              disabled={!messageText}
              key="submit"
              type="primary"
              loading={isLoading}
              onClick={onModalOk}
            >
              Создать
            </Button>,
          ]}
        >
          <Form className="add-dialog-form">
            <Form.Item label="Введите имя пользователя или E-Mail">
              <Select
                value={inputValue}
                onSearch={onSearch}
                onChange={onChangeInput}
                onSelect={onSelectUser}
                notFoundContent={null}
                style={{ width: '100%' }}
                defaultActiveFirstOption={false}
                showArrow={false}
                filterOption={false}
                placeholder="Введите имя пользователя или почту"
                showSearch
              >
                {options}
              </Select>
            </Form.Item>
            {selectedUserId && (
              <Form.Item label="Введите текст сообщения">
                <Input.TextArea
                  placeholder="Введите текст сообщения"
                  autosize={{ minRows: 3, maxRows: 10 }}
                  onChange={onChangeTextArea}
                  value={messageText}
                />
              </Form.Item>
            )}
          </Form>
        </Modal>
      </aside>
    </div>
  );
};

Sidebar.defaultProps = {
  users: [],
};

export default Sidebar;
