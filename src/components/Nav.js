import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = props => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/">Trending</NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/search">History</NavLink>
        </li>
      </ul>
    </nav>
  );
};
