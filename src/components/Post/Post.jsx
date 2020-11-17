/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const Post = (props) => {
  const { functions } = props;
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
      <td>Hello</td>
      <td>How are you</td>
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
