import React from 'react';

// eslint-disable-next-line no-unused-vars
import { Message, Dialogs } from 'components';

import './Home.scss';
import sound from 'assets/sounds/aaa.mp3';

import { generateId } from 'utils/helpers';

const Home = () => {
  return (
    <section className="home">
      <Dialogs
        items={[
          {
            _id: generateId(),
            text:
              'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
            createdAt: 'Mon Apr 03 2021 11:34:09 GMT+0600',
            user: {
              _id: 'e7e4479b0f2cb2b86b2c866d66bfd8fa',
              fullname: 'Фёдор Достоевский',
              avatar: null,
            },
          },
          {
            _id: generateId(),
            text: 'Привет! Как твои дела?',
            createdAt: 'Mon Apr 05 2021 11:34:09 GMT+0600',
            user: {
              _id: '114ea7e9342bff5890fc80c2615d83c3',
              fullname: 'Алан Тьюринг',
              avatar: null,
            },
          },
        ]}
      />
      <Message
        avatar="https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album"
        date="Tue Mar 30 2021 21:16:33 GMT+0600"
        audio={sound}
      />
    </section>
  );
};

export default Home;

/* 
https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album
https://sun9-4.userapi.com/impg/MO7YELMirUdWt1p6TEvlu5PsiZUy6hRy3sGLAQ/ZqkEN_4F_WU.jpg?size=1080x941&quality=96&sign=37d32a58fdf5a27ed149ef6334e3dd3a&type=album

        {
          /*  <Message
        avatar="https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date="Tue Mar 30 2021 21:16:33 GMT+0600"
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random-1&nature,water',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random-2&nature,water',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random-3&nature,water',
          },
        ]}
      />
      <Message
        avatar="https://sun9-4.userapi.com/impg/MO7YELMirUdWt1p6TEvlu5PsiZUy6hRy3sGLAQ/ZqkEN_4F_WU.jpg?size=1080x941&quality=96&sign=37d32a58fdf5a27ed149ef6334e3dd3a&type=album"
        text="Салам, брат Цезарь!"
        date="Tue Mar 30 2021 21:20:33 GMT+0600"
        isMe
        isReaded
      />
      <Message
        avatar="https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album"
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random-4&nature,water',
          },
        ]}
      />
      <Message
        avatar="https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album"
        isTyping
      /> 
*/
