import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';


function Logo({ width, src, marginLeft }) {
    return (
        <svg
            style={{ width: width, marginLeft: marginLeft }}
            role='img'
            aria-hidden='true'
            height='100%'
            viewBox='0 0 108 20'
        >
            <Link to='/'><path d={src}></path></Link>
        </svg>
    );
}

export default Logo;
