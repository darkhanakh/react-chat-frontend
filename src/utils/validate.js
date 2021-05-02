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

    fullname: value => {
      if (!isAuth && !value) {
        errors.fullname = 'Укажите свое имя и фамилию';
      }
    },

    password: value => {
      if (!value) {
        errors.password = 'Введите пароль';
      } else if (
        !isAuth &&
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value)
      ) {
        errors.password = isAuth ? 'Неверный пароль' : `Слишком легкий пароль`;
      }
    },

    password_2: value => {
      if (!isAuth && value !== values.password) {
        errors.password_2 = 'Пароли не совпадают';
      } else if (value === '') {
        errors.password_2 = 'Введите пароль';
      }
    },
  };

  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};
