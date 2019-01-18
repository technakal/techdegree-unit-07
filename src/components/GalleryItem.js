import React from 'react';
import { PropTypes } from 'prop-types';

/**
 * A single photo component.
 * @param {string} url - The source url of the image.
 * @param {string} title - The title description of the image.
 */
export const GalleryItem = ({ url, title }) => {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={url} alt={title} />
      </a>
    </li>
  );
};

GalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
};
