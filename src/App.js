import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Views/Homepage';
import NavbarContent from './Components/Organisms/NavbarContent/NavbarContent';
import { useState, useEffect } from 'react';


function App() {
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 1020px)').matches);

    useEffect(() => {
        window
            .matchMedia('(min-width: 1020px)')
            .addEventListener('change', (e) => setMatches(e.matches));
    }, []);

    return (
        <div
            style={{
                width: '100%',
                paddingRight: matches ? '24px' : null,
                paddingLeft: matches ? '24px' : null,
                marginRight: matches ? 'auto' : null,
                marginLeft: matches ? 'auto' : null,
                maxWidth: matches ? '1440px' : null,
            }}
        >
            <NavbarContent />
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </div>
    );
}

export default App;
