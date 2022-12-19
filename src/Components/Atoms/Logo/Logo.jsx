import React from 'react';
import './Logo.css';

function Logo({ height, width, src, position, right }) {
    return (
        <a href='/'>
            <img
                style={{ width: width, height: height , position: position, right: right}}
                className='header-logo-img'
                src={src}
                alt=''
            />
        </a>
    );
}

export default Logo;
