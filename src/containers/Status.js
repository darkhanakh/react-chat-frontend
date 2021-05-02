import React from 'react';
import { connect } from 'react-redux';

import { Status as StatusBase } from 'components';

const Status = ({ currentDialogId, user, dialogs }) => {
  if (!dialogs.length || !currentDialogId) {
    return null;
  }

  const currentDialogObj = dialogs.filter(
    dialog => dialog._id === currentDialogId
  )[0];

  let partner = {};

  if (currentDialogObj.author._id === user._id) {
    partner = currentDialogObj.partner;
  } else {
    partner = currentDialogObj.author;
  }

  return (
    <React.Fragment>
      <StatusBase online={partner.isOnline} fullname={partner.fullname} />
    </React.Fragment>
  );
};

export default connect(({ dialogs, user }) => ({
  dialogs: dialogs.items,
  currentDialogId: dialogs.currentDialogId,
  user: user.data,
}))(Status);
