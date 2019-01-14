import React from 'react';

import { GalleryItem } from './GalleryItem';
import { NoResults } from './NoResults';

export const Gallery = ({ photos }) => {
  return (
    <div className="photo-container">
      <h2>Gallery</h2>
      <ul>
        {photos.length > 0 ? (
          <GalleryItem
            url={photos[0].photos[0].url_m}
            img_url={photos[0].photos[0].url_m}
            title={photos[0].photos[0].title}
          />
        ) : (
          <NoResults />
        )}
      </ul>
    </div>
  );
};
