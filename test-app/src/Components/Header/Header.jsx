import React from 'react';
import classes from './Header.module.css';
import Nav from './Nav/Nav';
import { NavLink } from 'react-router-dom';

const Header = ({ isLoggedIn, setIsLoggedIn, userName }) => {
  const handleLogOut = () => {
    localStorage.setItem('isLoggedIn', false);
    setIsLoggedIn(false);
  };

  return (
    <header className={classes.header}>
      {isLoggedIn ? (
        <div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/7172/7172721.png"></img>
          </div>
          <div className={classes.login}>
            Welcome, <strong> {userName}</strong>!
          </div>
          <Nav />
          <div className={classes.auth}>
            <NavLink onClick={handleLogOut} to="/Login">
              <div>Log Out</div>
              <div>
                <img
                  className={classes.icon}
                  src="https://img.icons8.com/external-bluetone-bomsymbols-/512/external-door-sign-symbols-bluetone-bluetone-bomsymbols-.png"
                ></img>
              </div>
            </NavLink>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/7172/7172721.png"></img>
          </div>
          <Nav />
          <div className={classes.auth}>
            <NavLink onClick={handleLogOut} to="/Login">
              Log in
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
