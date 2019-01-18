import React from 'react';
import { HistoryItem } from './HistoryItem';
import { PropTypes } from 'prop-types';

/**
 * Component for providing an itemized list of previous searches from this session.
 * @param {array} history - An array of all topics searched for in this session.
 */
export const History = ({ history }) => {
  const historyList = history
    .sort()
    .map((item, index) => <HistoryItem key={index} topic={item} />);
  return (
    <div>
      <h1>Search History</h1>
      <ul className="history-list">{historyList}</ul>
    </div>
  );
};

History.propTypes = {
  history: PropTypes.array,
};
