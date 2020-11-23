/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MessageBoard = (props) => {
  const admin = useSelector(state => state.check.admin);
  const {
    changeAuthor, author, changeMessage, message, send,
  } = props;
  const style = {
    verticalAlign: 'middle',
    marginBottom: '5px',
  };
  const history = useHistory();
  const click = () => {
    history.goBack();
  };
  const align = {
    textAlign: 'center',
  };
  return (
    <div style={align}>
      <form className="form-inline">
        <span className="mr-sm-2">留言者：</span>
        {/** 為登入狀態便鎖定版主姓名不能更改 */}
        {admin ? (<input type="text" value="Rock" className="form-control mb-2 mr-sm-2" />) : (<input onChange={changeAuthor} type="text" placeholder="訪客大名" className="form-control mb-2 mr-sm-2" value={author} />)}
        <span className="mr-sm-2">內容：</span>
        <textarea className="form-control mb-2 mr-sm-2" type="text" onChange={changeMessage} value={message} rows="2" cols="20" wrap="hard" style={style} />
        {' '}
&nbsp;
        <button type="button" className="btn btn-dark" onClick={send}>送出</button>
        {' '}
&nbsp;
        <button type="button" className="btn btn-default" onClick={click}>返回</button>
      </form>
    </div>
  );
};

export default MessageBoard;
