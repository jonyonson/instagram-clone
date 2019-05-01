import React from 'react';
// import moment from 'moment';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-autosize-textarea';

// import Components
import Comment from './Comment';

// import icon images
import heart from '../../images/heart.png';
import comment from '../../images/comment.png';

// import css
import './CommentSection.css';

class CommentSection extends React.Component {
  state = {
    value: '',
    likedByUser: false,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addNewComment = e => {
    e.preventDefault();
    const newComment = {
      username: 'jonyonson',
      text: this.state.value,
    };
    this.props.addComment(newComment, this.props.index);
    this.setState({ value: '' });
  };

  handleHeartClick = e => {
    const likedByUser = this.state.likedByUser;
    this.props.handleLike(this.props.index, likedByUser);
    this.setState({
      likedByUser: !likedByUser,
    });
  };

  render() {
    // const dateString = this.props.post.timestamp;
    // const dateObj = new Date(dateString);
    // const momentObj = moment(dateObj);
    // console.log(momentObj);

    const likedByUser = this.state.likedByUser;
    return (
      <div className="CommentSection">
        <div className="CommentSection__icon-bar">
          <div
            onClick={this.handleHeartClick}
            className={
              likedByUser
                ? 'CommentSection__icon-bar__icon CommentSection__icon-bar__icon--liked'
                : 'CommentSection__icon-bar__icon'
            }
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
        <div className="CommentSection__add-comment">
          <form onSubmit={this.addNewComment}>
            <TextareaAutosize
              placeholder="Add a comment..."
              autoComplete="off"
              autoCorrect="off"
              name="value"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input type="submit" value="Post" />
          </form>
        </div>
      </div>
    );
  }
}

CommentSection.propTypes = {
  post: PropTypes.object,
};

export default CommentSection;
