import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { Button, Block } from 'components';
import { validateField } from 'utils/helpers';

const LoginForm = props => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isValid,
  } = props;

  return (
    <div>
      <div className="auth__top">
        <h2 className="auth__title">Войти в аккаунт</h2>
        <p className="auth__subtitle">Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form
          className="login-form"
          onSubmitCapture={handleSubmit}
          onFinish={onFinish}
        >
          <Form.Item
            validateStatus={validateField('email', touched, errors)}
            hasFeedback
            help={!touched.email ? '' : errors.email}
          >
            <Input
              id="email"
              size="large"
              type="email"
              placeholder="Логин"
              prefix={<UserOutlined style={{ color: 'rgba(0, 0, 0, .25)' }} />}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </Form.Item>
          <Form.Item
            hasFeedback
            validateStatus={validateField('password', touched, errors)}
            help={!touched.password ? '' : errors.password}
          >
            <Input
              id="password"
              size="large"
              type="password"
              placeholder="Пароль"
              prefix={<LockOutlined style={{ color: 'rgba(0, 0, 0, .25)' }} />}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>

          <Form.Item>
            {isSubmitting && !isValid && <span>Ошибка</span>}
            <Button type="primary" size="large" onClick={handleSubmit}>
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
