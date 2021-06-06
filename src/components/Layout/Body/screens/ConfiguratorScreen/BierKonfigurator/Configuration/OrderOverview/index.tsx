import React from "react";
import {Link} from "react-router-dom";
import classes from "./OrderOverview.module.css";

const OrderOverview = (props: any) => {
    return (
        <div>
            <Link
                to={"/shopping-cart"}
                onClick={() => {
                    props.onSubmit();
                }}
            >
                {" "}
                <button className={classes.linkButton}>Zum Warenkorb hinzufügen</button>
            </Link>
        </div>
    );
};

export default OrderOverview;
