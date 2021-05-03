import React from "react";
import {Link} from "react-router-dom";
import classes from './configurationSteps.module.css';

const ConfigurationSteps = () => {

    const navPoints = ['Geschmack', 'Etikett', 'Größe'];

    return (
        <section>
            <ul>
                <div style={{display: 'flex', flexDirection: 'row', listStyle: 'none'}}>
                    <li style={{width: 'available'}}>
                        {/*add onmouseover*/}
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <Link to='/beer-configurator/step-1' style={{marginLeft: "50%", float:'left'}}>
                                <div className={`${classes.dot} ${classes.finished}`}/>
                            </Link>
                            <div
                                 className={`${classes.connectionLine} ${classes.finished}`}/>
                        </div>
                        <div>Geschmacksrichtung</div>
                    </li>

                    <li>
                        {/*add onmouseover*/}
                        <div></div>
                        <Link to='/beer-configurator/step-2'>
                            <div className={`${classes.dot} ${classes.finished}`}/>
                        </Link>
                        <div></div>
                    </li>
                    <div className={`${classes.connectionLine} ${classes.unfinished}`}/>
                    <li>
                        {/*add onmouseover*/}
                        <div></div>
                        <Link to='/beer-configurator/step-3'>
                            <div className={`${classes.dot} ${classes.unfinished}`}/>
                        </Link>
                        <div></div>
                    </li>
                    {/*add tooltip with title and subtext with (icon +) title for dots*/}
                </div>
                {/*<li><Link to='/beer-configurator/step-2'>Etikett</Link></li>
                    <li><Link to='/beer-configurator/step-1'>Geschmack</Link></li>
                    <li><Link to='/beer-configurator/step-3'>Größe</Link></li>*/}
            </ul>
        </section>
    )
};

export default ConfigurationSteps;
