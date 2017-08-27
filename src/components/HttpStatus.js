import React from 'react';
import Route from 'react-router-dom/Route';
function HttpStatus(props) {
  return (
    <Route
      render={({ staticContext }) => {
        // we have to check if staticContext exists
        // because it will be undefined if rendered through a BrowserRouter
        if (staticContext) {
          staticContext.statusCode = props.statusCode;
          staticContext.url = props.url;
        }
        // @todo in Fiber, remove <div>
        return (
          <div>
            {props.children}
          </div>
        );
      }}
    />
  );
}

export default HttpStatus;
