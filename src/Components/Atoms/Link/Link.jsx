import React from 'react';
import './Link.css';

function Link({ title,href, fontWeight }) {
    return (
        <div style={{fontWeight:fontWeight}} className='link-container'>
            <a
                href={href}
            >{title}</a>
        </div>
    );
}

export default Link;
