/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { addPost } from '../../actions/actions';

const NewPost = () => {
  const admin = useSelector(state => state.check.admin);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);

  if (admin !== true) {
    return (<Redirect to="/posts" />);
  }
  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentInput = (e) => {
    setContent(e.target.value);
  };

  const click = () => {
    const date = new Date().toISOString();
    dispatch(addPost({
      id: 0, Username: title, Article: content, CreateDate: date,
    }));
    history.push('/');
  };

  const style = {
    width: '100%',
    height: '200px',
  };

  return (
    <form>
      <h3 className="title" align="center">
        一共有
        {posts.length}
        篇文章
      </h3>
      <div className="form-group">
        <label>標題</label>
        <input name="title" className="form-control" value={title} onChange={onChange} />
      </div>
      <div className="form-group">
        <label>內容</label>
        <br />
        <textarea onChange={onContentInput} value={content} style={style} />
      </div>
      <button type="button" className="btn btn-dark" onClick={click}>送出</button>
    </form>
  );
};

export default NewPost;
