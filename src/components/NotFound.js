import HttpStatus from './HttpStatus';
import React from 'react';
import Route from 'react-router-dom/Route';

function NotFound() {
  return (
    <HttpStatus statusCode={404}>
      <div>
        <h1>404. Not Found.</h1>
      </div>
    </HttpStatus>
  );
}

export default NotFound;
