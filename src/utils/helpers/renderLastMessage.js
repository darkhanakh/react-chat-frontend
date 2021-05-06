const renderLastMessage = (message, userId) => {
  let text = '';
  if (!message.text && message.attachments.length) {
    text = 'прикрепленный файл';
  } else {
    text = message.text;
  }

  return `${message.user._id === userId ? 'Вы: ' : ''}${text}`;
};

export default renderLastMessage;
