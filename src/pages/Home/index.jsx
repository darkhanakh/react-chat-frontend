import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { dialogsActions } from 'store/actions';
import { Messages, ChatInput, Status, Sidebar } from 'containers';
import './Home.scss';

const Home = ({ location: { pathname }, setCurrentDialogId, user }) => {
  useEffect(() => {
    const dialogId = pathname.split('/').pop();
    setCurrentDialogId(dialogId);
  }, [pathname, setCurrentDialogId]);

  return (
    <section className="home">
      <div className="chat">
        <Sidebar />
        {user && (
          <div className="chat__dialog">
            <Status />

            <Messages />

            <div className="chat__dialog-input">
              <ChatInput />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default withRouter(
  connect(({ user }) => ({ user: user.data }), dialogsActions)(Home)
);

/* 
https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album
https://sun9-4.userapi.com/impg/MO7YELMirUdWt1p6TEvlu5PsiZUy6hRy3sGLAQ/ZqkEN_4F_WU.jpg?size=1080x941&quality=96&sign=37d32a58fdf5a27ed149ef6334e3dd3a&type=album
*/
