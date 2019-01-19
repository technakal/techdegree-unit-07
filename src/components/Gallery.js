import React from 'react';
import { PropTypes } from 'prop-types';

import { GalleryItem } from './GalleryItem';
import { NoResults } from './NoResults';

/**
 * The gallery component, containing all images related to the current topic.
 * Renders NoResults component if nothing in data object.
 * @param {object} data - The data object containing information on the current gallery to display.
 */
export const Gallery = ({ data }) => {
  if (data !== undefined && data.photos.length > 0) {
    const { topic, photos } = data;
    return (
      <div className="photo-container">
        <h2>{topic}</h2>
        <ul>
          {photos.map(img => (
            <GalleryItem key={img.id} url={img.url_m} />
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          <NoResults />
        </ul>
      </div>
    );
  }
};

Gallery.propTypes = {
  data: PropTypes.shape({
    topic: PropTypes.string,
    photos: PropTypes.array,
  }),
};
