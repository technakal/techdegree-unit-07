import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Main navigation component.
 */
export const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink activeClassName="nav-active" exact to="/topics/shinrin-yoku">
            Shinrin Yoku
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav-active" to="/topics/cats">
            Cats
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav-active" to="/topics/guinea-pigs">
            Guinea Pigs
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav-active" to="/history">
            History
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
