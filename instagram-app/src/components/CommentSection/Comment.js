import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import './CommentSection.css';

const StyledComment = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 6px;
`;

const Username = styled.span`
  font-weight: bold;
`;

const Comment = ({ comment }) => {
  return (
    <div>
      <StyledComment>
        <Username>{comment.username}</Username>
        <span> {comment.text}</span>
      </StyledComment>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object,
};

export default Comment;
