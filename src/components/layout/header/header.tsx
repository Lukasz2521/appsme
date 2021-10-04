import * as React from "react";
import { Link } from 'gatsby';
import styled, { css } from "styled-components";

import logo from "@assets/images/logo.png";
import { LanguageDropdown } from "./language-dropdown";

export const Header = () => {
    const NavLink = styled(Link)`
        display: inline-flex;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #49494E;
        position: relative;
        margin-right: 70px;

        &:last-child {
            margin-right: 0;
        }

        &:before {
            content: "";
            display: block;
            position: absolute;
            width: 0;
            left: 0;
            height: 3px;
            border-radius: 5px;
            background: #094AEB;
            bottom: -30px;
            margin-top: 15px;
            transition: width .25s ease-in-out;
        }

        &:hover {
            &:before {
                width: 100%;
            }
        }
    `;

    return (
        <header>
            <nav>
                <NavLink to="/">co robimy</NavLink>
                <NavLink to="/">kim jesteśmy</NavLink>
                <NavLink to="/">zrealizowane projekty</NavLink>
                <NavLink to="/">kontakt</NavLink>
            </nav>
        
            <LanguageDropdown languages={['pl', 'en', 'de']} />
      </header>
    );
};
