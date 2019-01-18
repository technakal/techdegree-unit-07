import React from 'react';
import { PropTypes } from 'prop-types';

/**
 * The error component, for when something inevitably goes wrong.
 * @param {object} error - Contains error information.
 */
export const ErrorPage = ({ error }) => {
  const { code, message } = error;
  return (
    <div>
      <h2>{code}</h2>
      <h3>{message}</h3>
    </div>
  );
};

ErrorPage.propTypes = {
  error: PropTypes.shape({
    code: PropTypes.string,
    message: PropTypes.string,
  }),
};
