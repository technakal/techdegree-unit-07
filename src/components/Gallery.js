import React from 'react';

import { GalleryItem } from './GalleryItem';
import { NoResults } from './NoResults';

export const Gallery = ({ data }) => {
  if (data !== undefined) {
    const { topic, photos } = data;
    return (
      <div className="photo-container">
        <h2>{topic[0].toUpperCase() + topic.slice(1, topic.length)}</h2>
        <ul>
          {photos.map(img => (
            <GalleryItem key={img.id} url={img.url_m} />
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="photo-container">
        <ul>
          <NoResults />
        </ul>
      </div>
    );
  }
};
