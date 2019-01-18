import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

/**
 * A link component for a single search topic in the user history.
 * @param {string} topic - The topic description.
 */
export const HistoryItem = ({ topic }) => {
  const topicArray = topic.toLowerCase().split(' ');
  const titleCase = topicArray.map(
    word => word[0].toUpperCase() + word.slice(1, word.length)
  );
  return (
    <li>
      <Link to={`/topics/${topic.replace(/\s/, '-')}`}>
        {titleCase.join(' ')}
      </Link>
    </li>
  );
};

HistoryItem.propTypes = {
  topic: PropTypes.string.isRequired,
};
