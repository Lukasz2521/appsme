import * as React from "react";
import styled from "styled-components";

import { MobileHeader, Header, Footer, Navigation } from '@components/layout';
import { useWindowResolutionType, ResolutionType, useWindowDimensions } from "@hooks";

const MobileMenuContainer = styled.div`
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: left .45s ease-in-out;
`;

const Theme = ({ children }) => {
    const [isMobile, setIsMobile] = React.useState(false);
    const [isOpen, setOpenMobileMenu] = React.useState(false);
    const resolutionType: ResolutionType = useWindowResolutionType();
    const windowWidth: number = useWindowDimensions().width;
    
    function toggleMobileMenu (): void {
        setOpenMobileMenu(!isOpen)
    }
    
    function handleResizeSideEffect(): void {
        setIsMobile(resolutionType === ResolutionType.MOBILE);
    }
    
    React.useEffect(() => {
        handleResizeSideEffect();
    });

    return (
        <div>
            <div className="container mx-auto">
                { !isMobile && <Header />}
                { isMobile && <MobileHeader toggleMenu={toggleMobileMenu} />}
                {children}
            </div>
            { isMobile &&
                <MobileMenuContainer style={{ 'left': isOpen ? 0 : -windowWidth }} >
                    <Navigation mobile />
                </MobileMenuContainer>
            }
            <Footer isDesktop={!isMobile}/>
        </div>
    );
};

export { Theme };