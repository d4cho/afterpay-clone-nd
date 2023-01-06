import React from 'react';
import Title from '../Atoms/Title/Title';
import { useContext } from 'react';
import { MainContext } from '../../Context/MainContext';

function NewProductsPage() {
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
            <Title
                title='New'
                fontSize='1.2rem'
                fontWeight='800'
                marginLeft={!matches ? '10px' : '30px'}
                marginTop='50px'
            />
        </>
    );
}

export default NewProductsPage;
