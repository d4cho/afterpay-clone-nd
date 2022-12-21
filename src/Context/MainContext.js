import { useState, createContext, useEffect } from 'react';

export const MainContext = createContext();

function MainContextProvider(props) {
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 1020px)').matches);
    const [isHovering, setIsHovering] = useState(false);
    const [label, setLabel] = useState('');
    const [open, setOpen] = useState(false);

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

     const toggleNavbar = () => {
         setOpen(!open);
     };

    return (
        <MainContext.Provider
            value={{
                matches,
                isHovering,
                setIsHovering,
                label,
                setLabel,
                handleMouseOut,
                toggleNavbar,
                open
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
}
export default MainContextProvider;
