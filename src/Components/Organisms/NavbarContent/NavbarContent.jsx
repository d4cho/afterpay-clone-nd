import React, { useState, Fragment } from 'react';
import './NavbarContent.css';
import Navigation from '../../Molecules/Navigation/Navigation';
import { navbarLabels } from '../../../Utils/NavbarLabel';
import SearchBarAndLinks from '../../Molecules/SearchBarAndLinks/SearchBarAndLinks';
import BottomLevelNavigation from '../../Molecules/BottomLevelNavigation/BottomLevelNavigation';
import { dropdownNavbarLabels } from '../../../Utils/NavbarLabel';
import { womenClothingLabels } from '../../../Utils/NavbarLabel';
import { menClothingLabels } from '../../../Utils/NavbarLabel';
import { beautyClothingLabels } from '../../../Utils/NavbarLabel';
import { shoesLabels } from '../../../Utils/NavbarLabel';
import { internationalClothsLabels } from '../../../Utils/NavbarLabel';
import { useContext } from 'react';
import { MainContext } from '../../../Context/MainContext';

function NavbarContent() {
    const [isHovering, setIsHovering] = useState(false);
    const [label, setLabel] = useState('');
    const {open } = useContext(MainContext);

    const renderSelectedView = (label) => {
        switch (label) {
            case 'All Categories':
                return (
                    <div className='dropdown-labels-container'>
                        <ul className='dropdown-labels'>
                            {womenClothingLabels.map((item, id) => {
                                return (
                                    <Fragment key={id}>
                                        <li className='dropdown-label-item'>{item.title}</li>
                                    </Fragment>
                                );
                            })}
                        </ul>
                        <ul className='dropdown-labels'>
                            {menClothingLabels.map((item, id) => {
                                return (
                                    <Fragment key={id}>
                                        <li className='dropdown-label-item'>{item.title}</li>
                                    </Fragment>
                                );
                            })}
                        </ul>
                        <ul className='dropdown-labels'>
                            {beautyClothingLabels.map((item, id) => {
                                return (
                                    <Fragment key={id}>
                                        <li className='dropdown-label-item'>{item.title}</li>
                                    </Fragment>
                                );
                            })}
                        </ul>
                        <ul className='dropdown-labels'>
                            {shoesLabels.map((item, id) => {
                                return (
                                    <Fragment key={id}>
                                        <li className='dropdown-label-item'>{item.title}</li>
                                    </Fragment>
                                );
                            })}
                        </ul>
                    </div>
                );

            case 'International Brands':
                return (
                    <div className='dropdown-labels-container'>
                        <ul className='dropdown-labels'>
                            {internationalClothsLabels.map((item, id) => {
                                return (
                                    <Fragment key={id}>
                                        <li className='dropdown-label-item'>{item.title}</li>
                                    </Fragment>
                                );
                            })}
                        </ul>
                    </div>
                );

            default:
                return null;
        }
    };

    const handleMouseOver = (menuLabel) => {
        if (menuLabel === 'All Categories') {
            setLabel('All Categories');
            setIsHovering(true);
        } else if (menuLabel === 'International Brands') {
            setLabel('International Brands');
            setIsHovering(true);
        }
    };

    const handleMouseOut = (menuLabel) => {
        if (menuLabel) {
            setIsHovering(false);
        }
    };

    return (
        <div onMouseLeave={() => handleMouseOut(label)} className='nav-bar-wrapper'>
            <div className='nav-bar-border'>
                <div className='nav-bar-container'>
                    <Navigation navbarLabels={navbarLabels} />
                    <SearchBarAndLinks />
                </div>
                <BottomLevelNavigation
                    dropdownNavbarLabels={dropdownNavbarLabels}
                    handleMouseOver={handleMouseOver}
                />
                {isHovering ? renderSelectedView(label) : null}
            </div>
            {/* pop up navbar adds to the main nav */}
            {open ? null : (
                <div className='bottom-nav-mobile'>
                    <div className='bottom-nav-mobile-content'>
                        <ul>
                            <li>All Categories</li>
                            <li>Most Popular</li>
                            <li>New</li>
                            <li>Shop Local</li>
                            <li>International Brands</li>
                        </ul>
                        {/* dotted line */}
                        <div className='dotted-line' />
                        {/*  container for links */}
                        <div>
                            {/* footer nav */}
                            <div>
                                <a
                                    href='/'
                                >about us</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavbarContent;
