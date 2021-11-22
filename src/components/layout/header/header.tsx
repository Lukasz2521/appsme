import * as React from "react";
import { Link } from 'gatsby';
import styled from "styled-components";

import { StaticImage } from 'gatsby-plugin-image';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 0;
`;

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

const Logo = () => {
    return <StaticImage src="../../../assets/images/logo.png" alt="logo" width={156} height={34} /> 
};

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <nav>
                <NavLink to="/">Co robimy</NavLink>
                <NavLink to="/">Kim jesteśmy</NavLink>
                <NavLink to="/">Zrealizowane projekty</NavLink>
                <NavLink to="/">Kontakt</NavLink>
            </nav>
        </StyledHeader>
    );
};
