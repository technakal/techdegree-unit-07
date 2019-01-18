import React from 'react';
import { PropTypes } from 'prop-types';

import SearchForm from './SearchForm';
import { Nav } from './Nav';

/**
 * The Header component.
 * Contains the SearchForm and Nav components.
 * Passes the search function to the SearchForm.
 * @param {function} getPhotos - The method for calling the API.
 */
export const Header = ({ getPhotos }) => {
  return (
    <header>
      <h1>Gallery App</h1>
      <SearchForm getPhotos={getPhotos} />
      <Nav />
    </header>
  );
};

Header.propTypes = {
  getPhotos: PropTypes.func.isRequired,
};
