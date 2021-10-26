import * as React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";

import RightArrow from '@assets/images/right-arrow.svg';
import RightArrowLong from '@assets/images/right-arrow-long.svg';

enum ButtonType {
    PRIMARY = 'primary',
    OUTLINED = 'outlined',
    LINK = 'link'
}

interface ButtonProps {
    value: string;
    type: ButtonType;
    className: string;
}

const ButtonLink = styled(Link)`
    font-weight: bold;
    font-size: 15px;
    line-height: 19px;
    color: #094AEB;

    &:hover {
        cursor: pointer;
    }
`;

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

const RightArrowLongStyled = styled(RightArrowLong)`
    display: inline-flex;
    align-items: center;
    margin-left: 15px;
`;

export const Button = (props: React.PropsWithChildren<ButtonProps>) => {
    const ButtonWithIcon = styled(BaseButton)`
        ${props.type === ButtonType.PRIMARY ? PrimaryButtonStyles : OutlinedButtonStyles}
        align-items: center;
        font-size: 15px;
        line-height: 19px;
    `;

    const RightArrowStyled = styled(RightArrow)`
        ${props.type === ButtonType.PRIMARY ? PrimaryRightArrow : OutlinedRightArrow };
    `;

    if(props.type === ButtonType.LINK) {
        return (
            <ButtonLink>
                {props.children}
                <RightArrowLongStyled />
            </ButtonLink>
        );
    } else {
        return (
            <ButtonWithIcon className={props.className}>
                <ButtonText>{props.children}</ButtonText>
                <RightArrowStyled />
            </ButtonWithIcon>
        );
    }
}