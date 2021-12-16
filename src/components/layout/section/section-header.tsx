import * as React from "react";
import styled from "styled-components";

interface HeaderSectionProps {
    headerText: string;
    subheaderText: string;
    className?: string;
}

const Header = styled.h2`
    font-weight: bold; 
    letter-spacing: 0.2em;
    color: #094AEB;
    text-transform: uppercase;
`;

const SubHeader = styled.h3`
    font-weight: bold;
    color: #2C2C2C;
`;

export const SectionHeader = (props: HeaderSectionProps) => (
    <div className={`mb-20 ${props.className}`}>
        <Header className="md:text-lg text-sm md:leading-8 leading-6">
            { props.headerText }
        </Header>
        <SubHeader className="md:text-4xl text-xl md:leading-10 leading-6">
            { props.subheaderText }
        </SubHeader>
    </div>
);
