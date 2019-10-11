import React from 'react';
import Helmet from 'react-helmet';

const Home = () => (
  <div>
    <Helmet
      title="Home"
      meta={[
        // twitter
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Home' },
        { name: 'twitter:description', content: 'description of Home' },
        { name: 'twitter:image', content: 'http://path/to/image' },
        // seo
        { name: 'google-site-verification', content: 'wN9NyQArWBo-TmqcpD5QP8wzvRSSJ1pAkS9eFUH-I3E' },
        // ogp
        { property: 'og:title', content: 'Home' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'http://path/to/this/url' },
        { property: 'og:image', content: 'http://path/to/image' },
        { property: 'og:description', content: 'description of Home' },
      ]}
    />
    <h2>Home</h2>
  </div>
)

export default Home;
