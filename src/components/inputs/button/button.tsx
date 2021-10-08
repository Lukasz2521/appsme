import * as React from "react";
import styled, { css } from "styled-components";

import RightArrow from '@assets/images/right-arrow.svg';

export const Button = (props: React.PropsWithChildren<ButtonProps>) => {
    const BaseButton = styled.button`
        display: flex;
        border-radius: 5px;
        padding: 20px 28px;
    
        &:hover {
            cursor: pointer;
        }
    `;

    const PrimaryButtonStyles = css`
        border: 1px solid #094AEB;
        background-color: #094AEB;
        color: #fff;
        transition: opacity 0.35s;

        &:hover {
            opacity: .95;
        }
    `;

    const OutlinedButtonStyles = css`
        border: 2px solid #E5E5E5;
        background-color: #fff;
        color: #49494E;
    `;

    const ButtonWithIcon = styled(BaseButton)`
        ${props.type === ButtonType.PRIMARY ? PrimaryButtonStyles : OutlinedButtonStyles}
        align-items: center;
        font-size: 15px;
        line-height: 19px;
    `;

    const ButtonText = styled.span`
        margin-right: 15px;
    `;

    const PrimaryRightArrow = css`
        path {
            stroke: #fff;
        }
    `;

    const OutlinedRightArrow = css`
        path {
            stroke: #49494E;
        }
    `;

    const RightArrowStyled = styled(RightArrow)`
        ${props.type === ButtonType.PRIMARY ? PrimaryRightArrow : OutlinedRightArrow };
    `;

    return (
        <ButtonWithIcon>
            <ButtonText>{props.children}</ButtonText>
            <RightArrowStyled />
        </ButtonWithIcon>
    );
}

enum ButtonType {
    PRIMARY = 'primary',
    OUTLINED = 'outlined'
}

interface ButtonProps {
    value: string;
    type: ButtonType;
}