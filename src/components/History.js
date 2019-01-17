import React from 'react';
import { HistoryItem } from './HistoryItem';

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
