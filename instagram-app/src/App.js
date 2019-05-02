import React from 'react';
import PropTypes from 'prop-types';

// import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostsPage/PostsPage';
import LoginPage from './components/Login/LoginPage';
import withAuthenticate from './components/Authentication/withAuthenticate';

// import css
import './App.css';

const Component = withAuthenticate(PostsPage)(LoginPage);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Component />
      </div>
    );
  }
}

App.propTypes = {
  handleLike: PropTypes.func,
};

// export default withAuthenticate(PostsPage)(LoginPage);
export default App;
