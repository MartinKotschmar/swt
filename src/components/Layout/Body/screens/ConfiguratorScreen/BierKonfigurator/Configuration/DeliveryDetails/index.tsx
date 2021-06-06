import classes from "./deliveryDetails.module.css";
import {Link} from "react-router-dom";

import React, {useState} from "react";

const DeliveryDetails = (props: any) => {
    const [status, setStatus] = useState(true);
    const [deliveryStatus, setDeliveryStatus] = useState("");
    const [deliveryDetails, setDeliveryDetails]: any = useState([])


    const optionChangeHandler = () => {
        setStatus(false);
    };

    const submitClickHandler: any = (e: any) => {
        e.preventDefault();
        checkValid();
        if (deliveryStatus === "valid") props.updateDeliveryDetails(deliveryDetails);
    };

    const checkValid = () => {
        console.log(deliveryDetails);
        (deliveryDetails.length < 9) ? setDeliveryStatus("invalid") : setDeliveryStatus("valid")
    };

    const onChange = (label: string, value: any) => {
        //check if item already exists in currentOrder
        if (deliveryDetails.length > 0) {
            for (let i = 0; i < deliveryDetails.length; i++) {
                if (label === deliveryDetails[i].label) {
                    setDeliveryDetails(deliveryDetails.splice(i, 1));
                }
            }
        }

        //add item to currentOrder
        setDeliveryDetails([
            ...deliveryDetails,
            {
                label: label,
                value: value,
            },
        ]);
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <form className={classes.form} action="">
                    <div className={classes.input_wrapper}>
                        <div className={classes.personal_Details_Wrapper}>
                            <div className={classes.personal_Details}>
                                <div className={classes.input_div_select}>
                                    <label className={classes.label}>
                                        <strong>Anrede</strong>
                                    </label>
                                    <select
                                        name="title"
                                        id="title"
                                        onChange={(e) => {
                                            optionChangeHandler();
                                            onChange("title", e.target.value);
                                        }}
                                        required={true}
                                    >
                                        <option
                                            className={`${
                                                status ? classes.active : classes.inactiveStatus
                                            }}`}
                                            value="selection"
                                        >
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
                                        <span>
                                            <strong>Vorname</strong>
                                        </span>
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            onChange("preName", e.target.value);
                                        }}
                                        className={`${classes.input} ${classes.input_long}`}
                                        type="text"
                                        minLength={2}
                                        pattern="[A-Z a-z]*"
                                        required={true}

                                    />
                                </div>
                                <div className={classes.input_div}>
                                    <label className={classes.label}>
                                        <span>
                                            <strong>Nachname</strong>
                                        </span>
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            onChange("lastName", e.target.value);
                                        }}
                                        className={`${classes.input} ${classes.input_long}`}
                                        type="text"
                                        minLength={2}
                                        pattern="[A-Za-z]*"
                                        required={true}

                                    />
                                </div>
                                <div className={classes.input_div}>
                                    <label className={classes.label}>
                                        <span>
                                          <strong>E-Mail</strong>
                                        </span>
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            onChange("email", e.target.value);
                                        }}
                                        className={`${classes.input} ${classes.input_long}`}
                                        type={"email"}
                                        minLength={5}
                                        required={true}

                                    />
                                </div>
                                <div className={classes.input_div}>
                                    <label className={classes.label}>
                                        <span>
                                          <strong>Telefonnummer</strong>
                                        </span>
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            onChange("mobileNumber", e.target.value);
                                        }}
                                        className={`${classes.input} ${classes.input_long}`}
                                        type="number"
                                        minLength={5}
                                        required={true}

                                    />
                                </div>
                            </div>
                        </div>

                        <div className={classes.adress}>
                            <div className={classes.adress_Child}>
                                <label className={classes.label}>
                                  <span>
                                    <strong>Postleitzahl</strong>
                                  </span>
                                </label>
                                <input
                                    onChange={(e) => {
                                        onChange("zipCode", e.target.value);
                                    }}
                                    className={`${classes.input} ${classes.input_short}`}
                                    type="number"
                                    min={1001}
                                    max={99998}
                                    minLength={5}
                                    maxLength={5}
                                    pattern="[0-9]{6}"
                                    required={true}

                                />
                            </div>
                            <div className={classes.adress_Child}>
                                <label className={classes.label}>
                                  <span>
                                    <strong>Wohnort</strong>
                                  </span>
                                </label>
                                <input
                                    onChange={(e) => {
                                        onChange("city", e.target.value);
                                    }}
                                    className={`${classes.input} ${classes.input_long}`}
                                    type="text"
                                    minLength={2}
                                    pattern="[A-Za-z]*"
                                    required={true}

                                />
                            </div>
                            <div className={classes.adress_Child}>
                                <label className={classes.label}>
                                  <span>
                                    <strong>Straße</strong>
                                  </span>
                                </label>
                                <input
                                    onChange={(e) => {
                                        onChange("street", e.target.value);
                                    }}
                                    className={`${classes.input} ${classes.input_long}`}
                                    type="text"
                                    minLength={3}
                                    pattern="[A-Za-z0-9\s]*"
                                    required={true}

                                />
                            </div>
                            <div
                                className={`${classes.adress_Child} ${classes.adress_Child_short}`}
                            >
                                <label className={classes.label}>
                                  <span>
                                    <strong>Hausnummer</strong>
                                  </span>
                                </label>
                                <input
                                    onChange={(e) => {
                                        onChange("houseNumber", e.target.value);
                                    }}
                                    className={`${classes.input} ${classes.input_short}`}
                                    type="number"
                                    min={1}
                                    pattern="[0-9]{4}"
                                    required={true}

                                />
                            </div>
                        </div>
                    </div>
                    <div className={classes.button_wrapper}>

                        <button className={classes.linkButton} onClick={(event) => {
                            submitClickHandler(event);
                        }}>
                            {" "}
                            Lieferdetails bestätigen
                        </button>
                        {(deliveryStatus === "valid") ?
                            <p style={{color: 'green', border: "1px solid green", padding: "4px 8px"}}>Die Lieferdetails
                                wurden erfolgreich übernommen!</p> : (deliveryStatus === "invalid") ?
                                <p style={{color: 'red', border: "1px solid red", padding: "4px 8px"}}>Die Lieferdetails
                                    sind unvollständig!</p> : null}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeliveryDetails;
