import * as React from 'react';

import { Header, Banner, WhatWeDo, WhoWeAre, CompletedProjects, Contact } from '@components/layout';

const IndexPage = () => (
  <div className="container mx-auto">
    <Header />
    <Banner />
    <WhatWeDo />
    <WhoWeAre />
    <CompletedProjects />
    <Contact />
  </div>
);

export default IndexPage;
