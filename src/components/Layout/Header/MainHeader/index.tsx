import React from 'react';
import Navigation from "../Navigation";
import Logo from "../Logo";
import './index.css';

const MainHeader = () => {
    return (
        <header className={"header"}>
            <Logo/>
            <Navigation/>
        </header>
    )
};

export default MainHeader;
