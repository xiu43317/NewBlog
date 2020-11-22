/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Post from '../Post';

const AllPosts = () => {
  const posts = useSelector(state => state.posts.posts);
  const [search, setSearch] = useState('');
  // 從資料庫中取得資料
  const changeSearch = (e) => {
    setSearch(e.target.value);
  };
  const searchResult = posts.map((post) => {
    if (post.Username.indexOf(search) !== -1) {
      return <Post id={post._id} title={post.Username} content={post.Article} date={post.CreateDate} functions="guest" />;
    }
    return null;
  });
  return (
    <div>
      <h3 className="title" align="center">
        一共有
        {posts.length}
        篇文章
        &nbsp;
        <input placeholder="搜尋標題" value={search} onChange={changeSearch} />
      </h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>標題</th>
            <th>創建日期</th>
            <th>操作</th>
          </tr>
        </thead>
        {searchResult}
      </table>
    </div>
  );
};

export default AllPosts;
