import * as React from 'react';
import styled from "styled-components";

import { SectionHeader } from './section-header';
import { Paragraph, Chip } from '../../inputs';

const WhatWeDoContainer = styled.section`
    margin-top: 120px;
`;

const StyledSectionHeader = styled(SectionHeader)`
    margin-bottom: 80px;
`;

const DescriptionHeader = styled.h4`
    font-weight: bold;
    font-size: 23px;
    line-height: 35px;
    color: #2C2C2C;
    margin-bottom: 40px;
`;

const ChipContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: self-start;

    & span {
        margin-bottom: 30px;
    }
`;

export const WhatWeDo = () => (
    <WhatWeDoContainer>
        <StyledSectionHeader headerText="co robimy" subheaderText="To, co potrafimy robić najlepiej"></StyledSectionHeader>
        <div className="grid grid-rows-1 grid-cols-3">
            <div className="col-span-2 auto-rows-auto">
                <DescriptionHeader>Co charakteryzuje naszą pracę?</DescriptionHeader>
                <Paragraph className="mr-32">
                    Działamy w metodyce agile, współpracujemy blisko z klientem, używamy najnowszych technologii, a poszczególne technologie dobieramy do problemu,
                    który będziemy rozwiązywać. Używamy najlepszych praktyk
                    programistycznych, a nasz kod jest przetestowany jednostkowo, e2e oraz
                    integracyjnie. Dbamy o procesy CI i CD, a nasz kod serwujemy w chmurze
                    lub na dedykowanych serwerach aplikacyjnych w zależności od budżetu lub
                    potrzeb klienta.
                </Paragraph>
            </div>
            <div>
                <DescriptionHeader>Czym się zajmujemy?</DescriptionHeader>
                <ChipContainer>
                    <Chip>Kompletne aplikacje internetowe</Chip>
                    <Chip>Tworzymy API dla zewnętrznych firm</Chip>
                    <Chip>Integrujemy się z zewnętrznymi API</Chip>
                    <Chip>Aplikacje typu PWA</Chip>
                </ChipContainer>
            </div>
        </div>
    </WhatWeDoContainer>
);