import React from 'react';
import Post from '../Post';

const UpdatePost = () => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>標題</th>
          <th>內容</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <Post functions="modify" />
      </tbody>
    </table>
  );
};

export default UpdatePost;
