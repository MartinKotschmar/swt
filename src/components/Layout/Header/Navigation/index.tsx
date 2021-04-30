import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './navigation.module.css';

const Navigation = () => {
    return (
        <nav className={classes.navigation}>
            <ul>
                <li>
                    <NavLink activeClassName={'active'} to='/bier-konfigurator'>Bierkonfigurator</NavLink>
                </li>
                <li>
                    <NavLink to='/datenschutzerklaerung'>Datenschutzerklärung</NavLink>
                </li>
                <li>
                    <NavLink to='/impressum'>Impressum</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
