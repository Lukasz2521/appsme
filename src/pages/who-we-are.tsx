import React from 'react';

import { Theme, Banner } from '@components/layout';
import { ResolutionType, useWindowResolutionType } from '@hooks';

const WhoWeArePage = () => {
    const resolutionType: ResolutionType = useWindowResolutionType();

    return (
        <Theme>
            <Banner resolutionType={resolutionType} />
        </Theme>
    );
}

export default WhoWeArePage;