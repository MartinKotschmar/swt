import React from "react";
import {Link} from "react-router-dom";

const ConfigurationSteps = () => {
    return (
        <section>
            <ul>
                <li><Link to='/bier-konfigurator/schritt-1'>Geschmack</Link></li>
                <li><Link to='/bier-konfigurator/schritt-2'>Etikett</Link></li>
                <li><Link to='/bier-konfigurator/schritt-3'>Größe</Link></li>
            </ul>
        </section>
    )
};

export default ConfigurationSteps;
