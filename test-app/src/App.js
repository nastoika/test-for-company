import './App.css';
import React from 'react';
import { useState } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Info from './Components/Info/Info';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Data from './Components/Data/Data';
import Login from './Components/Login/Login';
import data from './data.json';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );
  const [userName, setUserName] = useState();

  return (
    <BrowserRouter>
      <div className="app">
        <Header
          userName={userName}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/profile"
            element={<Profile isLoggedIn={isLoggedIn} />}
          />
          <Route path="/info" element={<Info />} />
          <Route
            path="/data"
            element={<Data data={data} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/login"
            element={
              <Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
