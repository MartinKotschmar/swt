import {Link, NavLink} from "react-router-dom";
import React from "react";
import classes from './footer.module.css'

const Footer = () => {
    return (
        <div className={`${classes.footer}`}>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <NavLink to='/imprint'>Impressum</NavLink>
                    </li>
                    <li>
                        <NavLink to='/data-protection'>Datenschutzerklärung</NavLink>
                    </li>
                </ul>
            </nav>

            {/*<div className="banner"/>*/}
            {/*<div className="nav-footer">*/}
            {/*    <Link to="/imprint">Impressum</Link>*/}
            {/*    <Link to="/data-protection">Datenschutzerklärung</Link>*/}
            {/*</div>*/}
        </div>)

}

export default Footer;