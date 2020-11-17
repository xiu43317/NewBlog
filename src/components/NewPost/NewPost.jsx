import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const NewPost = () => {
  const admin = useSelector(state => state.check.admin);
  if (admin !== true) {
    return (<Redirect to="/posts" />);
  }
  return <div>This is  NewPost</div>;
};

export default NewPost;
