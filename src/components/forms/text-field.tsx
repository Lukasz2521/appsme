import * as React from "react";
import styled, { css } from "styled-components";

interface TextFieldProps {
    label: string;
    name: string;
    type: string;
}

const InputContainer = styled.div`
    position: relative;
`;

const BaseStyle = css`
    font-size: 15px;
    display: block;
    background: transparent;
`;

const Label = styled.label`
    ${BaseStyle}
    background-color: #fff;
    color: #B8C2D9;
    font-weight: normal;
    top: 15px;
    left: 15px;
    padding: 0 10px;
    margin: 0;
    position: absolute;
    transition: all ease-in-out .25s;
    transform: ${props => (props.active ? 'translateY(-25px)' : 'none')};

    :hover {
        cursor: text;
    }
`;

const Input = styled.input`
    ${BaseStyle}
    padding: 15px 25px;
    border: 1.5px solid #E0E3F3;
    border-radius: 5px;
    color: #B8C2D9;
    overflow: hidden;
    position: relative;
    width: 100%;
    background-color: ${props => (props.selected ? 'red' : 'none')};
    outline: none;
`;

export const TextField = (props: TextFieldProps) => {
    const [value, setValue] = React.useState('');
    const [isActive, setActive] = React.useState(false);
    const fieldRef = React.useRef(null);

    return (
        <InputContainer>
            <Input {...props}
                   ref={fieldRef}
                   onChange={ 
                       (e: React.FormEvent<HTMLInputElement>) => {
                           const currentValue: string = e.currentTarget.value;
                           setValue(currentValue);
                       }
                   }
                   onFocus={
                       () => {
                           setActive(true);
                       }
                   }
                   onBlur={
                       (e: React.FormEvent<HTMLInputElement>) => {
                           if(e.currentTarget.value.length === 0) {
                               setActive(false);
                           }
                       }
                   }
            />
            <Label active={ isActive }
                   onClick={
                       () => {
                            fieldRef.current.focus();

                            if(value.length === 0) {
                                setActive(true);
                            }
                       }
                    }>
                {props.label}
            </Label>
        </InputContainer>
    );
}