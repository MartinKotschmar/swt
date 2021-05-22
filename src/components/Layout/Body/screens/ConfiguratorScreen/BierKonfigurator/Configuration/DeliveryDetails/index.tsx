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
  const submitClickHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <form className={classes.form} action="">
          <div className={classes.input_wrapper}>
            <div className={classes.personal_Details_Wrapper}>
              <div className={classes.personal_Details}>
                <div className={classes.input_div_select}>
                  <label className={classes.label}>Anrede</label>
                  <select
                    name="title"
                    id="title"
                    onChange={optionChangeHandler}
                    required
                  >
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
                <div className={classes.input_div}>
                  <label className={classes.label}>
                    <span>Vorname</span>
                  </label>
                  <input
                    className={`${classes.input} ${classes.input_long}`}
                    type="text"
                    minLength={2}
                    pattern="[A-Za-z]"
                    required
                  />
                </div>
                <div className={classes.input_div}>
                  <label className={classes.label}>
                    <span>Nachname</span>
                  </label>
                  <input
                    className={`${classes.input} ${classes.input_long}`}
                    type="text"
                    minLength={2}
                    pattern="[A-Za-z]"
                    required
                  />
                </div>
                <div className={classes.input_div}>
                  <label className={classes.label}>
                    <span>E-Mail</span>
                  </label>
                  <input
                    className={`${classes.input} ${classes.input_long}`}
                    type="text"
                    minLength={5}
                    required
                  />
                </div>
                <div className={classes.input_div}>
                  <label className={classes.label}>
                    <span>Telefonnummer</span>
                  </label>
                  <input
                    className={`${classes.input} ${classes.input_long}`}
                    type="number"
                    minLength={5}
                    required
                  />
                </div>
              </div>
            </div>

            <div className={classes.adress}>
              <div className={classes.adress_Child}>
                <label className={classes.label}>
                  <span>Straße</span>
                </label>
                <input
                  className={`${classes.input} ${classes.input_long}`}
                  type="text"
                  minLength={3}
                  pattern="[A-Za-z0-9\s]"
                />
              </div>
              <div className={classes.adress_Child}>
                <label className={classes.label}>
                  <span>Wohnort</span>
                </label>
                <input
                  className={`${classes.input} ${classes.input_long}`}
                  type="text"
                  minLength={2}
                  pattern="[A-Za-z]"
                />
              </div>
              <div
                className={`${classes.adress_Child} ${classes.adress_Child_short}`}
              >
                <label className={classes.label}>
                  <span>Hausnummer</span>
                </label>
                <input
                  className={`${classes.input} ${classes.input_short}`}
                  type="number"
                  min={1}
                  pattern="[0-9]"
                />
              </div>
              <div className={classes.adress_Child}>
                <label className={classes.label}>
                  <span>Postleitzahl</span>
                </label>
                <input
                  className={`${classes.input} ${classes.input_short}`}
                  type="number"
                  min={1001}
                  max={99998}
                  minLength={5}
                  maxLength={5}
                  pattern="[0-9]"
                />
              </div>
            </div>
          </div>
          <div className={classes.button_wrapper}>
            <button
              type="submit"
              className={classes.button}
              onClick={submitClickHandler}
            >
              Lieferdetails bestätigen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryDetails;
