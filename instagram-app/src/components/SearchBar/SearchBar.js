import React from 'react';
import styled from 'styled-components';

import logo from '../../images/logo.png';
import activity from '../../images/activity.png';
import explore from '../../images/explore.png';
import profile from '../../images/profile.png';

const Wrapper = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  -webkit-transition: height 0.2s ease-in-out;
  transition: height 0.2s ease-in-out;
  height: 77px;
`;

const Searchbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 77px;
  max-width: 1010px;
  padding: 26px 20px;
  margin: 0 auto;
`;
const Logo = styled.img`
  height: 32px;
  width: auto;
`;

const SearchInput = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  outline: 0;
  padding: 3px 10px 3px 26px;
  z-index: 2;
  height: 28px;
`;

const Icon = styled.img`
  height: 24px;
  padding-left: 24px;
`;

class SearchBar extends React.Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => this.props.search(this.state.value)
    );
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.search(this.state.value);
  };

  render() {
    return (
      <Wrapper>
        <Searchbar>
          <Logo src={logo} alt="" />
          <form onSubmit={this.onSubmit}>
            <SearchInput
              className="SearchBar__input"
              name="value"
              type="text"
              autoCapitalize="none"
              autoComplete="off"
              placeholder="Search"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
          <div>
            <Icon src={explore} alt="" />
            <Icon src={activity} alt="" />
            <Icon src={profile} alt="" />
          </div>
        </Searchbar>
      </Wrapper>
    );
  }
}

export default SearchBar;
