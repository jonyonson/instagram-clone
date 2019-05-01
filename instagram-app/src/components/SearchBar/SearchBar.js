import React from 'react';
import './SearchBar.css';

import logo from '../../images/logo.png';
import activity from '../../images/activity.png';
import explore from '../../images/explore.png';
import profile from '../../images/profile.png';

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
    // this.props.search(this.state.value);
    // this.props.search(this.state.value);
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.search(this.state.value);
    // this.setState()
  };

  render() {
    return (
      <div className="SearchBar__wrapper">
        <div className="SearchBar">
          <img className="SearchBar__logo" src={logo} alt="" />
          <form onSubmit={this.onSubmit}>
            <input
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
          <div className="SearchBar__buttons">
            <img src={explore} alt="" />
            <img src={activity} alt="" />
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
