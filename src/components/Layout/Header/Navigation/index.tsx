import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/bier-konfigurator'>Bier-Konfigurator</Link>
                </li>
                <li>
                    <Link to='/datenschutzerklaerung'>Datenschutzerklärung</Link>
                </li>
                <li>
                    <Link to='/impressum'>Impressum</Link>
                </li>
            </ul>
        </nav>
    );

};

export default Navigation;
