import {NavLink} from "react-router-dom";
import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
    return (
        <div className={`${classes.footer}`}>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <NavLink to="/imprint">Impressum</NavLink>
                    </li>
                    <li>
                        <NavLink to="/privacy-policy">Datenschutzerklärung</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Footer;
