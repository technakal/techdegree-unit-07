import React from 'react';

import { GalleryItem } from './GalleryItem';
import { ErrorPage } from './ErrorPage';
import { NoResults } from './NoResults';

export const Gallery = ({ data, hasError }) => {
  if(hasError) {
    return (
      <ErrorPage type="Problem with Request" message="Something went wrong with the request to the server." />
    )
  }
  if (data !== undefined && data.photos.length > 0) {
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
