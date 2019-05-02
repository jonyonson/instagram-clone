import React from 'react';
import PropTypes from 'prop-types';

// import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostsPage/PostsPage';
import LoginPage from './components/Login/Login';
import withAuthenticate from './components/Authentication/withAuthenticate';

// import css
// import './App.css';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

App.propTypes = {
  handleLike: PropTypes.func,
};

export default App;
// export default withAuthenticate(PostsPage)(LoginPage);
