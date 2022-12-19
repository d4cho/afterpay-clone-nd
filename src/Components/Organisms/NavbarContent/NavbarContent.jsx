import React from 'react';
import './NavbarContent.css';
import Logo from '../../Atoms/Logo/Logo';

function NavbarContent() {
    return (
        <div className='nav-bar-wrapper'>
            <div className='nav-bar-border'>
                <div className='nav-bar-container'>
                    <Logo
                        height='35px'
                        width='40px'
                        src='https://images.ctfassets.net/t00ajdlq0g9p/18VeoFD1UJFOhxpoe3FbXB/48f103d947a7a56b4e9714aacdcb930e/Fido_EN_M.png'
                    />
                </div>
            </div>
        </div>
    );
}

export default NavbarContent;
