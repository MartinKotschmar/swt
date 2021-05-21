import classes from "./deliveryDetails.module.css";
import "./deliveryDetails.css";

import React, { useState, useEffect } from "react";

const DeliveryDetails = () => {
  const [status, setStatus] = useState(true);
  const [costomerDetails, setCostomerDetails] = useState();
  const optionChangeHandler = () => {
    setStatus(false);
    console.log(status);
  };
  const submitClickHandler = () => {
    //   if('checkImputFields') {
    //       setCostomerDetails(
    //       )
    //   }
  };

  return (
    <div className={classes.wrapper}>
      <form action="">
        <div className={classes.personal_Details}>
          <label html-for="title">Anrede</label>
          <select name="title" id="title" onChange={optionChangeHandler}>
            <option className={`active-${status}`} value="selection">
              Bitte auswählen:
            </option>
            <option className={classes.radioOption} value="Herr">
              Herr
            </option>
            <option className={classes.radioOption} value="Frau">
              Frau
            </option>
          </select>
        </div>
        <label className="">
          <span>Vorname</span>
          <input type="text" minLength={2} />
        </label>
        <label className="">
          <span>Nachname</span>
          <input type="text" minLength={2} />
        </label>
        <div className={classes.adress}>
          <div className={classes.adress_Child}>
            <label className="">
              <span>Straße</span>
              <input type="text" minLength={3} />
            </label>
          </div>
          <div className={classes.adress_Child}>
            <label className="">
              <span>Hausnummer</span>
              <input type="number" min={1} />
            </label>
          </div>
          <div className={classes.adress_Child}>
            <label className="">
              <span>Postleitzahl</span>
              <input
                type="number"
                min={1001}
                max={99998}
                minLength={5}
                maxLength={5}
              />
            </label>
          </div>
          <div className={classes.adress_Child}>
            <label className="">
              <span>Wohnort</span>
              <input type="text" minLength={2} />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className={classes.button}
          onClick={submitClickHandler}
        >
          Lieferdetails bestätigen
        </button>
      </form>
    </div>
  );
};

export default DeliveryDetails;
