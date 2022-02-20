import React, { useState , useRef, MutableRefObject, FormEvent } from "react";
import styled, { css } from "styled-components";

const InputContainer = styled.div`
    position: relative;
`;

const BaseStyle = css`
    font-size: 15px;
    display: block;
    background: transparent;
`;

const BaseStyleInput = css`
    ${BaseStyle}
    padding: 15px 25px;
    border: 1.5px solid #E0E3F3;
    border-radius: 5px;
    color: #B8C2D9;
    overflow: hidden;
    position: relative;
    width: 100%;
    outline: none;
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
    ${BaseStyleInput}
`;

const Textarea = styled.textarea`
    ${BaseStyleInput}
`;

interface TextFieldProps {
    value: string;
    onChangeHandler: Function,
    label: string;
    name: string;
    type: string;
    multiline: boolean;
    className: string;
    rows?: number;
    cols?: number;
}

interface BaseTextFieldProps {
    value: string
    label: string;
    name: string;
    isActive: boolean;
    fieldRef: React.MutableRefObject<HTMLInputElement>;
    onChangeHandler: Function,
    onFocusHandler: Function,
    onBlurHandler: Function,
    onLabelClickHandler: Function,
    className: string;
}

interface InputProps extends BaseTextFieldProps {
    type: string;
}

interface TextareaProps extends BaseTextFieldProps {
    rows?: number;
    cols?: number;
}

const InputField = (props: InputProps) => (
    <InputContainer className={props.className}>
        <Input  value={props.value}
                name={props.name}
                type={props.type}
                ref={props.fieldRef}
                onChange={props.onChangeHandler}
                onFocus={props.onFocusHandler}
                onBlur={props.onBlurHandler}
        />
        <Label  active={props.isActive}
                onClick={props.onLabelClickHandler}>
            {props.label}
        </Label>
    </InputContainer>
);

const TextareaField = (props: TextareaProps) => {
    return (
        <InputContainer className={props.className}>
            <Textarea value={props.value}
                      name={props.name} 
                      rows={props.rows}
                      cols={props.cols}
                      ref={props.fieldRef}
                      onChange={props.onChangeHandler}
                      onFocus={props.onFocusHandler}
                      onBlur={props.onBlurHandler}>
                {props.value}
            </Textarea>
            <Label active={ props.isActive }
                   onClick={props.onLabelClickHandler}>{props.label}</Label>
        </InputContainer>
    );
};

const TextField = (props: TextFieldProps) => {
    const [isActive, setActive] = useState<boolean>(false);
    const fieldRef: MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

    const onFocusHandler = () => setActive(true);

    const onBlurHandler = (e: React.FormEvent<HTMLInputElement>) => {
        if(e.currentTarget.value.length === 0) {
            setActive(false);
        }
    };

    const onLabelClickHandler = () => {
        fieldRef.current.focus();

        if(props.value.length === 0) {
            setActive(true);
        }
    };

    if(props.multiline) {
        return <TextareaField {...props}
                              isActive={isActive}
                              fieldRef={fieldRef}
                              onFocusHandler={onFocusHandler}
                              onBlurHandler={onBlurHandler}
                              onLabelClickHandler={onLabelClickHandler} />;
    }

    return <InputField  {...props}
                        isActive={isActive}
                        fieldRef={fieldRef}
                        onFocusHandler={onFocusHandler}
                        onBlurHandler={onBlurHandler}
                        onLabelClickHandler={onLabelClickHandler} />;
}

const useInput = (initialValue: string = '') => {
    const [value, setValue] = useState<string>(initialValue);

    return {
      value,
      resetState: () => setValue(initialValue),
      onChangeHandler: (event: FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
      }
    };
};

export { TextField, useInput };