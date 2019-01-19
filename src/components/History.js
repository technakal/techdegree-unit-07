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
    <div className="history-container">
      <h2>Search History</h2>
      <h3>Here are all the things you've searched for.</h3>
      <p>
        {history.length > 5
          ? "Looks like you've been busy."
          : 'Just getting started?'}
      </p>
      <ul className="history-list">{historyList}</ul>
    </div>
  );
};

History.propTypes = {
  history: PropTypes.array,
};
