import { useState, createContext, useEffect } from 'react';

export const MainContext = createContext();

function MainContextProvider(props) {
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 1020px)').matches);

    useEffect(() => {
        window
            .matchMedia('(min-width: 1020px)')
            .addEventListener('change', (e) => setMatches(e.matches));
    }, []);

    return <MainContext.Provider value={{ matches }}>{props.children}</MainContext.Provider>;
}
export default MainContextProvider;
