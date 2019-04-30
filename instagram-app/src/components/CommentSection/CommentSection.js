import React from 'react';
import moment from 'moment';
import TextareaAutosize from 'react-autosize-textarea';

import Comment from './Comment';
import './CommentSection.css';
import dummyData from '../../data/dummy-data1';

import heart from '../../images/heart.png';
import comment from '../../images/comment.png';

const CommentSection = () => {
  const dateString = dummyData[0].timestamp;
  const dateObj = new Date(dateString);
  const momentObj = moment(dateObj);
  // const momemntString =
  console.log(momentObj);
  return (
    <div className="CommentSection">
      <div className="CommentSection__icon-bar">
        <div className="CommentSection__icon-bar__icon">
          <img src={heart} alt="" />
        </div>
        <div className="CommentSection__icon-bar__icon">
          <img src={comment} alt="" />
        </div>
      </div>
      <div className="CommentSection__likes">{dummyData[0].likes} likes</div>
      <Comment />
      {/* <div className="CommentSection__time">{dummyData[0].timestamp}</div> */}
      <div className="CommentSection__time">21 hours ago</div>
      <div className="CommentSection__add-comment">
        <TextareaAutosize
          placeholder="Add a comment..."
          autoComplete="off"
          autoCorrect="off"
        />
        <button type="submit">Post</button>
      </div>
    </div>
  );
};

export default CommentSection;
