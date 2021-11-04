import * as React from 'react';

import { Header, Banner, WhatWeDo, WhoWeAre, CompletedProjects, Contact } from '@components/layout';

const IndexPage = () => (
  <div className="container">
    <Header />
    <Banner />
    <WhatWeDo />
    <WhoWeAre />
    <CompletedProjects />
    <Contact />
  </div>
);

export default IndexPage;
