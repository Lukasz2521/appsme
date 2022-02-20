import React from 'react';

import {
  Theme,
  Banner,
  WhatWeDo,
  WhoWeAre,
  CompletedProjects,
  Contact,
} from '@components/layout';
import { ResolutionType, useWindowResolutionType } from '@hooks';

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
