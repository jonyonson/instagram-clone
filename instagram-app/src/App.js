import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './components/SearchBar/SearchBar';
// import PostContainer from './components/PostContainer/PostContainer';
import PostsPage from './components/PostsPage/PostsPage';

// import css
import './App.css';

class App extends React.Component {
  // state = {
  //   posts: [],
  // };

  // componentDidMount() {
  //   this.setState({
  //     posts: data,
  //   });
  // }

  handleLike = post => {
    console.log('like');
    console.log(post);
    // this doesn't wort because timestamps could possibly not be unique
    // const remainingPosts = this.state.posts.filter(
    //   x => post.timestamp !== x.timestamp
    // );
    post.likes += 1;
    console.log(post.likes);

    // console.log(this.state.posts.length);
    // console.log(remainingPosts.length);
  };

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsPage handleLike={this.handleLike} />
      </div>
    );
  }
}

App.propTypes = {
  handleLike: PropTypes.func,
};

export default App;
