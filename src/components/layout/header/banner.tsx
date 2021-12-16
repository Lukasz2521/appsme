import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import { Button, Paragraph } from "@components/inputs";

const Headline = styled.h2`
    color: #2C2C2C;
`;

const HighlightedPhrase = styled.span`
    color: #094AEB;
`;

export const Banner = () => (
    <section className="grid grid-rows-1 md:grid-cols-3">
        <div className="md:mt-32 mt-8 md:mr-12 md:col-span-2 auto-rows-auto order-2">
            <Headline className="md:text-4xl md:leading-10 leading-7 text-xl font-extrabold mb-8">
                Dostarczamy <HighlightedPhrase className="text-primary">dedykowane</HighlightedPhrase><br />
                <HighlightedPhrase> oprogramowanie </HighlightedPhrase>
                dla Twojej firmy
            </Headline>
            <Paragraph>
                Specjalizujemy się głównie w
                aplikacjach i systemach internetowych. Tworzymy oprogramowanie dla firm, supportujemy
                oraz wspomagamy start-up’y w wytwarzaniu oprogramowania.
            </Paragraph>
            <div className="flex mt-12">
                <Button type="primary" className="mr-5">Dowiedz się więcej</Button>
                <Button type="outlined">Porozmawiajmy o projekcie</Button>
            </div>
        </div>
        <div className="order-1">
            <StaticImage src="../../../assets/images/phones.png"
                         alt="phones"
                         width={400}
                         height={480} />
        </div>
    </section>
);