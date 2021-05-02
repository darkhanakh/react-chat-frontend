import React from 'react';

import { ChatInput as ChatInputBase } from 'components';
import { connect } from 'react-redux';
import { messagesActions } from 'store/actions';

const ChatInput = ({ fetchSendMessage, currentDialogId }) =>
  (
    <React.Fragment>
      <ChatInputBase onSendMessage={fetchSendMessage} currentDialogId={currentDialogId} />
    </React.Fragment>
  );

export default connect(
  ({ dialogs }) => dialogs,
  messagesActions
)(ChatInput);