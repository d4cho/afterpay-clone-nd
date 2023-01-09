import React, { useState } from 'react';
import Title from '../Atoms/Title/Title';
import { useContext } from 'react';
import { MainContext } from '../../Context/MainContext';
import FilterButton from '../Atoms/FilterButton/Filterbutton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Dropdown from '../Molecules/Dropdown/Dropdown';
import data from '../../Data/products-data.json';
import ProductCardContent from '../Organisms/ProductCardContent/ProductCardContent';
import { dropdownLabels } from '../../Utils/DropdownLabel';

function NewProductsPage() {
    const { matches } = useContext(MainContext);
    const oneArrayOfProducts = [...data.data, ...data.dataTwo, ...data.dataThree, ...data.dataFour];
    const [filter, setFilter] = useState(oneArrayOfProducts);
    const [open, setOpen] = useState(false);
    const [offer, setOffer] = useState(false);

    const onClick = () => {
        setOpen(!open);
    };
    
    // filter by discount products
    const onClickOffer = () => {
        setOffer(!offer);
        if (offer) {
            setFilter(oneArrayOfProducts);
        } else {
            const discountFiltered = oneArrayOfProducts.filter(
                (item) => item.discount === '30% off'
            );
            setFilter(discountFiltered);
        }
    };

    // filter products
    const filterTypeProducts = (item) => {
        if (item.includes('Relevance')) {
            setFilter(oneArrayOfProducts);
        } else if (item.includes('Newest')) {
            const newestFiltered = oneArrayOfProducts.filter((item) => item.newest === 'Newest');
            setFilter(newestFiltered);
        } else if (item.includes('Popular')) {
            const popularFiltered = oneArrayOfProducts.filter((item) => item.popular === 'Popular');
            setFilter(popularFiltered);
        }
    };

    return (
        <>
            <br />
            <br />
            <Title
                title='New'
                fontSize='1.2rem'
                fontWeight='800'
                marginLeft={!matches ? '10px' : '10px'}
                marginTop='140px'
            />
            <div style={{ flexDirection: 'row', display: 'flex', gap: '10px' }}>
                <FilterButton
                    title='Offers'
                    borderRadius='30px'
                    paddingTop='15px'
                    paddingBottom='2px'
                    paddingLeft='20px'
                    paddingRight='20px'
                    border={offer ? '3px solid black' : '1px solid black'}
                    backgroundColor={offer ? 'rgb(178 252 228)' : ''}
                    fontSize='0.7rem'
                    onClick={onClickOffer}
                />
                <FilterButton
                    title='Sort by: Relevance'
                    borderRadius='30px'
                    paddingTop='10px'
                    paddingBottom='10px'
                    paddingLeft='10px'
                    paddingRight='10px'
                    fontSize='0.7rem'
                    arrow={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    onClick={onClick}
                    border={open ? '3px solid black' : '1px solid black'}
                />
            </div>
            {open && (
                <Dropdown dropdownLabel={dropdownLabels} filterTypeProducts={filterTypeProducts} />
            )}
            <ProductCardContent filter={filter} />
        </>
    );
}

export default NewProductsPage;
