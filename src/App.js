import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Views/Homepage';
import NavbarContent from './Components/Organisms/NavbarContent/NavbarContent';
import { useContext } from 'react';
import { MainContext } from './Context/MainContext';

function App() {
    const { matches } = useContext(MainContext);
    return (
        <div
            style={{
                paddingRight: matches ? '24px' : '10px',
                paddingLeft: matches ? '24px' : null,
                marginRight: matches ? 'auto' : null,
                marginLeft: matches ? 'auto' : null,
                maxWidth: matches ? '1140px' : null,
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
