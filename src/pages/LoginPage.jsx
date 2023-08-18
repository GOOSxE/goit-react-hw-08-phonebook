import LoginForm from 'components/Login-form/Login-form';
import Section from 'components/Section/Section';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthed } from 'redux/authReducer';

const LoginPage = () => {
  const isAuthed = useSelector(selectIsAuthed);
  if (isAuthed) {
    return <Navigate to="/contacts"></Navigate>;
  }
  return (
    <div>
      <Section title="Login into your account!">
        <LoginForm></LoginForm>
      </Section>
    </div>
  );
};

export default LoginPage;
