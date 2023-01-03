import React, { Fragment } from 'react';
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
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
                <SwiperSlide>
                    {data.data
                        .filter((item) => item.id <= 6)
                        .map((item, i) => (
                            <ProductCard
                                key={i}
                                image={item.image}
                                backgroundImage={item.backgroundImage}
                                title={item.title}
                            />
                        ))}
                </SwiperSlide>
                <SwiperSlide>
                    {data.data
                        .filter((item) => item.id >= 7 || item.id === 12)
                        .map((item, i) => (
                            <ProductCard
                                key={i}
                                image={item.image}
                                backgroundImage={item.backgroundImage}
                                title={item.title}
                            />
                        ))}
                </SwiperSlide>

                <SwiperSlide>
                    {data.data
                        .filter((item) => item.id >= 12 || item.id === 18)
                        .map((item, i) => (
                            <ProductCard
                                key={i}
                                image={item.image}
                                backgroundImage={item.backgroundImage}
                                title={item.title}
                            />
                        ))}
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Carousel;
