import * as React from "react";

import { Link } from 'gatsby';
import styled, { css } from "styled-components";

const NavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 7rem;
    transform: translateX(-50%);
    width: 220px;
`;

const NavLink = styled(Link)`
    display: inline-flex;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #49494E;
    position: relative;
`;

const MobileNavLinkStyles = css`
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 25px;
`;

const DesktopLink = css`
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

interface NavigationProps {
    mobile: boolean,
}

const Navigation = (props: NavigationProps) => {
    if(props.mobile) {
        const MobileNavLink = styled(NavLink)`
            ${MobileNavLinkStyles}
        `;

        return (
            <NavContainer>
                <MobileNavLink to="/">Co robimy</MobileNavLink>
                <MobileNavLink to="/">Kim jesteśmy</MobileNavLink>
                <MobileNavLink to="/">Zrealizowane projekty</MobileNavLink>
                <MobileNavLink to="/">Kontakt</MobileNavLink>
            </NavContainer>
        );
    } else {
        const DesktopNavLink = styled(NavLink)`
            ${DesktopLink}
        `;

        return (
            <nav>
                <DesktopNavLink to="/">Co robimy</DesktopNavLink>
                <DesktopNavLink to="/">Kim jesteśmy</DesktopNavLink>
                <DesktopNavLink to="/">Zrealizowane projekty</DesktopNavLink>
                <DesktopNavLink to="/">Kontakt</DesktopNavLink>
            </nav>
        );
    }
};

export { Navigation };