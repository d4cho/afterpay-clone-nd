import React from 'react';
import './Logo.css';

function Logo({ width, src }) {
    return (
        <>
            <svg style={{width: width}} role='img' aria-hidden='true' height='100%' viewBox='0 0 108 20'>
                <path d={src}></path>
            </svg>
        </>
    );
}

export default Logo;
