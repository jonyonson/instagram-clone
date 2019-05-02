import React from 'react';

const withAuthenticate = PostsPage => LoginPage =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
      };
    }

    componentDidMount() {
      if (!localStorage.getItem('user')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      if (this.state.loggedIn) {
        return <PostsPage />;
        // return <h1>Posts</h1>;
      } else {
        return <LoginPage />;
        // return <h1>Login</h1>;
      }
    }
  };

export default withAuthenticate;

// const withAuthenticate = LoginPage => LoginPage => {
//   return <h1>Hello</h1>;
// };

// export default withAuthenticate;
