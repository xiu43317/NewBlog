/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import MessageBoard from '../MessageBoard';
import Messages from '../Messages';
import { removeComment, addComment } from '../../actions/actions';

const ReadPost = () => {
  const { id } = useParams();
  const admin = useSelector(state => state.check.admin);
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments.comments);

  // eslint-disable-next-line eqeqeq
  const post = posts.filter(post => post.id == id);
  const [visitor, setVisitor] = useState('');
  const [message, setMessage] = useState('');
  const messages = comments.filter(comment => comment.MessageID == id);
  const style = {
    width: '70%',
    marginLeft: '15%',
    overflow: 'auto',
  };

  const article = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    /* 只對英文起作用，以字母作為換行依據 */
    wordBreak: 'break-all',
    /* 只對英文起作用，以單詞作為換行依據 */
    wordWrap: 'break-word',
    whiteSpace: 'nowrap',
  };
  const changeAuthor = (e) => {
    const visitor = e.target.value;
    setVisitor(visitor);
  };

  const changeMessage = (e) => {
    const message = e.target.value;
    setMessage(message);
  };

  // const getMessage = () => {
  //   axios.get(`http://localhost:3000/apis/message/${id}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       dispatch(setComments(response.data));
  //     }).catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getMessage();
  // }, []);

  const send = () => {
    let author = '';
    if (admin) {
      author = 'Rock';
    } else {
      author = visitor;
    }
    // axios.post(`http://localhost:3000/apis/comment/${id}`, {
    //   Vistor: author,
    //   Comment: message,
    // })
    //   .then((response) => {
    //     getMessage();
    //     console.log(response.data);
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    const date = new Date().toISOString();
    dispatch(addComment({
      // eslint-disable-next-line radix
      id: '', Vistor: author, Comment: message, MessageID: parseInt(id), CreateDate: date,
    }));
    setMessage('');
    setVisitor('');
  };

  const removeMessage = (id, aid) => {
    // axios.get(`http://localhost:3000/apis/deleteMessage/${id}`)
    //   .then((response) => {
    //     console.log(response.data);
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    dispatch(removeComment({ id, aid }));
  };
  return (
    <div style={style}>
      <br />
      <h4 style={article}>{`標題： ${post[0].Username}`}</h4>
      <p>{`ㄧ共有${messages.length}則留言`}</p>
      <hr />
      <MessageBoard changeAuthor={changeAuthor} author={visitor} changeMessage={changeMessage} message={message} send={send} />
      {messages.map(comment => (<Messages id={comment.id} aid={comment.MessageID} author={comment.Vistor} message={comment.Comment} date={comment.CreateDate} remove={removeMessage} />))}
    </div>
  );
};

export default ReadPost;
