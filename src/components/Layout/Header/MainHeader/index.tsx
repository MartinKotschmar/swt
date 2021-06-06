import React from 'react';
import Navigation from "../Navigation";
import Logo from "../Logo/index";
import classes from './index.module.css';

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <div className={`${classes.logoWrapper}`}>
                <Logo />
            </div>
            <Navigation/>
        </header>
    )
};

export default MainHeader;
