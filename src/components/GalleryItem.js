import React from 'react';

export const GalleryItem = ({ url, img_url, title }) => {
  return (
    <li>
      <a href={url}>
        <img src={img_url} alt={title} />
      </a>
    </li>
  );
};
