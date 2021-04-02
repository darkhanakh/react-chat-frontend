// eslint-disable-next-line import/no-anonymous-default-export
export default ({ isAuth, values, errors }) => {
  const rules = {
    email: value => {
      if (!value) {
        errors.email = 'Введите E-Mail';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Неверный E-Mail';
      }
    },

    password: value => {
      if (!value) {
        errors.password = 'Введите пароль';
      } else if (
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value)
      ) {
        errors.password = isAuth ? 'Неверный пароль' : `Слишком легкий пароль`;
      }
    },

    name: value => {
      if (!value) {
        errors.name = 'Введите имя';
      } else if (
        !/^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/i.test(
          value
        ) &&
        !value
      ) {
        errors.name = 'Введите корректное имя';
      }
    },
  };

  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};
