import React from 'react';
import './NavbarContent.css';
import Navigation from '../../Molecules/Navigation/Navigation';
import { navbarLabels } from '../../../Utils/NavbarLabel';
import SearchBarAndLinks from '../../Molecules/SearchBarAndLinks/SearchBarAndLinks';
import BottomLevelNavigation from '../../Molecules/BottomLevelNavigation/BottomLevelNavigation';
import { dropdownNavbarLabels } from '../../../Utils/NavbarLabel';

function NavbarContent() {
    return (
        <div className='nav-bar-wrapper'>
            <div className='nav-bar-border'>
                <div className='nav-bar-container'>
                    <Navigation navbarLabels={navbarLabels} />
                    <SearchBarAndLinks />
                </div>
                <BottomLevelNavigation dropdownNavbarLabels={dropdownNavbarLabels} />
            </div>
        </div>
    );
}

export default NavbarContent;
