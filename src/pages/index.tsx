import * as React from 'react';

import {
  Header,
  Banner,
  WhatWeDo,
  WhoWeAre,
  CompletedProjects,
  Contact,
  Footer
} from '@components/layout';

const IndexPage = () => (
  <div>
    <div className="container mx-auto">
      <Header />
      <Banner />
      <WhatWeDo />
      <WhoWeAre />
      <CompletedProjects />
      <Contact />
    </div>
    <Footer />
  </div>
);

export default IndexPage;
