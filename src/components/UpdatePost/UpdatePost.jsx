import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Post from '../Post';

const UpdatePost = () => {
  const posts = useSelector(state => state.posts.posts);
  const admin = useSelector(state => state.check.admin);
  if (admin !== true) {
    return <Redirect to="/posts" />;
  }
  return (
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
        {posts.map(post => (<Post id={post.id} title={post.Username} content={post.Article} date={post.CreateDate} functions="modify" />))}
      </tbody>
    </table>
  );
};

export default UpdatePost;
