import React from 'react'
import { Navigate, useLocation } from 'react-router';

const RequireAuth = ({children}) => {
    const location = useLocation();
  const isLoggedIn = false;
    return isLoggedIn ? (children) : (<Navigate to='/signup' state={{ from: location }} />) 
}

export default RequireAuth
