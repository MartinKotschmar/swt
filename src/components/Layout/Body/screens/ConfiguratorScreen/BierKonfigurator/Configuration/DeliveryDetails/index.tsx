import classes from "./deliveryDetails.module.css";
import {Link} from "react-router-dom";

import React, {useState} from "react";

const DeliveryDetails = (props: any) => {

  //TODO add button to go back to bierkonfigurator (history eins zurück)
  const [status, setStatus] = useState(true);
    const [deliveryStatus, setDeliveryStatus] = useState("");
    const [deliveryDetails, setDeliveryDetails]: any = useState([])
  let customerDetails: any = [];
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
        saveTolocalStorage();
        (localStorage.length < 9) ? setDeliveryStatus("invalid") : setDeliveryStatus("valid")
    };

  //const [userInput, setUserInput] = useState("");
  const [title, setTitle] = useState("");
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");



  const inputChangeHandler = (label: string, value: any) => {
    //setUserInput(value);
    props.userInputHander(label, value);
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

  const saveTolocalStorage = () => {
    localStorage.setItem('title', title);
    localStorage.setItem('surname', surname);
    localStorage.setItem('name', name);
    localStorage.setItem('mail', mail);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('zip', zip);
    localStorage.setItem('city', city);
    localStorage.setItem('street', street);
    localStorage.setItem('houseNumber', houseNumber);

  }

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
                      //onChange("title", e.target.value);
                      setTitle(e.target.value);
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
                      //onChange("preName", e.target.value);
                      setSurname(e.target.value);
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
                        //onChange("preName", e.target.value);
                        setName(e.target.value);
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
                      setMail(e.target.value);
                    }}
                    className={`${classes.input} ${classes.input_long}`}
                    type="text"
                    minLength={5}
                    required
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
                      setPhoneNumber(e.target.value);
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
                    setZip(e.target.value);
                  }}
                  className={`${classes.input} ${classes.input_short}`}
                  type="number"
                  min={1001}
                  max={99998}
                  minLength={5}
                  maxLength={5}
                  pattern="[0-9]{5}"
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
                    setCity(e.target.value);
                  }}
                  className={`${classes.input} ${classes.input_long}`}
                  type="text"
                  minLength={2}
                  pattern="[A-Za-z]*"
                  required={true}
                />
              </div>
              {/* <div className={`${classes.flexGroup2}`}> */}
              <div className={classes.adress_Child}>
                <label className={classes.label}>
                  <span>
                    <strong>Straße</strong>
                  </span>
                </label>
                <input
                  onChange={(e) => {
                    setStreet(e.target.value);
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
                    setHouseNumber(e.target.value);
                  }}
                  className={`${classes.input} ${classes.input_short}`}
                  type="number"
                  min={1}
                  pattern="[0-9]{4}"
                  required={true}
                />
              </div>
              {/* </div> */}
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
