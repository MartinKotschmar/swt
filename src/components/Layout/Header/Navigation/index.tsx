import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName={'active'} to='/bier-konfigurator'>Bier-Konfigurator</NavLink>
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
