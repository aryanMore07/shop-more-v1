import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router';
import { FilteredDataContext } from '../contexts/FilteredDataContext';

const RequireAuth = ({children}) => {
  const { state } = useContext(FilteredDataContext);
  const location = useLocation();
  console.log(location);
  const isLoggedIn = state.userDetails;
    return isLoggedIn ? (children) : (<Navigate to='/login' state={{ from: location }} />) 
}

export default RequireAuth
