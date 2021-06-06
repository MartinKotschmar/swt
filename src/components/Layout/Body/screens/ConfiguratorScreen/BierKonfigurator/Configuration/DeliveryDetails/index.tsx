import classes from "./deliveryDetails.module.css";
import {Link} from "react-router-dom";
import "./deliveryDetails.css";

import React, {useState} from "react";

const DeliveryDetails = (props: any) => {
    //TODO add button to go back to bierkonfigurator (history eins zurück)
    const [status, setStatus] = useState(true);
    let customerDetails: any = [];
    const optionChangeHandler = () => {
        setStatus(false);
        console.log(status);
    };
    const submitClickHandler = (e: any) => {
        e.preventDefault();
        console.log(customerDetails);
        props.updateDeliveryDetails(customerDetails);
    };

    const onChange = (label: string, value: any) => {
        //check if item already exists in currentOrder
        if (customerDetails.length > 0) {
            for (let i = 0; i < customerDetails.length; i++) {
                if (label === customerDetails[i].label) {
                    return customerDetails.splice(i, 1);
                }
            }
        }

        //add item to currentOrder
        customerDetails = [
            ...customerDetails,
            {
                label: label,
                value: value,
            },
        ];
        return customerDetails;
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
                                        onChange={(e) => {
                                            optionChangeHandler();
                                            onChange("title", e.target.value);
                                        }}
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
                                        onChange={(e) => {
                                            onChange("preName", e.target.value);
                                        }}
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
                                        onChange={(e) => {
                                            onChange("lastName", e.target.value);
                                        }}
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
                                        onChange={(e) => {
                                            onChange("email", e.target.value);
                                        }}
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
                                        onChange={(e) => {
                                            onChange("mobileNumber", e.target.value);
                                        }}
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
                                    onChange={(e) => {
                                        onChange("street", e.target.value);
                                    }}
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
                                    onChange={(e) => {
                                        onChange("city", e.target.value);
                                    }}
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
                                    onChange={(e) => {
                                        onChange("houseNumber", e.target.value);
                                    }}
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
                                    onChange={(e) => {
                                        onChange("zipCode", e.target.value);
                                    }}
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
                        <Link to={"/shopping-cart"}>
                            <button className={classes.linkButton}>
                                {" "}
                                Lieferdetails bestätigen
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeliveryDetails;
