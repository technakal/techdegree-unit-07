import React from 'react';
import { Link } from 'react-router-dom';

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
