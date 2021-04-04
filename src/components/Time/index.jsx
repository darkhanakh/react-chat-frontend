import React, { Fragment } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';

const Time = ({ date }) => (
  <Fragment>
    {formatDistanceToNow(new Date(date), {
      locale: ruLocale,
      addSuffix: true,
    })}
  </Fragment>
);

export default Time;
