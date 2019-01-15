import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = props => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink exact to="/">
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/history">History</NavLink>
        </li>
      </ul>
    </nav>
  );
};
