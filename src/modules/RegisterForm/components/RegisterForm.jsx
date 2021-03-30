import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from 'antd';
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  InfoCircleTwoTone,
} from '@ant-design/icons';

import { Button, Block } from 'components';

const RegisterForm = props => {
  const success = false;

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

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
            <Form.Item
              validateStatus={
                !touched.email ? '' : errors.email ? 'error' : 'success'
              }
              hasFeedback
              help={!touched.email ? '' : errors.email}
            >
              <Input
                id="email"
                size="large"
                placeholder="E-Mail"
                prefix={
                  <MailOutlined style={{ color: 'rgba(0, 0, 0, .25)' }} />
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </Form.Item>
            <Form.Item>
              <Input
                size="large"
                type="password"
                placeholder="Ваше имя"
                prefix={
                  <UserOutlined style={{ color: 'rgba(0, 0, 0, .25)' }} />
                }
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              validateStatus={
                !touched.password ? '' : errors.password ? 'error' : 'success'
              }
              help={!touched.password ? '' : errors.password}
            >
              <Input
                id="password"
                size="large"
                type="password"
                placeholder="Пароль"
                prefix={
                  <LockOutlined style={{ color: 'rgba(0, 0, 0, .25)' }} />
                }
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Input
                size="large"
                type="password"
                placeholder="Повторить пароль"
                prefix={
                  <LockOutlined style={{ color: 'rgba(0, 0, 0, .25)' }} />
                }
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="large" onClick={handleSubmit}>
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link to="/login" className="auth__register-link">
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div className="auth__success-icon">
              <InfoCircleTwoTone />
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
