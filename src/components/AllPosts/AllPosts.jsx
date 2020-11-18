import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../Post';
import { setPosts } from '../../actions/actions';

const AllPosts = () => {
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();
  // 從資料庫中取得資料
  const getData = () => {
    axios.get('http://localhost:3000/apis/show')
      .then((response) => {
        const { data } = response;
        console.log(data);
        // 再將資料為給store
        dispatch(setPosts(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
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
          {posts.map(post => (<Post id={post.id} title={post.Username} content={post.Article} date={post.CreateDate} functions="guest" />))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPosts;
