import React from 'react';

import { GalleryItem } from './GalleryItem';
import { NoResults } from './NoResults';

export const Gallery = ({ photos }) => {
  const showGallery = true;
  return (
    <div className="photo-container">
      <h2>Gallery</h2>
      <ul>
        {showGallery ? (
          <GalleryItem
            url={'https://via.placeholder.com/150'}
            title="Placeholder"
          />
        ) : (
          <NoResults />
        )}
      </ul>
    </div>
  );
};
