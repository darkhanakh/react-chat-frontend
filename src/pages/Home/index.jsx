import React from 'react';

import { Message } from 'components';

import './Home.scss';

const Home = () => {
  return (
    <section className="home">
      <Message
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
    </section>
  );
};

export default Home;

/* 
https://sun9-36.userapi.com/impg/j3gNl81hObaVdkUDnKdrEsHLQ1dGb6y4UO541g/r9v5j5ksw3w.jpg?size=1926x1170&quality=96&sign=4b9bf023224fcb8ebb9f7afadf0a93c8&type=album
https://sun9-4.userapi.com/impg/MO7YELMirUdWt1p6TEvlu5PsiZUy6hRy3sGLAQ/ZqkEN_4F_WU.jpg?size=1080x941&quality=96&sign=37d32a58fdf5a27ed149ef6334e3dd3a&type=album
*/
