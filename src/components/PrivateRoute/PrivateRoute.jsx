import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthed } from 'redux/authReducer';

const PrivateRoute = ({ children, redirectTo= '*' }) => {
  const isAuthed = useSelector(selectIsAuthed);
  return isAuthed ? children : <Navigate to={redirectTo}></Navigate>
};
export default PrivateRoute;
