import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

// import css
import './App.css';

// import comment data
import dummyData from './data/dummy-data1';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <section className="App__Posts">
        <PostContainer />
      </section>
    </div>
  );
}

export default App;
