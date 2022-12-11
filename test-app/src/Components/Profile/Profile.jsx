import React from 'react';
import Description from './Description/Description';
import classes from './Profile.module.css';
import { Navigate } from 'react-router-dom';

const Profile = (isLoggedIn) => {
  if (!isLoggedIn.isLoggedIn) {
    return <Navigate replace to="/login"></Navigate>;
  } else {
    return (
      <div>
        <div className={classes.profile}></div>
        <div className={classes.container}>
          <div className={classes.avatar}></div>
          <Description />
        </div>
      </div>
    );
  }
};
export default Profile;
