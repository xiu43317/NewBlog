/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const Post = (props) => {
  const {
    functions, title, content, date, id,
  } = props;
  const [change, setChange] = useState(false);
  const [guest, setGuest] = useState(true);
  const [readTitle, setReadTitle] = useState(false);
  const dateString = new Date(date).toLocaleString();
  useEffect(() => {
    if (functions === 'modify') {
      setChange(true);
      setGuest(false);
    } else {
      setChange(false);
      setGuest(true);
    }
  }, [change]);
  const showUpdate = () => {
    const { id, update } = props;
    update(id);
  };
  const deleteArticle = () => {
    const { id, remove } = props;
    remove(id);
  };
  const showContent = () => {
    const { id } = props;
    const content = document.getElementById(id);
    if (content.style.display === 'none') {
      content.style.display = '';
      setReadTitle(true);
    } else {
      content.style.display = 'none';
      setReadTitle(false);
    }
  };
  const style = {
    boxShadow: '1px 1px 1px black',
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid black',
    padding: '16px',
    left: '40%',
    top: '10%',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease-out',
    textAlign: 'center',
    display: 'none',
  };
  return (
    <tbody>
      <tr>
        <td>{title}</td>
        <td>{dateString}</td>
        <td>
          {guest && (<button type="button" className="btn btn-secondary" onClick={showContent}>{readTitle ? '收合' : '閱讀'}</button>)}
          {guest && (<a type="button" className="btn btn-warning" href={`#/read_post/${id}`}>留言</a>)}
          {change && (<button type="button" className="btn btn-danger" onClick={deleteArticle}>刪除</button>)}
          {change && (<button type="button" className="btn btn-primary" onClick={showUpdate}>更新</button>)}
        </td>
      </tr>
      <tr>
        <td id={id} style={style} colSpan="4">{content}</td>
      </tr>
    </tbody>
  );
};

export default Post;
