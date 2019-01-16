import React from 'react';

import SearchForm from './SearchForm';
import { Nav } from './Nav';

export const Header = ({ getPhotos }) => {
  return (
    <header>
      <h1>Gallery App</h1>
      <SearchForm getPhotos={getPhotos} />
      <Nav />
    </header>
  );
};
