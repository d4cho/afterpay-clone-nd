import React, { Fragment, useContext } from 'react';
import './SearchBarAndLinks.css';
import SearchBar from '../../Atoms/SearchBar/SearchBar';
import { MainContext } from '../../../Context/MainContext';
import Link from '../../Atoms/Link/Link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchBarAndLinks() {
    const { matches } = useContext(MainContext);
    return (
        <>
            <div className='navigation_searchInputContainer'>
                <div className='search-bar_searchBarWrapper_'>
                    <SearchBar
                        backgroundColor='white'
                        borderRadius='0.75rem'
                        padding='16px'
                        placeHolder='Search brands, products and stores'
                        icon={
                            <SearchOutlinedIcon
                                style={{
                                    height: '20px',
                                    position: 'absolute',
                                    top: '12px',
                                    left: '10px',
                                }}
                            />
                        }
                        width={matches ? '380px' : '100%'}
                    />
                </div>
            </div>

            <div className='parent-container-links'>
                <Link title={matches ? 'Login' : <AccountCircleIcon />} fontWeight='600' />
                <Link title='Signup' />
            </div>
        </>
    );
}

export default SearchBarAndLinks;
