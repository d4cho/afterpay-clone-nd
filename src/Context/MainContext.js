import { useState, createContext, useEffect } from 'react';

export const MainContext = createContext();

function MainContextProvider(props) {
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 1020px)').matches);
    const [isHovering, setIsHovering] = useState(false);
    const [label, setLabel] = useState('');

    const handleMouseOut = (menuLabel) => {
        if (menuLabel) {
            setIsHovering(false);
        }
    };

    useEffect(() => {
        window
            .matchMedia('(min-width: 1020px)')
            .addEventListener('change', (e) => setMatches(e.matches));
    }, []);

    return (
        <MainContext.Provider
            value={{ matches, isHovering, setIsHovering, label, setLabel, handleMouseOut }}
        >
            {props.children}
        </MainContext.Provider>
    );
}
export default MainContextProvider;
