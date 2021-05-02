import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon } from 'antd';

import { Button, Block, FormField } from 'components';

const RegisterForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => {
  const success = false;

  return (
    <div>
      <div className="auth__top">
        <h2 className="auth__title">Регистрация</h2>
        <p className="auth__subtitle">
          Для входа в чат, вам нужно зарегистрироваться
        </p>
      </div>
      <Block>
        {!success ? (
          <Form className="login-form" onSubmitCapture={handleSubmit}>
            <FormField
              name="email"
              icon="mail"
              placeholder="E-Mail"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />
            <FormField
              name="fullname"
              icon="user"
              placeholder="Ваше имя и фамилия"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />
            <FormField
              name="password"
              icon="lock"
              placeholder="Пароль"
              type="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />
            <FormField
              name="password_2"
              type="password"
              icon="lock"
              placeholder="Повторите пароль"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />
            <Form.Item>
              <Button
                type="primary"
                size="large"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link to="/signin" className="auth__register-link">
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div className="auth__success-icon">
              <Icon type="info-circle" />
            </div>
            <h2 className="auth__success-title">Подтвердите свой аккаунт</h2>
            <p className="auth__success-text">
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;
