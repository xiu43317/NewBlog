/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import Post from '../Post';
import { removePost } from '../../actions/actions';

const UpdatePost = () => {
  const posts = useSelector(state => state.posts.posts);
  const admin = useSelector(state => state.check.admin);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [aid, setAid] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setAid(id);
  };
  const onRemove = (id) => {
    // 從資料庫中移除
    axios.get(`http://localhost:3000/apis/delete/${id}`)
      .then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });
    dispatch(removePost(id));
  };
  if (admin !== true) {
    return <Redirect to="/posts" />;
  }
  return (
    <div>
      <h3 className="title">
        一共有
        {posts.length}
        篇文章
      </h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>標題</th>
            <th>創建日期</th>
            <th>操作</th>
          </tr>
        </thead>
        {posts.map(post => (<Post id={post._id} title={post.Username} content={post.Article} date={post.CreateDate} functions="modify" update={handleShow} remove={onRemove} />))}
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            ID=
            {aid}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdatePost;
