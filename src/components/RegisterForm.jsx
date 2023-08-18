import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      registerUserThunk({
        name,
        email,
        password,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Name: </p>
        <input name="userName" type="text" required minLength={5} />
      </label>
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

export default RegisterForm;
