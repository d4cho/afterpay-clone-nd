import React from 'react';
import './NavbarContent.css';
import Navigation from '../../Molecules/Navigation/Navigation';
import { navbarLabels } from '../../../Utils/NavbarLabel';
function NavbarContent() {
    return (
        <div className='nav-bar-wrapper'>
            <div className='nav-bar-border'>
                <div className='nav-bar-container'>
                    <Navigation navbarLabels={navbarLabels} />
                </div>
            </div>
        </div>
    );
}

export default NavbarContent;
