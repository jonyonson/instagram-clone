import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import TextareaAutosize from 'react-autosize-textarea';

import Comment from './Comment';
import './CommentSection.css';
import dummyData from '../../data/dummy-data1';

import heart from '../../images/heart.png';
import comment from '../../images/comment.png';

const CommentSection = props => {
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
      <div className="CommentSection__likes">{props.post.likes} likes</div>
      {props.post.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
      <div className="CommentSection__time">{props.post.timestamp}</div>
      {/* <div className="CommentSection__time">21 hours ago</div> */}
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

CommentSection.propTypes = {
  post: PropTypes.array,
};

export default CommentSection;
