/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const Post = (props) => {
  const {
    functions, title, content, date,
  } = props;
  const [change, setChange] = useState(false);
  const [guest, setGuest] = useState(true);
  useEffect(() => {
    if (functions === 'modify') {
      setChange(true);
      setGuest(false);
    } else {
      setChange(false);
      setGuest(true);
    }
  }, [change]);
  return (
    <tr>
      <td>{title}</td>
      <td>{content}</td>
      <td>{date}</td>
      <td>
        {guest && (<button type="button" className="btn btn-info">閱讀</button>)}
        {guest && (<button type="button" className="btn btn-secondary">留言</button>)}
        {change && (<button type="button" className="btn btn-danger">刪除</button>)}
        {change && (<button type="button" className="btn btn-primary">更新</button>)}
      </td>
    </tr>
  );
};

export default Post;
