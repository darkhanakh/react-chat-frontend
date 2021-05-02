const renderTextInfo = (hash, verified) => {
  if (hash) {
    if (verified) {
      return {
        status: 'success',
        message: 'Аккаунт успешно подтвержден!',
      };
    } else {
      return {
        status: 'error',
        message: 'Ошибка при подтверждении аккаунта!',
      };
    }
  } else {
    return {
      status: 'success',
      message: 'Ссылка с подтверждением аккаунта отправлена на E-Mail.',
    };
  }
};

export default renderTextInfo;
