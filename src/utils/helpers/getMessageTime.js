import format from 'date-fns/format';
import isToday from 'date-fns/isToday';

const getMessageTime = createdAt =>
  isToday(new Date(createdAt))
    ? format(new Date(createdAt), 'HH:mm')
    : format(new Date(createdAt), 'dd.MM.yyyy');

export default getMessageTime;
