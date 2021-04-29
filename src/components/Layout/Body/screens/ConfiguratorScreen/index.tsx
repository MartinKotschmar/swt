import React from 'react';
import ConfigurationPanel from "./BierKonfigurator/Configuration/ConfigurationPanel";
import ConfigurationBottle from "./BierKonfigurator/Configuration/ConfigurationBottle";
import './index.css';

const ConfiguratorScreen = () =>{
    return(
        <section>
        <h1>ConfiguratorScreen</h1>
            <div className={'flex-wrapper'}>
                <ConfigurationPanel/>
                <ConfigurationBottle/>
            </div>
        </section>
    )
};

export default ConfiguratorScreen;
