import React, { useState, Fragment } from 'react';
import './NavbarContent.css';
import Navigation from '../../Molecules/Navigation/Navigation';
import { navbarLabels } from '../../../Utils/NavbarLabel';
import SearchBarAndLinks from '../../Molecules/SearchBarAndLinks/SearchBarAndLinks';
import BottomLevelNavigation from '../../Molecules/BottomLevelNavigation/BottomLevelNavigation';
import { dropdownNavbarLabels } from '../../../Utils/NavbarLabel';
import { internationalClothsLabels } from '../../../Utils/NavbarLabel';
import { useContext } from 'react';
import { MainContext } from '../../../Context/MainContext';
import { navDropdownLabels } from '../../../Utils/NavbarLabel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { footerDropdownNavbarLabels } from '../../../Utils/NavbarLabel';
import Logo from '../../Atoms/Logo/Logo';
import { allCategoriesDropdownLabels } from '../../../Utils/NavbarLabel';

function NavbarContent() {
    const [isHovering, setIsHovering] = useState(false);
    const [label, setLabel] = useState('');
    const { open } = useContext(MainContext);
    const [clicked, setClicked] = useState('0');

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked('0');
        }
        setClicked(index);
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

    const renderSelectedView = (label) => {
        if (label === 'All Categories') {
            return (
                <div className='dropdown-labels-container'>
                    {allCategoriesDropdownLabels.map((navItem, id) => {
                        return (
                            <Fragment key={id}>
                                <ul className='dropdown-labels'>
                                    {navItem.mainLabel.subTitle?.map((name, id) => (
                                        <Fragment key={id}>
                                            {name.links.map((link, id) => (
                                                <Fragment key={id}>
                                                    <li className='dropdown-label-item'>{link}</li>
                                                </Fragment>
                                            ))}
                                        </Fragment>
                                    ))}
                                </ul>
                            </Fragment>
                        );
                    })}
                </div>
            );
        } else if (label === 'International Brands')
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
    };

    let navMobileClass = 'bottom-nav-mobile';
    if (open) {
        navMobileClass = 'bottom-nav-mobile open';
    }
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

            <div className={navMobileClass}>
                <div className='bottom-nav-mobile-content'>
                    <ul className='bottom-nav-mobile-content'>
                        {navDropdownLabels.map((navItem, id) => {
                            return (
                                <Fragment key={id}>
                                    <li
                                        onClick={() => handleToggle(navItem.id)}
                                        style={{
                                            fontWeight:
                                                navItem.mainLabel.mainLabelName === 'All Categories'
                                                    ? '700'
                                                    : null,
                                        }}
                                        className='dropdown-label-item'
                                    >
                                        {navItem.mainLabel.mainLabelName}
                                        {clicked === navItem.id
                                            ? navItem.mainLabel.iconOpen
                                            : navItem.mainLabel.iconClose}
                                    </li>
                                    {clicked === navItem.id ? (
                                        <ul style={{ padding: '0px' }}>
                                            {navItem.mainLabel.subTitle?.map((name, id) => (
                                                <Fragment key={id}>
                                                    {name.links.map((link, id) => (
                                                        <Fragment key={id}>
                                                            <li className='dropdown-label-item'>
                                                                {link}
                                                            </li>
                                                        </Fragment>
                                                    ))}
                                                </Fragment>
                                            ))}
                                        </ul>
                                    ) : null}
                                </Fragment>
                            );
                        })}
                    </ul>
                    {/* dotted line */}
                    <div className='dotted-line' />

                    <div className='footer-nav-labels'>
                        {footerDropdownNavbarLabels.map((item, id) => (
                            <div className='mobile-footer-nav-item' key={id}>
                                <a className='mobile-footer-nav-link' href='/'>
                                    {item}
                                </a>
                            </div>
                        ))}
                    </div>
                    <Logo
                        width='35%'
                        src='M22.4336 4.64608L15.3186 0.43508C13.2301 -0.800993 10.6195 0.743644 10.6195 3.21761V3.6496C10.6195 4.03984 10.823 4.40104 11.1522 4.59525L12.4956 5.39026C12.8903 5.62441 13.3823 5.33218 13.3823 4.8657V3.79117C13.3823 3.25391 13.9487 2.91812 14.4018 3.18675L20.5646 6.83507C21.0177 7.1037 21.0177 7.77529 20.5646 8.0421L14.4018 11.6904C13.9487 11.9591 13.3823 11.6233 13.3823 11.086V10.5142C13.3823 8.04029 10.7717 6.49383 8.68142 7.73172L1.56637 11.9427C-0.522124 13.1788 -0.522124 16.2717 1.56637 17.5078L8.68142 21.7188C10.7699 22.9548 13.3823 21.4102 13.3823 18.9362V18.5043C13.3823 18.114 13.1788 17.7546 12.8495 17.5586L11.5062 16.7618C11.1115 16.5276 10.6195 16.8199 10.6195 17.2863V18.3609C10.6195 18.8981 10.0531 19.2339 9.6 18.9653L3.43716 15.317C2.98407 15.0483 2.98407 14.3767 3.43716 14.1081L9.6 10.4598C10.0531 10.1912 10.6195 10.527 10.6195 11.0642V11.636C10.6195 14.1099 13.2301 15.6564 15.3186 14.4185L22.4336 10.2075C24.5221 8.97505 24.5221 5.88215 22.4336 4.64608Z'
                        marginBottom='20px'
                    />
                </div>
            </div>
        </div>
    );
}

export default NavbarContent;
