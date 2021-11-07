import * as React from "react";
import styled from "styled-components";

import { SectionHeader, SectionContainer } from "@components/layout";
import { Paragraph, Button } from "@components/inputs";
import { TextField, useInput } from "@components/forms";

const Fieldset = styled.fieldset`
    width: calc(50% - 25px);
`;


export const Contact = () => {
    const { value: nameValue, onChangeHandler: onChangeNameHandler, resetState: resetNameState } = useInput();
    const { value: surname, onChangeHandler: onChangeSurnameHandler, resetState: resetSurnameState } = useInput();
    const { value: email, onChangeHandler: onChangeEmailHandler, resetState: resetEmailState } = useInput();
    const { value: phone, onChangeHandler: onChangePhoneHandler, resetState: resetPhoneState } = useInput();
    const { value: body, onChangeHandler: onChangeBodyHandler, resetState: resetBodyState }  = useInput();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        resetNameState();
        resetSurnameState();
        resetEmailState();
        resetPhoneState();
        resetBodyState();
    };

    return (
        <SectionContainer>
            <div className="grid grid-rows-1 grid-cols-2">
                <div className="mr-16">
                    <SectionHeader headerText="kontakt"
                                   subheaderText="Napisz do nas, porozmawiajmy o projekcie">
                    </SectionHeader>
                    <Paragraph>
                        Lorem Ipsum jest tekstem stosowanym jako przykładowy
                        wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez
                        nieznanego drukarza do wypełnienia tekstem próbnej książki.
                    </Paragraph>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-between mb-8">
                            <Fieldset>
                                <TextField type="text" 
                                           label="Imię"
                                           value={nameValue}
                                           onChangeHandler={onChangeNameHandler} />
                            </Fieldset>
                            <Fieldset>
                                <TextField type="text"
                                           label="Nazwisko"
                                           value={surname} 
                                           onChangeHandler={onChangeSurnameHandler} />
                            </Fieldset>
                        </div>
                        <div className="flex justify-between mb-8">
                            <Fieldset>
                                <TextField type="text"
                                           label="E-mail"
                                           value={email}
                                           onChangeHandler={onChangeEmailHandler} />
                            </Fieldset>
                            <Fieldset>
                                <TextField type="text"
                                           label="Numer telefonu"
                                           value={phone}
                                           onChangeHandler={onChangePhoneHandler} />
                            </Fieldset>
                        </div>
                        <TextField multiline
                                   type="text"
                                   label="Treść"
                                   rows={5}
                                   cols={40}
                                   className="mb-8"    
                                   value={body}
                                   onChangeHandler={onChangeBodyHandler} />
                        <Button type="primary">Wyślij wiadomość</Button>
                    </form>
                </div>
            </div>
        </SectionContainer>
    );
};