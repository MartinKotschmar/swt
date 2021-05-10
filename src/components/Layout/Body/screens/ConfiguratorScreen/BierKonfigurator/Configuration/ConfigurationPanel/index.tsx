import React, {useState} from 'react';
import ConfigurationSteps from "../ConfigurationSteps";
import classes from "./ConfigurationPanel.module.css";

const ConfigurationPanel = () => {

    const [active, setActive] = useState(0);

    const changeActive = (step: number) => {
        setActive(step);
    };

    return (
        <section className={classes.mh_20}>
            <h2>Configuration-Panel</h2>
            <ConfigurationSteps active={active} changeActive={changeActive}/>

            

            <div className={classes.flex} style={{width:'100%', padding:'0px 4px'}}>
                <div style={{width: '100%'}}>{(active !== 0) ? <button className={`${classes.btn} ${classes.btn_left}`}
                                                                       onClick={() => changeActive(active - 1)}>Zurück</button> : null}</div>
                <div style={{width: '100%'}}>{(active !== 3) ? <button className={`${classes.btn} ${classes.btn_right}`}
                                                                       onClick={() => changeActive(active + 1)}>Weiter</button> : null}</div>
            </div>
        </section>
    )
};

export default ConfigurationPanel;
