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
                <div class='storeTiles_storeTileOffersContainer__ShRkB'></div>
                <div className='product-card-bottom-container'>
                    <p class='product-card-title'>{title}</p>
                    <img class='product-card-image' src={image} style={{ height: '25px' }} alt='' />
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
