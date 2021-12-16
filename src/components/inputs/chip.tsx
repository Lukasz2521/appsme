import * as React from "react";
import styled from "styled-components";

const StyledChip = styled.span`
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #fff;
    background: #3064E4;
    border-radius: 20px;
    padding: 6px 12px;
`;

export const Chip = props => <StyledChip className={props.className}>{props.children}</StyledChip>;