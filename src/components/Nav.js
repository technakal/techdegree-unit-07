import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = ({ match }) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/gallery/cats">Cats</NavLink>
        </li>
        <li>
          <NavLink to="/gallery/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/gallery/guinea-pigs">Guinea Pigs</NavLink>
        </li>
      </ul>
    </nav>
  );
};
