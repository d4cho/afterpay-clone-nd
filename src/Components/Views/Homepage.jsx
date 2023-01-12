import React from 'react';
import Carousel from '../Organisms/Carousel/Carousel';
import Title from '../Atoms/Title/Title';
import { useContext } from 'react';
import { MainContext } from '../../Context/MainContext';

function HomePage() {
    const { matches } = useContext(MainContext);
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Title
                    title='New'
                    fontSize='1.2rem'
                    fontWeight='800'
                    marginLeft={!matches ? '10px' : '30px'}
                    marginTop='50px'
                />
                <div>
                    <a
                        href='/new-products'
                        style={{
                            textDecoration: 'none',
                            color: 'black',
                            fontSize: '0.65rem',
                            padding: '8px',
                            backgroundColor: '#E8E8E8',
                            borderRadius: '5px',
                            position: 'relative',
                            top: '55px',
                            right: '30px',
                        }}
                    >
                        View all
                    </a>
                </div>
            </div>
            <Carousel />
        </>
    );
}

export default HomePage;
