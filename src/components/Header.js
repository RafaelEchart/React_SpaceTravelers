import React from 'react';
import logo from '../assets/planet.png'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  <header>
    <Link to="/rockets"><img src={logo} /></Link>
    <nav>
      <NavLink to="/rockets">rockets</NavLink>
      <NavLink to="/missions">missions</NavLink>
      <NavLink to="/myProfile">my profile</NavLink>
    </nav>
  </header>
};

export default Header;
