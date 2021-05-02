import React from 'react';
import { Button, Icon } from 'antd';

import { Dialogs, Messages, ChatInput, Status } from 'containers';
import './Home.scss';

const Home = () => {
  return (
    <section className="home">
      <div className="chat">
        <aside className="chat__sidebar">
          <header className="chat__sidebar-header">
            <div className="chat__sidebar-header-group">
              <Icon type="team" style={{ fontSize: '16px' }} />
              <span className="chat__sidebar-header-text">Список диалогов</span>
            </div>
            <Button type="link" shape="circle" icon="form" />
          </header>
          <div className="chat__sidebar-dialogs">
            <Dialogs userId={0} />
          </div>
        </aside>
        <div className="chat__dialog">
          <header className="chat__dialog-header">
            <div />
            <Status />
            <Button type="link" shape="circle" icon="ellipsis" size="large" />
          </header>
          <div className="chat__dialog-messages">
            <Messages />
          </div>
          <div className="chat__dialog-input">
            <ChatInput />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

/* 
https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album
https://sun9-4.userapi.com/impg/MO7YELMirUdWt1p6TEvlu5PsiZUy6hRy3sGLAQ/ZqkEN_4F_WU.jpg?size=1080x941&quality=96&sign=37d32a58fdf5a27ed149ef6334e3dd3a&type=album
*/
