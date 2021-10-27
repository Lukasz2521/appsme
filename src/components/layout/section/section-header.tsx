import * as React from "react";
import styled from "styled-components";

interface HeaderSectionProps {
    headerText: string;
    subheaderText: string;
    className?: string;
}

const HeaderContainer = styled.div`
    margin-bottom: 80px;
`;

const Header = styled.h2`
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.2em;
    color: #094AEB;
    text-transform: uppercase;
`;

const SubHeader = styled.h3`
    font-weight: bold;
    font-size: 40px;
    line-height: 60px;
    color: #2C2C2C;
`;

export const SectionHeader = (props: HeaderSectionProps) =>
    (
        <HeaderContainer className={props.className}>
            <Header>{ props.headerText }</Header>
            <SubHeader>{ props.subheaderText }</SubHeader>
        </HeaderContainer>
    );
