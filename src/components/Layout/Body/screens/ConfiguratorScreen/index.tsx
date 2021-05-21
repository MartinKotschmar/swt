import React from 'react';
import ConfigurationPanel from "./BierKonfigurator/Configuration/ConfigurationPanel";
import ConfigurationBottle from "./BierKonfigurator/Configuration/ConfigurationBottle";
import './index.css';

const ConfiguratorScreen = () =>{
    return(
        <section>
            <div className={'flex-wrapper'}>
                <ConfigurationPanel/>
                <ConfigurationBottle/>
            </div>
        </section>
    )
};

export default ConfiguratorScreen;
