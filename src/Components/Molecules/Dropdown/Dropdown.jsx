import React, { Fragment } from 'react';
import './Dropdown.css';

function Dropdown({ dropdownLabel, filterTypeProducts }) {
    return (
        <div className='dropdown-container'>
            <ul className='dropdown-list-container'>
                {dropdownLabel.map((item, i) => (
                    <Fragment key={i}>
                        <li onClick={() => filterTypeProducts(item)} className='dropdown-list-item'>
                            {item}
                        </li>
                    </Fragment>
                ))}
            </ul>
        </div>
    );
}

export default Dropdown;
