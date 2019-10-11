import React from 'react';
import Helmet from 'react-helmet';

const About = () => (
  <div>
    <Helmet
      title="About"
      meta={[
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'About' },
        { name: 'twitter:description', content: 'description of About' },
        { name: 'twitter:image', content: 'http://path/to/image' },
        { property: 'og:title', content: 'About' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'http://path/to/this/url' },
        { property: 'og:image', content: 'http://path/to/image' },
        { property: 'og:description', content: 'description of About' },
      ]}
    >
        <meta name="google-site-verification" content="wN9NyQArWBo-TmqcpD5QP8wzvRSSJ1pAkS9eFUH-I3E" />
    </Helmet>
  </div>
);

export default About;
