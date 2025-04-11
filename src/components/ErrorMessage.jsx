import React from 'react';
import PropTypes from 'prop-types';

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message bg-red-100 text-red-700 p-4 rounded mb-4">
      <p>{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="btn btn-primary mt-2">
          Retry
        </button>
      )}
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func,
};

ErrorMessage.defaultProps = {
  onRetry: null,
};

export default ErrorMessage;
