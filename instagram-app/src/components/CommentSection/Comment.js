import React from 'react';
import PropTypes from 'prop-types';

import './CommentSection.css';

const Comment = ({ comment }) => {
  return (
    <div>
      <div className="Comment">
        <span className="Comment__username">{comment.username} </span>
        <span className="Comment__text">
          {` `}
          {comment.text}
        </span>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object,
};

export default Comment;
