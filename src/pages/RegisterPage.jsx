import RegisterForm from 'components/RegisterForm';
import Section from 'components/Section/Section';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthed } from 'redux/authReducer';

const RegisterPage = () => {
  const isAuthed = useSelector(selectIsAuthed);
  if (isAuthed) {
    return <Navigate to="/contacts"></Navigate>;
  }
  return (
    <div>
      <Section title="Register your new account!">
        <RegisterForm />
      </Section>
    </div>
  );
};

export default RegisterPage;
