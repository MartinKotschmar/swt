import React from "react";


const OrderOverview = (props: any) => {
    return (
        <div>
            <button onClick={props.onSubmit} title="Zum Warenkorb hinzufügen"/>
        </div>
    )
};

export default OrderOverview;