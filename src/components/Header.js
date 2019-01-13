import React from 'react';

import { SearchForm } from './SearchForm';
import { Nav } from './Nav';

export const Header = ({ retrievePhotos }) => {
  return (
    <header>
      <h1>Gallery App</h1>
      <SearchForm retrievePhotos={retrievePhotos} />
      <Nav />
    </header>
  );
};
