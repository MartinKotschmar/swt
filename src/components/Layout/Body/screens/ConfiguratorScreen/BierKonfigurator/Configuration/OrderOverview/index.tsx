import React from "react";
import { Link } from "react-router-dom";
import classes from "./OrderOverview.module.css";

const OrderOverview = (props: any) => {
  return (
    <div>
      <Link
        to={"/shopping-cart"}
        onClick={() => {
          props.onSubmit();
          //props.updateResetValue();
          //props.resetNavPoints();
          //todo: show success banner
        }}
      >
        {" "}
        <button className={classes.linkButton}>Zum Warenkorb hinzufügen</button>
      </Link>
    </div>
  );
};

export default OrderOverview;
