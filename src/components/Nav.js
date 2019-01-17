import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = props => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink exact to="/topics/shinrin-yoku">
            Shinrin Yoku
          </NavLink>
        </li>
        <li>
          <NavLink to="/topics/cats">Cats</NavLink>
        </li>
        <li>
          <NavLink to="/topics/guinea-pigs">Guinea Pigs</NavLink>
        </li>
        <li>
          <NavLink to="/history">History</NavLink>
        </li>
      </ul>
    </nav>
  );
};
