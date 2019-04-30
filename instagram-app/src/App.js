import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import PropTypes from 'prop-types';

// import css
import './App.css';

// import comment data
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

  handleLike = () => {
    console.log('like');
  };

  render() {
    return (
      <div className="App">
        <SearchBar />
        <section className="App__Posts">
          {this.state.posts.map((post, index) => (
            <PostContainer
              key={index}
              post={post}
              handleLike={this.handleLike}
            />
          ))}
        </section>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <SearchBar />
//       <section className="App__Posts">
//         {data.map((post, index) => (
//           <PostContainer key={index} post={post} />
//         ))}
//       </section>
//     </div>
//   );
// }

App.propTypes = {
  post: PropTypes.object,
};

export default App;
