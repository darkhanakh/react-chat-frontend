import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import socket from 'core/socket';
import { messagesActions } from 'store/actions';
import { Messages as BaseMessages } from 'components';

const Messages = ({
  currentDialogId,
  items,
  fetchAllMessages,
  isLoading,
  addMessage,
  user,
}) => {
  const messagesRef = useRef(null);

  useEffect(() => {
    const onNewMessage = data => {
      addMessage(data);
    };

    if (currentDialogId) {
      fetchAllMessages(currentDialogId);
    }

    socket.on('SERVER:NEW_MESSAGE', onNewMessage);

    return () => socket.removeListener('SERVER:NEW_MESSAGE', onNewMessage);
  }, [addMessage, currentDialogId, fetchAllMessages]);

  useEffect(() => {
    messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);
  }, [items]);

  return (
    <BaseMessages
      user={user}
      items={items}
      isLoading={isLoading}
      blockRef={messagesRef}
    />
  );
};

export default connect(
  ({ dialogs, messages, user }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading,
    user,
  }),
  messagesActions
)(Messages);
