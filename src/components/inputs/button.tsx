import * as React from "react"
import RightArrow from '@assets/images/right-arrow.svg';

const Button = (props: React.PropsWithChildren<ButtonProps>) => {
    const primaryButton = {
        display: 'flex',
        alignItems: 'center',
        borderRadius: '5px',
        border: '1px solid #094AEB',
        padding: '26px 42px 26px 42px',
        backgroundColor: '#094AEB',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#fff'
    };

    const primaryButtonText = {
        marginRight: '15px'
    }

    return (
        <button style={primaryButton}>
            <span style={primaryButtonText}>{props.children}</span>
            <RightArrow />
        </button>
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