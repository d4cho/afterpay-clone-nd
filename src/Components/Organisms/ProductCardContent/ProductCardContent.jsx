import React from 'react';
import './ProductCardContent.css';
import ProductCard from '../../Molecules/ProductCard/ProductCard';

function ProductCardContent({filter}) {
    return (
        <div className='all-product-cards-content'>
            {filter.map((item, i) => (
                <ProductCard
                    key={i}
                    image={item.image}
                    backgroundImage={item.backgroundImage}
                    title={item.title}
                    discount={item.discount}
                />
            ))}
        </div>
    );
}

export default ProductCardContent;
