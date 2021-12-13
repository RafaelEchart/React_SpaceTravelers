import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/planet.png';
import './header.css';

const Header = () => (
  <header className='header'>
    <Link to="/rockets" className='header_logo'><img src={logo} width={70} /> <h1>Space Traveler&apos;s Hub</h1></Link>
    <nav className='header_nav'>
      <div className='header_RocketMissions'>
      <NavLink to="/rockets">Rockets</NavLink>
      <NavLink to="/missions">Missions</NavLink>
      </div>
      <NavLink to="/myProfile">My Profile</NavLink>
    </nav>
  </header>
);

export default Header;
