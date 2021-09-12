import * as React from "react";
import styled from "styled-components";

import RightArrow from '@assets/images/right-arrow.svg';

const Button = (props: React.PropsWithChildren<ButtonProps>) => {
    const ButtonWithIcon = styled.button`
        display: flex;
        align-items: center;
        border-radius: 5px;
        border: 1px solid #094AEB;
        padding: 26px 42px 26px 42px;
        background-color: #094AEB;
        font-size: 16px;
        line-height: 19px;
        color: #fff;
        transition: opacity 0.35s;

        &:hover {
            opacity: .95;
            cursor: pointer;
        }
    `

    const ButtonText = styled.span`
        margin-right: 15px;
    `

    return (
        <ButtonWithIcon>
            <ButtonText>{props.children}</ButtonText>
            <RightArrow />
        </ButtonWithIcon>
    );
}

export enum ButtonType {
    PRIMARY,
}

export interface ButtonProps {
    value: string;
    type: ButtonType;
}

export default Button;