import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPost = styled.article`
  width: 614px;
  max-width: 100%;
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  margin: 0 auto;
  margin-bottom: 60px;
  background: #fff;

  @media (max-width: 600px) {
    border: none;
  }
`;

const PostHeader = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 16px;
`;

const PostThumbnail = styled.img`
  height: 34px;
  width: 34px;
  border-radius: 100%;
`;

const PostUsername = styled.div`
  font-weight: bold;
  margin-left: 16px;
`;

const PostImage = styled.img`
  width: 100%;
`;

const PostContainer = props => {
  return (
    <StyledPost>
      <PostHeader>
        <PostThumbnail src={props.post.thumbnailUrl} alt="" />
        <PostUsername>{props.post.username}</PostUsername>
      </PostHeader>
      <PostImage src={props.post.imageUrl} alt="" />
      <CommentSection
        post={props.post}
        index={props.index}
        handleLike={props.handleLike}
        addComment={props.addComment}
      />
    </StyledPost>
  );
};

PostContainer.propTypes = {
  post: PropTypes.object,
  index: PropTypes.number,
  handleLike: PropTypes.func,
  addComment: PropTypes.func,
};

export default PostContainer;
