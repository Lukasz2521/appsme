import * as React from 'react';

import { Header, Banner, WhatWeDo, WhoWeAre, CompletedProjects } from '@components/layout';

const IndexPage = () => (
  <div className="container">
    <Header />
    <Banner />
    <WhatWeDo />
    <WhoWeAre />
    <CompletedProjects />
  </div>
);

export default IndexPage;
