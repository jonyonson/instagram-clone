import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';

//import css
import './PostsPage.css';

// import comment data
import data from '../../data/dummy-data1';

class PostsPage extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.setState({
      posts: data,
    });
  }

  search = searchTerm => {
    const updatedPosts = data.filter(post => {
      return post.username.includes(searchTerm);
    });

    if (searchTerm.length > 0) {
      this.setState({ posts: updatedPosts });
    } else {
      this.setState({ posts: data });
    }
  };

  addComment = (newComment, index) => {
    const updatedPost = [...this.state.posts];
    updatedPost[index].comments = [...updatedPost[index].comments, newComment];
    this.setState({ posts: updatedPost });
  };

  handleLike = (index, likedByUser) => {
    const updatedPost = [...this.state.posts];
    if (likedByUser) {
      updatedPost[index].likes -= 1;
    } else {
      updatedPost[index].likes += 1;
    }
    this.setState({ posts: updatedPost });
  };
  render() {
    return (
      <>
        <SearchBar search={this.search} />
        <section className="PostsPage">
          {this.state.posts.map((post, index) => (
            <PostContainer
              key={index}
              post={post}
              index={index}
              handleLike={this.handleLike}
              addComment={this.addComment}
            />
          ))}
        </section>
      </>
    );
  }
}

export default PostsPage;
