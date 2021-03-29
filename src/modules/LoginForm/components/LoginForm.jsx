import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { Button, Block } from 'components';

const LoginForm = () => {
  return (
    <div>
      <div className="auth__top">
        <h2 className="auth__title">Войти в аккаунт</h2>
        <p className="auth__subtitle">Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form className="login-form">
          <Form.Item validateStatus="success" hasFeedback>
            <Input
              prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large"
              placeholder="Логин"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large"
              type="password"
              placeholder="Пароль"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" size="large">
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Link to="/register" className="auth__register-link">
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;
