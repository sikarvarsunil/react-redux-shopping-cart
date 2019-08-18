import React from 'react';
import {useSelector} from 'react-redux';

const Header = ({logo}) => {

  return <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
  </div>
}

export default Header;