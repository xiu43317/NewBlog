/* eslint-disable no-var */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import Login from './LogIn';
import AllPosts from './AllPosts';
import NewPost from './NewPost';
import UpdatePost from './UpdatePost';


const App = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [userName, setUserName] = useState('');
  const [passWord, setPassword] = useState('');

  // 設置時間過久自動登出
  useEffect(() => {
    if (showAdminBoard !== false) {
      const timeout = setTimeout(() => {
        Swal.fire('Oops...', 'You have been idling so long', 'error');
        setShowAdminBoard(false);
      }, 1000 * 60 * 60);
      return () => clearTimeout(timeout);
    }
  }, [showAdminBoard]);

  const openLogin = () => {
    setShowLogin(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
    setUserName('');
    setPassword('');
  };

  const logout = () => {
    setShowAdminBoard(false);
    Swal.fire('Bye', 'Hope to meet you again', 'success');
  };

  // 改變使用者裡面的值
  const changeUsername = () => {
    const username = window.event.target.value;
    setUserName(username);
  };

  // 修改密碼裡面的值
  const changePassword = () => {
    const password = window.event.target.value;
    setPassword(password);
  };

  const check = () => {
    var username = userName;
    var password = passWord;
    axios.post('http://localhost:3000/apis/admin', {
      Username: username,
      Password: password,
    }).then((reponse) => {
      console.log(reponse.data);
      if (reponse.data === 'Success') {
        setShowAdminBoard(true);
        Swal.fire('Hello', 'Welcome to come back', 'success');
        setUserName('');
        setPassword('');
      } else {
        Swal.fire('Oops...', 'Username or Password was wrong', 'error');
      }
    });
    closeLogin();
    setUserName('');
    setPassword('');
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
            <li className="nav-item"><NavLink to="/posts" className="nav-link">文章列表</NavLink></li>
            {showAdminBoard && (
            <li className="nav-item"><NavLink to="/new_post" className="nav-link">發表文章</NavLink></li>
            )}
            {showAdminBoard && (
            <li className="nav-item"><NavLink to="/update_post" className="nav-link">管理文章</NavLink></li>
            )}
            {showAdminBoard ? (<li className="nav-item" id="login"><a href="#" className="nav-link" onClick={logout}>登出</a></li>) : (<li className="nav-item" id="login"><a href="#" className="nav-link" onClick={openLogin}>登入</a></li>)}
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={AllPosts} />
        <Route path="/posts" component={AllPosts} />
        <Route path="/new_post" component={NewPost} />
        <Route path="/update_post" component={UpdatePost} />
      </Switch>
      <Login
        show={showLogin}
        closeLogin={closeLogin}
        check={check}
        changeUsername={changeUsername}
        changePassword={changePassword}
        username={userName}
        password={passWord}
      />
    </div>
  );
};
export default App;
