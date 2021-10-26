import * as React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #49494E;
`;

export const Paragraph = props => <StyledParagraph className={props.className}>{props.children}</StyledParagraph>;