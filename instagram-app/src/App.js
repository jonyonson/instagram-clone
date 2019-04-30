import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import PropTypes from 'prop-types';

// import css
import './App.css';

// import comment data
import data from './data/dummy-data1';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <section className="App__Posts">
        {data.map((post, index) => (
          <PostContainer key={index} post={post} />
        ))}
      </section>
    </div>
  );
}

App.propTypes = {
  post: PropTypes.array,
};

export default App;
