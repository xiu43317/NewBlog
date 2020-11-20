/* eslint-disable react/prop-types */
import React from 'react';
import Backdrop from '../Backdrop';

const Login = (props) => {
  const {
    show, closeLogin, check, changeUsername, changePassword, username, password,
  } = props;
  const style = {
    position: 'fixed',
    width: '300px',
    zIndex: '100',
    boxShadow: '1px 1px 1px black',
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid black',
    padding: '16px',
    left: '50%',
    top: '10%',
    boxSizing: 'border-box',
    transform: show ? 'translate(-50%,0)' : 'translate(-50%,-100vh)',
    opacity: show ? '1' : '0',
    transition: 'all 0.3s ease-out',
    textAlign: 'center',
  };
  return (
    <div>
      <Backdrop show={show} closeModal={closeLogin} />
      <div className="Modal" style={style}>
        <h2>管理者登入</h2>
        <p>使用者</p>
        <input type="text" name="title" onChange={changeUsername} value={username} />
        <p>密碼</p>
        <input type="text" name="passwd" onChange={changePassword} value={password} />
        <br />
        <button type="button" className="btn btn-secondary" onClick={closeLogin}>關閉</button>
        <button type="button" className="btn btn-success" onClick={check}>送出</button>
      </div>
    </div>
  );
};

export default Login;
