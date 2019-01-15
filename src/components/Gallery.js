import React from 'react';

import { GalleryItem } from './GalleryItem';
import { NoResults } from './NoResults';

export const Gallery = ({ data }) => {
  const topic = data.topic;
  const photos = data.photos;
  return (
    <div className="photo-container">
      <h2>{topic[0].toUpperCase() + topic.slice(1, topic.length)}</h2>
      <ul>
        {photos ? (
          photos.map(photo => (
            <GalleryItem key={photo.id} url={photo.url_m} title={photo.title} />
          ))
        ) : (
          <NoResults />
        )}
      </ul>
    </div>
  );
};
