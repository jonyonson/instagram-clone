import React from 'react';
import './CommentSection.css';

import dummyData from '../../data/dummy-data1';

const Comment = () => {
  return (
    <div>
      {dummyData[0].comments.map(comment => (
        <div className="Comment">
          <span className="Comment__username">{comment.username} </span>
          <span className="Comment__text">
            {` `}
            {comment.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Comment;
