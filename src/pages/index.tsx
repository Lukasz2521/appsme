import * as React from 'react';

import { Header, Banner, WhatWeDo, WhoWeAre } from '@components/layout';

const IndexPage = () => (
  <div className="container">
    <Header />
    <Banner />
    <WhatWeDo />
    <WhoWeAre />
  </div>
);

export default IndexPage;
