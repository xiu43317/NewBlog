import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import Post from '../Post';

const UpdatePost = () => {
  const posts = useSelector(state => state.posts.posts);
  const admin = useSelector(state => state.check.admin);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <th>內容</th>
            <th>日期</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (<Post id={post.id} title={post.Username} content={post.Article} date={post.CreateDate} functions="modify" showUpdate={handleShow} />))}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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
