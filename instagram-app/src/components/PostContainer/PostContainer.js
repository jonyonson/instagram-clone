import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css';

import dummyData from '../../data/dummy-data1';

const PostContainer = () => {
  return (
    <article className="PostContainer">
      <header className="PostContainer__header">
        <div className="PostContainer__header__thumbnail">
          <img src={dummyData[0].thumbnailUrl} alt="" />
        </div>
        <div className="PostContainer__header__username">
          {dummyData[0].username}
        </div>
      </header>
      <div className="PostContainer__image">
        <img src={dummyData[0].imageUrl} alt="" />
      </div>
      <CommentSection />
    </article>
  );
};
export default PostContainer;
