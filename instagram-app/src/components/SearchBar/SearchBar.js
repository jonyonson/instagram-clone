import React from 'react';
import './SearchBar.css';

import logo from '../../images/logo.png';
import activity from '../../images/activity.png';
import explore from '../../images/explore.png';
import profile from '../../images/profile.png';

const SearchBar = () => {
  return (
    <div className="SearchBar__wrapper">
      <div className="SearchBar">
        <img className="SearchBar__logo" src={logo} alt="" />
        <input
          className="SearchBar__input"
          type="text"
          autoCapitalize="none"
          placeholder="Search"
        />
        <div className="SearchBar__buttons">
          <img src={activity} alt="" />
          <img src={explore} alt="" />
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
