import * as React from "react";
import styled from "styled-components";

import { SectionHeader, SectionContainer } from "@components/layout";
import { Paragraph, Button } from "@components/inputs";
import { TextField, useInput } from "@components/forms";
import { SocialLinks } from "./social-links";

const Fieldset = styled.fieldset`
    width: calc(50% - 25px);

    @media(max-width: 768px) {
        width: auto;
    }
`;

export const Contact = () => {
    const { value: nameValue, onChangeHandler: onChangeNameHandler, resetState: resetNameState } = useInput();
    const { value: surname, onChangeHandler: onChangeSurnameHandler, resetState: resetSurnameState } = useInput();
    const { value: email, onChangeHandler: onChangeEmailHandler, resetState: resetEmailState } = useInput();
    const { value: phone, onChangeHandler: onChangePhoneHandler, resetState: resetPhoneState } = useInput();
    const { value: body, onChangeHandler: onChangeBodyHandler, resetState: resetBodyState } = useInput();

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
            <div className="grid md:grid-rows-1 md:grid-cols-2">
                <div className="mr-16">
                    <SectionHeader headerText="kontakt"
                                   subheaderText="Napisz do nas, porozmawiajmy o projekcie">
                    </SectionHeader>
                    <Paragraph>
                        Lorem Ipsum jest tekstem stosowanym jako przykładowy
                        wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez
                        nieznanego drukarza do wypełnienia tekstem próbnej książki.
                    </Paragraph>
                    <SocialLinks className="mt-6 mb-6 md:mt-16" />
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="md:flex md:justify-between mb-8">
                            <Fieldset className="mb-8">
                                <TextField type="text" 
                                           label="Imię"
                                           value={nameValue}
                                           onChangeHandler={onChangeNameHandler} />
                            </Fieldset>
                            <Fieldset className="mb-8">
                                <TextField type="text"
                                           label="Nazwisko"
                                           value={surname} 
                                           onChangeHandler={onChangeSurnameHandler} />
                            </Fieldset>
                        </div>
                        <div className="md:flex md:justify-between mb-8">
                            <Fieldset className="mb-8">
                                <TextField type="text"
                                           label="E-mail"
                                           value={email}
                                           onChangeHandler={onChangeEmailHandler} />
                            </Fieldset>
                            <Fieldset className="mb-8">
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