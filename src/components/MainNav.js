import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = props => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
    </div>
  );
};

export default MainNav;
