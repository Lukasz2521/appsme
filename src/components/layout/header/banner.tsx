import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import { Button } from "@components/inputs";

const Headline = styled.h2`
    font-style: normal;
    font-weight: 800;
    font-size: 42px;
    line-height: 52px;
    color: #2C2C2C;
    margin-bottom: 35px;
`;

const HighlightedPhrase = styled.span`
    color: #094AEB;
`;

const Paragraph = styled.p`
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #49494E;
`;

const ButtonContainer = styled.div`
    display: flex;
    margin-top: 40px;
`;

export const Banner = () => (
    <section className="grid grid-rows-1 grid-cols-3">
        <div className="mt-32 mr-12 col-span-2 auto-rows-auto">
            <Headline>
                Dostarczamy <HighlightedPhrase>dedykowane</HighlightedPhrase><br />
                <HighlightedPhrase> oprogramowanie </HighlightedPhrase>
                dla Twojej firmy
            </Headline>
            <Paragraph>
                Specjalizujemy się głównie w
                aplikacjach i systemach internetowych. Tworzymy oprogramowanie dla firm, supportujemy
                oraz wspomagamy start-up’y w wytwarzaniu oprogramowania.
            </Paragraph>
            <ButtonContainer>
                <Button type="primary" className="mr-5">Dowiedz się więcej</Button>
                <Button type="outlined">Porozmawiajmy o projekcie</Button>
            </ButtonContainer>
        </div>
        <div>
            <StaticImage src="../../../assets/images/phones.png"
                         alt="phones"
                         width={400}
                         height={480} />
        </div>
    </section>
);