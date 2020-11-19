import React from 'react';
import { useParams } from 'react-router-dom';

const ReadPost = () => {
  const { id } = useParams();
  return (
    <div>
      Portfolio component
      <p>
        Topic:
        {id}
      </p>
    </div>
  );
};

export default ReadPost;
