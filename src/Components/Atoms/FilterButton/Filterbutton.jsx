import React from 'react';
import './FilterButton.css';

function FilterButton({
    title,
    paddingBottom,
    borderRadius,
    border,
    fontSize,
    onClick,
    arrow,
    paddingTop,
    paddingLeft,
    paddingRight,
    backgroundColor
}) {
    return (
        <div
            onClick={onClick}
            className='filter-button'
            style={{
                paddingTop: paddingTop,
                paddingBottom: paddingBottom,
                borderRadius: borderRadius,
                border: border,
                fontSize: fontSize,
                paddingRight: paddingRight,
                paddingLeft: paddingLeft,
                cursor: 'pointer',
                backgroundColor: backgroundColor
            }}
        >
            {arrow ? (
                <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                    {title} {arrow}
                </div>
            ) : (
                title
            )}
        </div>
    );
}

export default FilterButton;
