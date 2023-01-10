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
    const [sortByFilter, setSortByFilter] = useState(false);
    const [offer, setOffer] = useState(false);
    const [sortBy, setSortBy] = useState('Relevance');

    const onClick = () => {
        setSortByFilter(true);
    };

    const discountFiltered = oneArrayOfProducts.filter(
        (item) => item.discount === '30% off' || item.discount === '70% off'
    );

    // filter by discount products
    const onClickOffer = () => {
        setOffer(!offer);
        if (offer) {
            setFilter(oneArrayOfProducts);
        } else {
            setFilter(discountFiltered);
        }
    };

    // filter products by label and discount if clicked on offer
    const filterTypeProducts = (item) => {
        if (item.includes('Relevance')) {
            if (offer) {
                setFilter(discountFiltered);
            } else {
                setFilter(oneArrayOfProducts);
            }
            setSortBy('Relevance');
            setSortByFilter(!sortByFilter);
        } else if (item.includes('Newest')) {
            if (offer) {
                let newSorted = discountFiltered.sort((a, b) => b.id - a.id);
                setFilter(newSorted);
            } else {
                const newestFiltered = oneArrayOfProducts.filter(
                    (item) => item.newest === 'Newest'
                );
                setFilter(newestFiltered);
            }
            setSortBy('Newest');
            setSortByFilter(!sortByFilter);
        } else if (item.includes('Popular')) {
            if (offer) {
                setFilter(discountFiltered);
            } else {
                const popularFiltered = oneArrayOfProducts.filter(
                    (item) => item.popular === 'Popular'
                );
                setFilter(popularFiltered);
            }
            setSortBy('Popular');
            setSortByFilter(!sortByFilter);
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
                    title={`Sort by:${sortBy}`}
                    borderRadius='30px'
                    paddingTop='10px'
                    paddingBottom='10px'
                    paddingLeft='10px'
                    paddingRight='10px'
                    fontSize='0.7rem'
                    arrow={sortByFilter ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    onClick={onClick}
                    border={sortByFilter ? '3px solid black' : '1px solid black'}
                />
            </div>
            {sortByFilter && (
                <Dropdown dropdownLabel={dropdownLabels} filterTypeProducts={filterTypeProducts} />
            )}
            <ProductCardContent filter={filter} />
        </>
    );
}

export default NewProductsPage;
