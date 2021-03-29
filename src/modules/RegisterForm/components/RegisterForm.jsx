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

const RegisterForm = () => {
  const success = true;

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
          <Form className="login-form">
            <Form.Item validateStatus="success" hasFeedback>
              <Input
                size="large"
                placeholder="E-Mail"
                prefix={
                  <MailOutlined style={{ color: 'rgba(0, 0, 0, .25)' }} />
                }
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
            <Form.Item>
              <Input
                size="large"
                type="password"
                placeholder="Пароль"
                prefix={
                  <LockOutlined style={{ color: 'rgba(0, 0, 0, .25)' }} />
                }
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
              <Button type="primary" size="large">
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
