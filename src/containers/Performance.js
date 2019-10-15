import React from 'react';
import Helmet from 'react-helmet';

const count = 20000;
const Counter = () => {
  const element = [];
  for (let i = 0; i < count; i++) {
    element.push(<div>{`Count i: ${i}`}</div>)
  }

  return element;
};


const Performance = () => (
  <div>
    <Helmet
      title="Performance"
      meta={[
        // twitter
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Performance' },
        { name: 'twitter:description', content: 'description of Performance' },
        { name: 'twitter:image', content: 'http://path/to/image' },
        // seo
        { name: 'google-site-verification', content: 'wN9NyQArWBo-TmqcpD5QP8wzvRSSJ1pAkS9eFUH-I3E' },
        // ogp
        { property: 'og:title', content: 'Performance' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'http://path/to/this/url' },
        { property: 'og:image', content: 'http://path/to/image' },
        { property: 'og:description', content: 'description of Performance' },
      ]}
    />
      <h2>Performance</h2>
      <Counter />
  </div>
);

export default Performance;
