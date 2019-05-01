import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostsPage/PostsPage';

// import css
import './App.css';

// import data
import data from './data/dummy-data1';

class App extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.setState({
      posts: data,
    });
  }

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
      <div className="App">
        <SearchBar />
        <PostsPage
          posts={this.state.posts}
          handleLike={this.handleLike}
          addComment={this.addComment}
        />
      </div>
    );
  }
}

App.propTypes = {
  handleLike: PropTypes.func,
};

export default App;
