/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Login from './LogIn';
import { setLogin } from '../actions/todolist';
import axios from 'axios';

const App = () => {


  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  const logout = () => {
    setShowAdminBoard(false);
  };

  const check = () => {
    var username = 'Rock';
    var password = '1234';
    axios.post('http://localhost:3000/apis/admin', {
      Username: username,
      Password: password,
    }).then((reponse) => {
      console.log(reponse.data);
      if (reponse.data === 'Success') {
        setShowAdminBoard(true);
      }
    });
    closeLogin();
  };

  return (
    <div>
      <Jumbotron>
        <h1>My Blog</h1>
      </Jumbotron>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">my blog</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            {/* 利用NavLink代替Link可以在<a>裡面設定classname */}
            <li className="nav-item"><a className="nav-link">文章列表</a></li>
            {showAdminBoard && (
            <li className="nav-item"><a className="nav-link">發表文章</a></li>
            )}
            {showAdminBoard && (
            <li className="nav-item"><a className="nav-link">管理文章</a></li>
            )}
            {showAdminBoard ? (<li className="nav-item" id="login"><a href="#" className="nav-link" onClick={logout}>登出</a></li>) : (<li className="nav-item" id="login"><a href="#" className="nav-link" onClick={openLogin}>登入</a></li>)}
          </ul>
        </div>
      </nav>
      <Login show={showLogin} closeLogin={closeLogin} check={check} />
    </div>
  );
};
export default App;
