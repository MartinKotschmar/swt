import React from "react";
import classes from "./Banner.module.css";

const Banner = (props: any) => {
    return <div>
        <div
            className={`${classes.banner} ${props.visibility ? classes.visible : classes.hide} ${props.type === 'success' ? classes.success : ''}`}>
            <p>Bestellung erfolgreich versandt</p>
        </div>
    </div>
};

export default Banner;