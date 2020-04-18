import React from 'react';
import {Link} from 'gatsby';

const siteTitle = 'Hello peeps!';
const IndexPage = () => (
  <h1 style={{margin: 0}}>
    <Link
      to="/"
      style={{
        color: `Blue`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
  </h1>
);

export default IndexPage;
