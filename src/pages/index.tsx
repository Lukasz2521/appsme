import * as React from 'react';

import {
  Theme,
  Banner,
  WhatWeDo,
  WhoWeAre,
  CompletedProjects,
  Contact,
} from '@components/layout';

const IndexPage = () => (
  <Theme>
      <Banner />
      <WhatWeDo />
      <WhoWeAre />
      <CompletedProjects />
      <Contact />
  </Theme>
);

export default IndexPage;
