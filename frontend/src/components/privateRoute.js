import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';

function PrivateRoute({ isAuthenticated }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
