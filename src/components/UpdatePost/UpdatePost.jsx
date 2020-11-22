/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import axios from 'axios';
import Post from '../Post';
import { removePost, updatePost, removeAllComment } from '../../actions/actions';
import UpdateModal from '../UpdateModal';

const UpdatePost = () => {
  const posts = useSelector(state => state.posts.posts);
  const admin = useSelector(state => state.check.admin);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [aid, setAid] = useState('');
  const [atitle, setTitle] = useState('');
  const [acontent, setContent] = useState('');
  const [search, setSearch] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (id, title, content) => {
    setShow(true);
    setAid(id);
    setTitle(title);
    setContent(content);
  };
  const onRemove = (id) => {
    // 從資料庫中移除
    // axios.get(`http://localhost:3000/apis/delete/${id}`)
    //   .then((response) => {
    //     console.log(response.data);
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    dispatch(removePost(id));
    dispatch(removeAllComment(id));
  };
  if (admin !== true) {
    return <Redirect to="/posts" />;
  }

  // 更新資料
  const updateSend = () => {
    // 更改目前頁面的狀態在丟進store
    for (let i = 0; i < posts.length; i += 1) {
      if (posts[i]._id === aid) {
        posts[i].Username = atitle;
        posts[i].Article = acontent;
      }
    }
    dispatch(updatePost(posts));
    // console.log(posts);
    // axios.post(`http://localhost:3000/apis/update/${aid}`, {
    //   Title: atitle,
    //   Content: acontent,
    // })
    //   .then((response) => {
    //     console.log(response.data);
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    handleClose();
  };

  // 改變標題裡面的值
  const changeTitle = () => {
    const title = window.event.target.value;
    setTitle(title);
  };
  // 修改內容裡面的值
  const changeContent = () => {
    const content = window.event.target.value;
    setContent(content);
  };

  const changeSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchResult = posts.map((post) => {
    if (post.Username.indexOf(search) !== -1) {
      return <Post id={post._id} title={post.Username} content={post.Article} date={post.CreateDate} functions="modify" update={handleShow} remove={onRemove} />;
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
      <UpdateModal show={show} handleClose={handleClose} id={aid} title={atitle} content={acontent} titleChange={changeTitle} contentChange={changeContent} send={updateSend} />
    </div>
  );
};

export default UpdatePost;
