import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

import { Message } from 'components';
import sound from 'assets/sounds/aaa.mp3';

const Messages = ({ items }) => {
  return items ? (
    <div>
      <Message
        avatar="https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album"
        date="Tue Mar 30 2021 21:16:33 GMT+0600"
        audio={sound}
      />
      <Message
        avatar="https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date="Sun Apr 21 2019 21:55:29"
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=2&nature,water',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=3&nature,water',
          },
        ]}
      />
      <Message
        avatar="https://sun9-4.userapi.com/impg/MO7YELMirUdWt1p6TEvlu5PsiZUy6hRy3sGLAQ/ZqkEN_4F_WU.jpg?size=1080x941&quality=96&sign=37d32a58fdf5a27ed149ef6334e3dd3a&type=album"
        text="Hello, World!"
        date="Sun Apr 21 2019 21:59:29"
        isMe={true}
        isReaded={false}
      />
      <Message
        avatar="https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album"
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
          },
        ]}
      />
      <Message
        avatar="https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date="Sun Apr 21 2019 21:55:29"
      />
      <Message
        avatar="https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date="Sun Apr 21 2019 21:55:29"
      />
      <Message
        avatar="https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date="Sun Apr 21 2019 21:55:29"
      />
      <Message
        avatar="https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date="Sun Apr 21 2019 21:55:29"
      />
      <Message
        avatar="https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date="Sun Apr 21 2019 21:55:29"
      />
      <Message
        avatar="https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date="Sun Apr 21 2019 21:55:29"
      />
      <Message
        avatar="https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date="Sun Apr 21 2019 21:55:29"
      />
      <Message
        avatar="https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date="Sun Apr 21 2019 21:55:29"
      />
    </div>
  ) : (
    <div className="message-empty">
      <Empty description="Откройте диалог" />
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
