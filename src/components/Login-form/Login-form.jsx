import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from 'redux/operations';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;
    dispatch(
      loginUserThunk({
        email,
        password,
      })
    );
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Email: </p>
        <input name="userEmail" type="email" />
      </label>
      <label>
        <p>Password: </p>
        <input name="userPassword" type="password" required />
      </label>
      <button type="submit">Sign in!</button>
    </form>
  );
};

export default LoginForm;
