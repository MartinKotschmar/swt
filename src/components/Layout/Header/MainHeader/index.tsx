import React from 'react';
import Navigation from "../Navigation";
import Logo from "../Logo";
import classes from './index.module.css';

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <Logo/>
            <Navigation/>
        </header>
    )
};

export default MainHeader;
