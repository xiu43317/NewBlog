/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const NewPost = () => {
  const admin = useSelector(state => state.check.admin);
  if (admin !== true) {
    return (<Redirect to="/posts" />);
  }
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const posts = useSelector(state => state.posts.posts);

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentInput = (e) => {
    setContent(e.target.value);
  };

  return (
    <form>
      <h3 className="title">
        一共有
        {posts.length}
        篇文章
      </h3>
      <div className="form-group">
        <label>標題</label>
        <input name="title" className="form-control" placeholder="title" value={title} onChange={onChange} />
      </div>
      <div className="form-group">
        <label>內容</label>
        <br />
        <textarea onChange={onContentInput} value={content} />
      </div>
      <button type="button" className="btn btn-dark">送出</button>
    </form>
  );
};

export default NewPost;