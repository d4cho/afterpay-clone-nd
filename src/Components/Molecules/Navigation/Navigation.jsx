import React, { Fragment } from 'react';
import './Navigation.css';
import Logo from '../../Atoms/Logo/Logo';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { MainContext } from '../../../Context/MainContext';
import CloseIcon from '@mui/icons-material/Close';

function Navigation({ navbarLabels }) {
    const { matches, toggleNavbar, open } = useContext(MainContext);
    return (
        <div className='navigation-container'>
            {open
                ? !matches && <CloseIcon onClick={toggleNavbar} />
                : !matches && <MenuIcon onClick={toggleNavbar} />}
            <Logo
                width='35%'
                src='M8.724 9.787c0-1.798-1.338-3.061-2.982-3.061-1.644 0-2.982 1.285-2.982 3.061 0 1.755 1.338 3.06 2.982 3.06 1.646 0 2.982-1.262 2.982-3.06zm.024 5.35v-1.391c-.811.963-2.019 1.561-3.464 1.561C2.28 15.307 0 12.953 0 9.787c0-3.146 2.367-5.542 5.351-5.542 1.404 0 2.587.6 3.398 1.54V4.437h2.697v10.7H8.748zM24.544 12.761c-.944 0-1.206-.342-1.206-1.24V6.77h1.733V4.436h-1.733v-2.61h-2.764v2.61h-3.56v-.65c0-.9.352-1.243 1.317-1.243h.606V.468h-1.33c-2.28 0-3.354.728-3.354 2.953v1.014h-1.535V6.77h1.535v8.366h2.764V6.77h3.56v5.243c0 2.183.854 3.125 3.09 3.125h1.426v-2.376h-.55zM34.455 8.823c-.197-1.39-1.36-2.225-2.719-2.225-1.36 0-2.478.813-2.762 2.225h5.48zm-5.504 1.67c.198 1.583 1.36 2.483 2.829 2.483 1.162 0 2.062-.536 2.587-1.392h2.83c-.659 2.268-2.742 3.723-5.483 3.723-3.31 0-5.634-2.267-5.634-5.499 0-3.231 2.456-5.564 5.702-5.564 3.267 0 5.634 2.354 5.634 5.564 0 .236-.021.47-.065.685h-8.4zM54.987 9.787c0-1.734-1.338-3.061-2.982-3.061-1.644 0-2.982 1.285-2.982 3.061 0 1.755 1.338 3.06 2.982 3.06 1.644 0 2.982-1.326 2.982-3.06zm-8.684-5.35H49v1.391c.81-.985 2.016-1.583 3.464-1.583 2.96 0 5.283 2.376 5.283 5.52 0 3.147-2.367 5.544-5.349 5.544-1.382 0-2.522-.536-3.31-1.434v5.665h-2.785V4.437zM67.467 9.787c0-1.798-1.336-3.061-2.982-3.061-1.644 0-2.982 1.285-2.982 3.061 0 1.755 1.338 3.06 2.982 3.06 1.646 0 2.982-1.262 2.982-3.06zm.024 5.35v-1.391c-.811.963-2.019 1.561-3.464 1.561-3.004 0-5.284-2.354-5.284-5.52 0-3.146 2.367-5.542 5.35-5.542 1.403 0 2.587.6 3.398 1.54V4.437h2.696v10.7h-2.696zM41.443 5.486s.686-1.24 2.367-1.24c.719 0 1.184.24 1.184.24v2.73s-1.014-.611-1.946-.488c-.932.123-1.521.958-1.518 2.076v6.335h-2.784v-10.7h2.697v1.047zM82.781 4.437l-6.808 15.069h-2.871l2.673-5.826-4.52-9.243h3.254l2.644 6.176 2.713-6.176h2.915zM104.514 4.194L97.764.393c-1.98-1.116-4.457.278-4.457 2.512v.39c0 .352.193.678.505.853l1.275.718c.374.212.84-.052.84-.473v-.97c0-.485.538-.789.968-.546l5.846 3.294c.43.242.43.848 0 1.09l-5.846 3.293c-.43.242-.967-.06-.967-.546v-.516c0-2.233-2.477-3.63-4.46-2.512l-6.75 3.802a2.866 2.866 0 000 5.024l6.75 3.801c1.981 1.116 4.46-.278 4.46-2.512v-.39a.983.983 0 00-.506-.853l-1.274-.72c-.374-.211-.841.053-.841.474v.97c0 .485-.538.788-.967.545l-5.847-3.293a.623.623 0 010-1.091l5.847-3.294c.43-.243.967.06.967.546v.516c0 2.233 2.476 3.63 4.457 2.512l6.75-3.802a2.864 2.864 0 000-5.02z'
                paddingLeft='20px'
                marginLeft={!matches ? '20px' : null}
            />
            <div className='navigation-list-items'>
                {navbarLabels.map((navItem, idx) => (
                    <Fragment key={idx}>
                        <a className='navbar-list-item' href={navItem.href}>
                            {navItem.title}
                        </a>
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default Navigation;