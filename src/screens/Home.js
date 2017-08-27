import React from 'react';
import withSSR from '../components/withSSR';

class Home extends React.Component {
  // This works similarly to Next.js's `getInitialProps`
  static getInitialData({ match, req, res }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          text: `
This text is server rendered if and only if it's the initial render.

Go to another route.
          `,
          currentRoute: match.pathname,
        });
      }, 500);
    });
  }

  render() {
    const { isLoading, text, error } = this.props;
    return (
      <div>
        <h1>Home</h1>
        {isLoading && <div>Loading... </div>}
        {error &&
          <div style={{ color: 'red' }}>
            {JSON.stringify(error, null, 2)}
          </div>}
        {text &&
          <div>
            {text}
          </div>}
      </div>
    );
  }
}

export default withSSR(Home);
