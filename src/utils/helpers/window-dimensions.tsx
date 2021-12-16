import { useState, useEffect } from "react";

interface WindowDimensions {
    height: number;
    width: number;
}

function getWindowDimensions(): WindowDimensions {
    const { innerHeight: height, innerWidth: width } = window;

    return {
        height,
        width
    };
}

function useWindowDimensions(): WindowDimensions {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
    });

    return windowDimensions;
}

export { useWindowDimensions, WindowDimensions };