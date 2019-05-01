import React from 'react';
import './PostsPage.css';
import PostContainer from '../PostContainer/PostContainer';

// import comment data
// import data from '../../data/dummy-data1';

class PostsPage extends React.Component {
  // state = {
  //   posts: [],
  // };

  // componentDidMount() {
  //   this.setState({
  //     posts: data,
  //   });
  // }

  render() {
    return (
      <section className="PostsPage">
        {this.props.posts.map((post, index) => (
          <PostContainer
            key={index}
            post={post}
            index={index}
            handleLike={this.handleLike}
            addComment={this.props.addComment}
          />
        ))}
      </section>
    );
  }
}

export default PostsPage;
