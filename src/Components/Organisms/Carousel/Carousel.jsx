import React from 'react';
import './Carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../../Molecules/ProductCard/ProductCard';
import data from '../../../Data/products-data.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

function Carousel() {
    const removeButtonClasses = (e) => {
        let leftButton = document.querySelector('.swiper-button-prev');
        let RightButton = document.querySelector('.swiper-button-next');
        if (e.realIndex === 2) {
            RightButton.style.display = 'none';
        } else {
            RightButton.style.display = 'block';
        }
        if (e.realIndex === 0) {
            console.log(e.realIndex);
            leftButton.style.display = 'none';
        } else {
            leftButton.style.display = 'block';
        }
    };
    return (
        <Swiper
            onSlideChange={removeButtonClasses}
            navigation={true}
            modules={[Navigation]}
            className='mySwiper'
        >
            <SwiperSlide>
                {data.data.map((item, i) => (
                    <ProductCard
                        key={i}
                        image={item.image}
                        backgroundImage={item.backgroundImage}
                        title={item.title}
                    />
                ))}
            </SwiperSlide>
            <SwiperSlide>
                {data.dataTwo.map((item, i) => (
                    <ProductCard
                        key={i}
                        image={item.image}
                        backgroundImage={item.backgroundImage}
                        title={item.title}
                    />
                ))}
            </SwiperSlide>

            <SwiperSlide>
                {data.dataThree.map((item, i) => (
                    <ProductCard
                        key={i}
                        image={item.image}
                        backgroundImage={item.backgroundImage}
                        title={item.title}
                        discount={item.discount}
                    />
                ))}
            </SwiperSlide>
        </Swiper>
    );
}

export default Carousel;
