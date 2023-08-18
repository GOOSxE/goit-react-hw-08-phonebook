import { StyledNavLink } from 'App.styled';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectIsAuthed, selectUserToken } from 'redux/authReducer';
import { logoutUserThunk, refreshUserThunk } from 'redux/operations';
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);
  const isAuthed = useSelector(selectIsAuthed);

  useEffect(() => {
    if (!token || isAuthed) return;
    dispatch(refreshUserThunk());
  }, [token, dispatch, isAuthed]);

  const handlelogOut = () => {
    dispatch(logoutUserThunk());
  };
  return (
    <div className="App">
      <header>
        <nav>
          {isAuthed ? (
            <div>
              <StyledNavLink to="/contacts">Contacts Page</StyledNavLink>
              <StyledNavLink onClick={handlelogOut} to="/login">
                Log out
              </StyledNavLink>
            </div>
          ) : (
            <div>
              <StyledNavLink to="/login">Login Page</StyledNavLink>
              <StyledNavLink to="/register">Register Page</StyledNavLink>
            </div>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="*" element={<LoginPage />}></Route>
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
export default App;
