import * as React from "react";
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
    label: string;
    name: string;
    type: string;
    multiline: boolean;
    className: string;
    rows?: number;
    cols?: number;
}

interface BaseTextFieldProps {
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
    rows: number;
    cols: number;
}

const InputField = (props: InputProps) => (
    <InputContainer className={props.className}>
        <Input  name={props.name}
                type={props.type}
                ref={props.fieldRef}
                onChange={props.onChangeHandler}
                onFocus={props.onFocusHandler}
                onBlur={props.onBlurHandler}
        />
        <Label  active={ props.isActive }
                onClick={props.onLabelClickHandler}>
            {props.label}
        </Label>
    </InputContainer>
);

const TextareaField = (props: TextareaProps) => {
    return (
        <InputContainer className={props.className}>
            <Textarea name={props.name} 
                      rows={props.rows}
                      cols={props.cols}
                      ref={props.fieldRef}
                      onChange={props.onChangeHandler}
                      onFocus={props.onFocusHandler}
                      onBlur={props.onBlurHandler}/>
            <Label active={ props.isActive }
                   onClick={props.onLabelClickHandler}>{props.label}</Label>
        </InputContainer>
    );
};

export const TextField = (props: TextFieldProps) => {
    const [value, setValue] = React.useState('');
    const [isActive, setActive] = React.useState(false);
    const fieldRef: React.MutableRefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

    const onFocusHandler = () => setActive(true);

    const onBlurHandler = (e: React.FormEvent<HTMLInputElement>) => {
        if(e.currentTarget.value.length === 0) {
            setActive(false);
        }
    };

    const onLabelClickHandler = () => {
        fieldRef.current.focus();

        if(value.length === 0) {
            setActive(true);
        }
    };

    if(props.multiline) {
        return <TextareaField name={props.name}
                              label={props.label}
                              isActive={isActive}
                              fieldRef={fieldRef}
                              onChangeHandler={onChangeHandler}
                              onFocusHandler={onFocusHandler}
                              onBlurHandler={onBlurHandler}
                              onLabelClickHandler={onLabelClickHandler}
                              className={props.className}
                              rows={props.rows}
                              cols={props.cols} />;
    }

    return <InputField  name={props.name}
                        label={props.label}
                        type={props.type}
                        isActive={isActive}
                        fieldRef={fieldRef}
                        onChangeHandler={onChangeHandler}
                        onFocusHandler={onFocusHandler}
                        onBlurHandler={onBlurHandler}
                        onLabelClickHandler={onLabelClickHandler} 
                        className={props.className} />;
}