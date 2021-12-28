import * as React from 'react';

import { ResolutionType, useWindowResolutionType } from '@hooks';

import {
  Theme,
  Banner,
  WhatWeDo,
  WhoWeAre,
  CompletedProjects,
  Contact,
} from '@components/layout';

const IndexPage = () => {
  const resolutionType: ResolutionType = useWindowResolutionType();

  return (
    <Theme>
        <Banner resolutionType={resolutionType} />
        <WhatWeDo />
        <WhoWeAre />
        <CompletedProjects />
        <Contact />
    </Theme>
  );
};

export default IndexPage;
