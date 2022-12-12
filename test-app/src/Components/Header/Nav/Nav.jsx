import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav>
      <NavLink to="/Home">Home</NavLink>
      <NavLink to="/Profile">Profile</NavLink>
      <NavLink to="/Info">Information</NavLink>
      <NavLink to="/Data">Data</NavLink>
    </nav>
  );
};

export default Nav;
