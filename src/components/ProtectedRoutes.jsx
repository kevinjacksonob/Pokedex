import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoutes = () => {

  const userName = useSelector(state => state.name);

  if(true/*userName*/) {
    return <Outlet/>
  } else {
    return <Navigate to='/'/>
  }
};

export default ProtectedRoutes;