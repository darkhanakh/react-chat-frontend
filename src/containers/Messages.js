import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { messagesActions } from 'store/actions';
import { Messages as BaseMessages } from 'components';

const Messages = ({ currentDialogId, items, fetchAllMessages, isLoading }) => {
  const messagesRef = useRef(null);

  useEffect(() => {
    if (currentDialogId) {
      fetchAllMessages(currentDialogId);
    }
  }, [currentDialogId, fetchAllMessages]);

  useEffect(() => {
    messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);
  }, [items]);

  return (
    <BaseMessages items={items} isLoading={isLoading} blockRef={messagesRef} />
  );
};

export default connect(
  ({ dialogs, messages }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading,
  }),
  messagesActions
)(Messages);
