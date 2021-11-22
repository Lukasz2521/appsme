import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { Paragraph } from "@components/inputs";
import { StyledLeftBracket } from "./right-bracket-background";
import { StyledRightBracket } from "./left-bracket-background";


const MOCK = {
   menu: {
        title:  'Menu',
        links: [
            {
                to: '/',
                description: 'Co robimy'
            },
            {
                to: '/',
                description: 'Co robimy'
            },
            {
                to: '/',
                description: 'Co robimy'
            },
        ]
   },
   links: {
        title:  'Menu',
        links: [
            {
                to: '/',
                description: 'Referencje'
            },
            {
                to: '/',
                description: 'Co robimy'
            },
            {
                to: '/',
                description: 'Co robimy'
            },
        ]
   }
};

const FooterContainer = styled.footer`
    background: #F8F8FB;
    padding-top: 55px;
`;

const Logo = ({ className }) => {
    return <StaticImage className={className}
                        src="../../../assets/images/logo.png"
                        alt="logo"
                        width={110}
                        height={24} /> 
};

const FooterSectionTitle = styled.span`
    display: block;
    margin-bottom: 25px;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    color: #094AEB;
`;

const StyledLink = styled(Link)`
    font-weight: 700;
`;

const CompanyFooterName = styled.div`
    border-top: 1px solid #E0E3F3;
    font-size: 14px;
    color: #949498;
    text-align: center;
    padding: 35px 0;
`;

interface FooterLink {
    to: string;
    description: string;
}

interface LinksListProps {
    title: string;
    links: FooterLink[];
}

const LinksList = (props: LinksListProps) => {
    return (
        <div>
            <FooterSectionTitle>{props.title}</FooterSectionTitle>
            <ul>
            {
                props.links.map((link: FooterLink) => {
                    return (
                        <li className="mb-4">
                            <StyledLink to={link.to}>{link.description}</StyledLink>
                        </li>
                    );
                })
            }
            </ul>
        </div>
    );
}

export const Footer = () => (
    <FooterContainer>
        <div className="container mx-auto">
            <div className="grid grid-rows-1 grid-cols-3 mb-8">
                <div>
                    <Logo className="mb-10" />
                    <div>
                        <FooterSectionTitle>Software Solutions</FooterSectionTitle>
                        <Paragraph>
                            Dostarczanie dedykowanego oprogramowania. Specjalizujemy się głównie w
                            aplikacjach i systemach internetowych. Tworzymy oprogramowanie dla firm, supportujemy
                            oraz wspomagamy start-up’y w wytwarzaniu oprogramowania.
                        </Paragraph>
                    </div>
                </div>
                <div className="col-span-2 grid grid-rows-1 grid-cols-3">
                    <LinksList {...MOCK.menu} />
                    <LinksList {...MOCK.links} />
                    <div className="relative text-sm">
                        <StyledLeftBracket />
                        <StyledRightBracket />
                        <FooterSectionTitle>Appsme Software Solutions</FooterSectionTitle>
                        <address className="block mb-6">
                            <span className="block">ul. Symboliczna 3/31</span>
                            <span className="block">01-252 Warszawa</span>
                        </address>
                        <div>
                            <span className="block">contact@appsme.io</span>
                            <span className="block">
                                <a href="tel:+48662483248">+48 662 483 248</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <CompanyFooterName>
                2021 Appsme
            </CompanyFooterName>
        </div>
    </FooterContainer>
);