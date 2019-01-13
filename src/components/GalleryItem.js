import React from 'react';

export const GalleryItem = ({ url, title }) => {
  return (
    <li>
      <img src={url} alt={title} />
    </li>
  );
};
