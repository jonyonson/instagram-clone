import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';

const PostContainer = props => {
  return (
    <article className="PostContainer">
      <header className="PostContainer__header">
        <div className="PostContainer__header__thumbnail">
          <img src={props.post.thumbnailUrl} alt="" />
        </div>
        <div className="PostContainer__header__username">
          {props.post.username}
        </div>
      </header>
      <div className="PostContainer__image">
        <img src={props.post.imageUrl} alt="" />
      </div>
      <CommentSection post={props.post} handleLike={props.handleLike} />
    </article>
  );
};

PostContainer.propTypes = {
  post: PropTypes.object,
};

export default PostContainer;
