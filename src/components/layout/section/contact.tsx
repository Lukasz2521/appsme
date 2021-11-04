import * as React from "react";
import styled from "styled-components";

import { SectionHeader, SectionContainer } from "@components/layout";
import { Paragraph } from "@components/inputs";
import { TextField } from "@components/forms";

export const Contact = () => (
    <SectionContainer>
        <SectionHeader headerText="kontakt"
                       subheaderText="Napisz do nas, porozmawiajmy o projekcie">
        </SectionHeader>
        <div className="grid grid-rows-1 grid-cols-8">
            <div className="col-span-3 auto-rows-auto">
                <Paragraph>
                    Lorem Ipsum jest tekstem stosowanym jako przykładowy
                    wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez
                    nieznanego drukarza do wypełnienia tekstem próbnej książki.
                </Paragraph>
            </div>
            <div className="col-span-5">
                <form>
                    <TextField type="text" label="Imię" />
                </form>
            </div>
        </div>
    </SectionContainer>
);