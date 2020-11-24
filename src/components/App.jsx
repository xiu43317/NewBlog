/* eslint-disable no-script-url */
/* eslint-disable no-var */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowCircleUp } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';
import Login from './LogIn';
import AllPosts from './AllPosts';
import NewPost from './NewPost';
import UpdatePost from './UpdatePost';
import ReadPost from './ReadPost';
import {
  setLogin, setLogout, useUnload, setPosts, setComments,
} from '../actions/actions';


const App = () => {
  // const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [userName, setUserName] = useState('');
  const [passWord, setPassword] = useState('');
  const admin = useSelector(state => state.check.admin);
  const dispatch = useDispatch();
  const [showMenu, setMenu] = useState('');
  const [showScroll, setShowScroll] = useState(false);
  const posts = useSelector(state => state.posts.posts);
  const comments = useSelector(state => state.comments.comments);
  const newPost = useRef();
  newPost.current = { posts, comments };

  const getData = () => {
    axios.get('http://localhost:3000/apis/setmessage')
      .then((response) => {
        const { data } = response;
        console.log(data);
        // 再將資料為給store
        dispatch(setComments(data));
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get('http://localhost:3000/apis/show')
      .then((response) => {
        const { data } = response;
        console.log(data);
        // 再將資料為給store
        dispatch(setPosts(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const insertData = () => axios.post('http://localhost:3000/apis/updatebackend', newPost.current)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  useUnload(async (e) => {
    e.preventDefault();
    e.returnValue = insertData();
    // return '離開';
  });

  useEffect(() => {
    getData();
    // function confirmExit() {
    //   return 'show warning';
    // }
    // window.onbeforeunload = confirmExit;
  }, []);

  // 設置時間過久自動登出
  useEffect(() => {
    if (admin !== false) {
      const timeout = setTimeout(() => {
        Swal.fire('Oops...', 'You have been idling so long', 'error');
        // setShowAdminBoard(false);
        dispatch(setLogout());
      }, 1000 * 60 * 60);
      return () => clearTimeout(timeout);
    }
  }, [admin]);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  const toggleMenu = () => {
    if (showMenu === '') {
      setMenu('show');
    } else {
      setMenu('');
    }
  };

  // 開啟登入對話框
  const openLogin = () => {
    setShowLogin(true);
  };
  // 關閉登入對話框
  const closeLogin = () => {
    setShowLogin(false);
    setUserName('');
    setPassword('');
  };
  // 設置LogOut功能以及警告視窗
  const logout = () => {
    dispatch(setLogout());
    Swal.fire('Bye', 'Hope to meet you again', 'success');
  };

  // 改變使用者欄裡面的值
  const changeUsername = () => {
    const username = window.event.target.value;
    setUserName(username);
  };

  // 改變密碼欄裡面的值
  const changePassword = () => {
    const password = window.event.target.value;
    setPassword(password);
  };

  // 向伺服器要求帳密資訊核對
  const check = () => {
    var username = userName;
    var password = passWord;
    axios.post('http://localhost:3000/apis/admin', {
      Username: username,
      Password: password,
    }).then((reponse) => {
      console.log(reponse.data);
      if (reponse.data === 'Success') {
        // setShowAdminBoard(true);
        // 核對成功後將admin值改成true
        dispatch(setLogin());
        Swal.fire('Hello', 'Welcome to come back', 'success');
        // 清空對話框裡面的值
        setUserName('');
        setPassword('');
      } else {
        Swal.fire('Oops...', 'Username or Password was wrong', 'error');
      }
    });
    closeLogin();
    // 關閉後也是清除對話框的值
    setUserName('');
    setPassword('');
  };

  return (
    <div>
      <Jumbotron>
        <h1 align="center"> Rock`s blog</h1>
      </Jumbotron>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">首頁</a>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${showMenu}`}>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {/* 利用NavLink代替Link可以在<a>裡面設定classname */}
            <li className="nav-item"><NavLink to="/posts" className="nav-link">文章列表</NavLink></li>
            {admin && (
            <li className="nav-item"><NavLink to="/new_post" className="nav-link">發表文章</NavLink></li>
            )}
            {admin && (
            <li className="nav-item"><NavLink to="/update_post" className="nav-link">管理文章</NavLink></li>
            )}
          </ul>
          <ul className="navbar-nav my-2 my-lg-0">
            {admin ? (<li className="nav-item" id="login"><a href="#" className="nav-link" onClick={logout}>登出</a></li>) : (<li className="nav-item" id="login"><a href="#" className="nav-link my-2 my-sm-0" onClick={openLogin}>登入</a></li>)}
          </ul>
        </div>
      </nav>
      &nbsp;
      <Switch>
        <Route exact path="/" component={AllPosts} />
        <Route path="/posts" component={AllPosts} />
        <Route exact path="/new_post" component={NewPost} />
        <Route exact path="/update_post" component={UpdatePost} />
        <Route exact path="/read_post/:id" component={ReadPost} />
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
      <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }} />
    </div>
  );
};
export default App;
