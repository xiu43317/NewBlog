/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';

const Messages = (props) => {
  const admin = useSelector(state => state.check.admin);
  const { author, message, date } = props;
  const dateString = new Date(date).toLocaleString();
  const deleteMessage = () => {
    const { remove, id } = props;
    remove(id);
  };
  return (
    <div className="card">
      <div className="card-header">
        留言者：
        {author}
        {admin && (<button type="button" className="btn btn-danger" id="removeMessage" onClick={deleteMessage}>刪除</button>)}
      </div>
      <div className="card-body">
        <p className="card-text">
          內容：
          {message}
          <snap id="messageDate">
            留言日期：
            {dateString}
          </snap>
        </p>
      </div>
    </div>
  );
};

export default Messages;
