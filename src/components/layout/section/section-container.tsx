import * as React from "react";
import styled from "styled-components";

const Container = styled.section`
    margin-top: 120px;
`;

export const SectionContainer = ({ children }) => <Container>{children}</Container>;
