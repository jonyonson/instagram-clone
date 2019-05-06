import React from 'react';
import logo from '../../images/login-logo.png';
import styled from 'styled-components';

const LoginPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 350px;
  border: 1px solid rgb(230, 230, 230);
  background: #fff;
  padding: 20px 20px 70px;
`;

const Logo = styled.img`
  padding: 20px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TextInput = styled.input`
  height: 30px;
  border: 0;
  outline: 0;
  background: #fafafa;
  border: 1px solid #efefef;
  margin: 0 40px 6px;
`;

const SubmitButton = styled.input`
  background-color: #3897f0;
  border: 1px solid #3897f0;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  display: block;
  cursor: pointer;
  padding: 5px 9px;
  margin: 0 40px 6px;
  width: auto;
`;

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(this.state.username));
    window.location.reload();
  };

  render() {
    return (
      <LoginPage>
        <LoginContainer>
          <Logo src={logo} alt="" />
          <LoginForm onSubmit={this.onSubmit}>
            <TextInput
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <TextInput
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <SubmitButton type="submit" value="Log In" />
          </LoginForm>
        </LoginContainer>
      </LoginPage>
    );
  }
}

export default Login;
