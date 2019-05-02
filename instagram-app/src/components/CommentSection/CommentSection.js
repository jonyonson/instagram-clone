import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-autosize-textarea';
import moment from 'moment';
import styled from 'styled-components';

// import Components
import Comment from './Comment';

// import icon images
import heart from '../../images/heart.png';
import heartFilled from '../../images/heart--filled.png';
import comment from '../../images/comment.png';

const IconBar = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 40px;
  cursor: pointer;
`;

const CommentLikes = styled.div`
  font-weight: bold;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 8px;
`;

const CommentTime = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  font-size: 10px;
  letter-spacing: 0.2px;
  color: #999;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

const CommentForm = styled.form`
  display: flex;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  border-top: 1px solid #e6e6e6;
  min-height: 56px;
`;
const PostButton = styled.button`
  border: 0;
  color: #3897f0;
  display: inline;
  padding: 0;
  font-weight: bold;
  font-size: 14px;
  outline: 0;
  cursor: pointer;
  :disabled {
    color: #c4e1fb;
  }
`;

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
    const likedByUser = this.state.likedByUser;
    return (
      <div className="CommentSection">
        <IconBar>
          <IconContainer onClick={this.handleHeartClick}>
            {!likedByUser && <img src={heart} alt="unfavorited" />}
            {likedByUser && <img src={heartFilled} alt="favorited" />}
          </IconContainer>
          <IconContainer>
            <img src={comment} alt="" />
          </IconContainer>
        </IconBar>
        <CommentLikes>{this.props.post.likes} likes</CommentLikes>
        {this.props.post.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        <CommentTime>
          {moment(
            this.props.post.timestamp,
            'MMMM Do YYYY, hh:mm:ss a'
          ).fromNow()}
        </CommentTime>
        <div>
          <CommentForm onSubmit={this.addNewComment}>
            <TextareaAutosize
              style={{
                width: '100%',
                height: 18,
                fontSize: 14,
                resize: 'none',
                border: 0,
                outline: 0,
                padding: 0,
                marginTop: 20,
              }}
              placeholder="Add a comment..."
              autoComplete="off"
              autoCorrect="off"
              name="value"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <PostButton type="submit" disabled={!this.state.value.length}>
              Post
            </PostButton>
          </CommentForm>
        </div>
      </div>
    );
  }
}

CommentSection.propTypes = {
  post: PropTypes.object,
};

export default CommentSection;
