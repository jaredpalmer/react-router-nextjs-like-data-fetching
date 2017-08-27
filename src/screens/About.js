import React from 'react';
import withSSR from '../components/withSSR';

class About extends React.Component {
  // This works similarly to Next.js's `getInitialProps`
  static getInitialData({ match, req, res }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          article: `
This text is ALSO server rendered if and only if it's the initial render.
          `,
          currentRoute: match.pathname,
        });
      }, 500);
    });
  }

  render() {
    const { isLoading, article, error } = this.props;
    return (
      <div>
        <h1>About</h1>
        {isLoading && <div>Loading...</div>}
        {error &&
          <div>
            {JSON.stringify(error, null, 2)}
          </div>}
        {article &&
          <div>
            {article}
            <div style={{ marginTop: '1rem', color: '#aaa' }}>
              {'>> '}Go to another route (Users)
            </div>
          </div>}
      </div>
    );
  }
}

export default withSSR(About);
