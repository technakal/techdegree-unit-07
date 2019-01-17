import React from 'react';

export const ErrorPage = ({ type, message }) => {
  return (
    <div>
      <h2>{type}</h2>
      <h3>{message}</h3>
    </div>
  );
};
