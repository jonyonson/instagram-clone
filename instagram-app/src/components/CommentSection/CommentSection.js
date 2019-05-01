import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-autosize-textarea';
import Comment from './Comment';
import './CommentSection.css';
// import dummyData from '../../data/dummy-data1';

import heart from '../../images/heart.png';
import comment from '../../images/comment.png';

class CommentSection extends React.Component {
  state = {};

  render() {
    // const dateString = dummyData[0].timestamp;
    // const dateObj = new Date(dateString);
    // const momentObj = moment(dateObj);
    // const momemntString =
    // console.log(momentObj);
    return (
      <div className="CommentSection">
        <div className="CommentSection__icon-bar">
          <div
            onClick={() => this.props.handleLike(this.props.post)}
            className="CommentSection__icon-bar__icon"
          >
            <img src={heart} alt="" />
          </div>
          <div className="CommentSection__icon-bar__icon">
            <img src={comment} alt="" />
          </div>
        </div>
        <div className="CommentSection__likes">
          {this.props.post.likes} likes
        </div>
        {this.props.post.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        <div className="CommentSection__time">{this.props.post.timestamp}</div>
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
  }
}

CommentSection.propTypes = {
  post: PropTypes.object,
};

export default CommentSection;
