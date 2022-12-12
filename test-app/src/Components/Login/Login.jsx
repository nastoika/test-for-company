import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Login.module.css';
import { useState } from 'react';

const Login = ({ setIsLoggedIn, setUserName }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const loginName = 'Admin';
  const passwordName = '12345678';

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  const HandleLogIn = (e) => {
    e.preventDefault();
    if (login !== 'Admin' || password !== '12345678') {
      alert('Login or password is wrong, try again!');
    } else {
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('userName', login);
      setUserName(login);
      setIsLoggedIn(true);
      navigate('/profile');
    }
  };

  return (
    <div>
      <form className={classes.loginForm} onSubmit={HandleLogIn}>
        <div className={classes.title}>Authorization</div>
        <div>
          <input
            className={classes.inputLogin}
            type="text"
            placeholder="Enter your login"
            onChange={handleLoginChange}
            required
          />
        </div>
        <div>
          <input
            className={classes.inputLogin}
            type="password"
            placeholder="Enter your password"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <button className={classes.btn} type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
