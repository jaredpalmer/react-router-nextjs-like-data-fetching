import './App.css';

import NavLink from 'react-router-dom/NavLink';
import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

const App = ({ routes, initialData }) => {
  return routes
    ? <div className="App">
        <nav>
          {routes.map((route, index) =>
            <NavLink
              style={{ marginRight: '1rem', color: '#0af' }}
              activeStyle={{ fontWeight: 800, color: '#000' }}
              key={`nav-${index}`}
              exact={index === 0}
              to={route.path}
            >
              {route.name}
            </NavLink>
          )}
        </nav>
        <Switch>
          {routes.map((route, index) => {
            // pass in the initialData from the server or window.DATA for this
            // specific route
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={props =>
                  React.createElement(route.component, {
                    ...props,
                    initialData: initialData[index] || null,
                  })}
              />
            );
          })}
        </Switch>
      </div>
    : null;
};

export default App;
