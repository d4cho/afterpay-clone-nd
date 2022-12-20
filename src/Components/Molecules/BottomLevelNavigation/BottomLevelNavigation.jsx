import React, { Fragment } from 'react';
import './BottomLevelNavigation.css';

function BottomLevelNavigation({ dropdownNavbarLabels }) {
    return (
        <ul className='bottom-level-nav-list'>
            {dropdownNavbarLabels.map((navItem, idx) => (
                <Fragment key={idx}>
                    <li
                        className='bottom-level-nav-item'
                        style={{ fontWeight: navItem.fontWeight }}
                    >
                        <a href={navItem.href} className='bottom-level-nav-link'>
                            {navItem.title}
                        </a>
                    </li>
                </Fragment>
            ))}
        </ul>
    );
}

export default BottomLevelNavigation;
