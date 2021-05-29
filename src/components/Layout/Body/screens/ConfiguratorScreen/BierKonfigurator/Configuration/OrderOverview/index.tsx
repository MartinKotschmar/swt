import React from "react";
import {Link} from "react-router-dom";

const OrderOverview = (props: any) => {
    return (
        <div>
            <Link
                to={"/beer-configurator/" + "step-1"}
                onClick={() => {
                    props.onSubmit();
                    props.updateResetValue();
                    props.resetNavPoints();
                    //todo: show success banner
                }}>Zum Warenkorb hinzufügen</Link>
        </div>
    )
};

export default OrderOverview;