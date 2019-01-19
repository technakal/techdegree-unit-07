import React from 'react';
import { PropTypes } from 'prop-types';
import startledImg from '../images/undraw_startled_8p0r.svg';
import bugFixImg from '../images/undraw_bug_fixing_oc7a.svg';

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
      {code.includes(404) ? (
        <img className="site-img" src={startledImg} alt="broken illustration" />
      ) : (
        <img className="site-img" src={bugFixImg} alt="error illustration" />
      )}
    </div>
  );
};

ErrorPage.propTypes = {
  error: PropTypes.shape({
    code: PropTypes.string,
    message: PropTypes.string,
  }),
};
