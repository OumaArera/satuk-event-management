import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './AuthContext';

const PrivateRoute = ({ children, allowedTypes }) => {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    // Not logged in, redirect to login
    return <Navigate to="/login" />;
  }

  if (!allowedTypes.includes(auth.type)) {
    // User doesn't have permission, redirect to home
    return <Navigate to="/" />;
  }

  // User is authenticated and has the required role
  return children;
};

export default PrivateRoute;
