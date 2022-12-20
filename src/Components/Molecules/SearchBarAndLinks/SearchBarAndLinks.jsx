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
            {matches ? (
                <SearchBar
                    backgroundColor='white'
                    borderRadius='0.75rem'
                    padding='16px'
                    placeHolder='Search brands, products and stores'
                    icon={
                        <SearchOutlinedIcon
                            style={{
                                height: '20px',
                                width: '17.50px',
                                position: 'relative',
                                top: '1px',
                                left: '25px',
                            }}
                        />
                    }
                    width='35%'
                />
            ) : (
                <SearchBar
                    backgroundColor='white'
                    borderRadius='0.75rem'
                    padding='16px'
                    placeHolder='Search brands, products and stores'
                    icon={
                        <SearchOutlinedIcon
                            style={{
                                height: '20px',
                                width: '17.50px',
                                position: 'relative',
                                top: '1px',
                                left: '25px',
                            }}
                        />
                    }
                    width='100%'
                />
            )}

            <div className='parent-container-links'>
                <Link title={matches ? 'Login' : <AccountCircleIcon />} fontWeight='600' />
                <Link title='Signup' />
            </div>
        </>
    );
}

export default SearchBarAndLinks;
