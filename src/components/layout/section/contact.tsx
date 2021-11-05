import * as React from "react";
import styled from "styled-components";

import { SectionHeader, SectionContainer } from "@components/layout";
import { Paragraph, Button } from "@components/inputs";
import { TextField } from "@components/forms";

const Fieldset = styled.fieldset`
    width: calc(50% - 25px);
`;

export const Contact = () => (
    <SectionContainer>
        <div className="grid grid-rows-1 grid-cols-2">
            <div className="mr-12">
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
                <form>
                    <div className="flex justify-between mb-8">
                        <Fieldset>
                            <TextField type="text" label="Imię" />
                        </Fieldset>
                        <Fieldset>
                            <TextField type="text" label="Nazwisko" />
                        </Fieldset>
                    </div>
                    <div className="flex justify-between mb-8">
                        <Fieldset>
                            <TextField type="text" label="E-mail" />
                        </Fieldset>
                        <Fieldset>
                            <TextField type="text" label="Numer telefonu" />
                        </Fieldset>
                    </div>
                    <TextField multiline type="text" label="Treść" rows={5} cols={40} className="mb-8" />
                    <Button type="primary">Wyślij wiadomość</Button>
                </form>
            </div>
        </div>
    </SectionContainer>
);