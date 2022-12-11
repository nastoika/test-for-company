import React from 'react';
import { Navigate } from 'react-router-dom';
// import classes from './Header.module.css';

const Calendar = (isLoggedIn) => {
  if (!isLoggedIn.isLoggedIn) {
    return <Navigate replace to="/login"></Navigate>;
  } else {
    return <div>e</div>;
  }
};

export default Calendar;
