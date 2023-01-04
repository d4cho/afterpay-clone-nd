import React from 'react';
import './ProductCard.css';

function ProductCard({ image, backgroundImage, title }) {
    return (
        <div className='product-card-parent-container'>
            <div
                className='product-card-storeTile-Container'
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    height: '210px',
                    width: '195px',
                }}
            >
                <div className='product-name-storeTiles'></div>
                <div className='product-card-bottom-container'>
                    <p className='product-card-title'>{title}</p>
                    <img
                        className='product-card-image'
                        src={image}
                        style={{ maxHeight: '2.2rem', width: '2rem', fontSize: '1.0rem' }}
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
