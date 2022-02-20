import React, { PropsWithChildren } from "react";
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

const RightArrowLongStyled = styled(RightArrowLong)`
    display: inline-flex;
    align-items: center;
    margin-left: 15px;
`;

const PrimaryButtonWithIcon = styled(BaseButton)`
    ${PrimaryButtonStyles}
    align-items: center;
    font-size: 15px;
    line-height: 19px;
`;

const OutlinedButtonWithIcon = styled(BaseButton)`
    ${OutlinedButtonStyles}
    align-items: center;
    font-size: 15px;
    line-height: 19px;
`;

const OutlinedRightArrow = styled(RightArrow)`
    path {
        stroke: #49494E;
    }
`;

const PrimaryRightArrow = styled(RightArrow)`
    path {
        stroke: #fff;
    }
`;

export const Button = (props: PropsWithChildren<ButtonProps>) => {
    if(props.type === ButtonType.LINK) {
        return (
            <ButtonLink className={props.className}>
                {props.children}
                <RightArrowLongStyled className={props.className} />
            </ButtonLink>
        );
    } else if(props.type === ButtonType.PRIMARY) {
        return (
            <PrimaryButtonWithIcon className={props.className}>
                <ButtonText>{props.children}</ButtonText>
                <PrimaryRightArrow />
            </PrimaryButtonWithIcon>
        );
    } else if(props.type === ButtonType.OUTLINED) {
        return (
            <OutlinedButtonWithIcon className={props.className}>
                <ButtonText>{props.children}</ButtonText>
                <OutlinedRightArrow />
            </OutlinedButtonWithIcon>
        );
    }
}