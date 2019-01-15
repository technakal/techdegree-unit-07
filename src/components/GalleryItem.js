import React from 'react';

export const GalleryItem = ({ url, img_url, title }) => {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={url} alt={title} />
      </a>
    </li>
  );
};
