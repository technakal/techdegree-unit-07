import React from 'react';
import emptyImg from '../images/undraw_empty_xct9.svg';

/**
 * DOM component for no results.
 */
export const NoResults = () => {
  return (
    <li className="not-found">
      <h2>No Results Found</h2>
      <h3>Try a different topic.</h3>
      <img className="site-img" src={emptyImg} alt="no-results illustration" />
    </li>
  );
};
