import React, {useState} from "react";
import bottleGreenNormal from "./bottle-green.png";
import bottleWhiteNormal from "./bottle-white.png";
import bottleBrownNormal from "./bottle-brown.png";
import bottleBrownSmall from "./bottle-brown-small.png";
import bottleWhiteSmall from "./bottle-white-small.png";
import bottleGreenSmall from "./bottle-green-small.png";

import classes from "./ConfigurationBottle.module.css";

const ConfigurationBottle = (props: any) => {
    // [brown, green, white]

    const [bottle, setBottle] = useState({
        sizeIsNormal: true,
        color: "braun",
        usedGraphic: bottleBrownNormal,
        size: "0,5L",
        enteredText: "",
    });

    const bottleColorChangeHandlerRight = () => {
        switch (bottle.color) {
            case "grün": {
                let result = {
                    ...bottle,
                    color: "weiß",
                    usedGraphic: bottleWhiteSmall,
                };
                if (result.sizeIsNormal) result.usedGraphic = bottleWhiteNormal;
                props.onBottleChange({...bottle, color: "weiß"});
                return setBottle(result);
            }
            case "braun": {
                let result = {
                    ...bottle,
                    color: "grün",
                    usedGraphic: bottleGreenSmall,
                };
                if (result.sizeIsNormal) result.usedGraphic = bottleGreenNormal;
                props.onBottleChange({...bottle, color: "grün"});

                return setBottle(result);
            }
            case "weiß": {
                let result = {
                    ...bottle,
                    color: "braun",
                    usedGraphic: bottleBrownSmall,
                };
                if (result.sizeIsNormal) result.usedGraphic = bottleBrownNormal;
                props.onBottleChange({...bottle, color: "braun"});

                return setBottle(result);
            }
        }
    };

    const bottleColorChangeHandlerLeft = () => {
        switch (bottle.color) {
            case "grün": {
                let result = {
                    ...bottle,
                    color: "braun",
                    usedGraphic: bottleBrownSmall,
                };
                if (result.sizeIsNormal) result.usedGraphic = bottleBrownNormal;
                props.onBottleChange({...bottle, color: "braun"});

                return setBottle(result);
            }
            case "braun": {
                let result = {
                    ...bottle,
                    color: "weiß",
                    usedGraphic: bottleWhiteSmall,
                };
                if (result.sizeIsNormal) result.usedGraphic = bottleWhiteNormal;
                props.onBottleChange({...bottle, color: "weiß"});

                return setBottle(result);
            }
            case "weiß": {
                let result = {
                    ...bottle,
                    color: "grün",
                    usedGraphic: bottleGreenSmall,
                };
                if (result.sizeIsNormal) result.usedGraphic = bottleGreenNormal;
                props.onBottleChange({...bottle, color: "grün"});

                return setBottle(result);
            }
        }
    };

    const bottleSizeToggle = () => {
        let result = {...bottle};

        if (result.sizeIsNormal) {
            result.sizeIsNormal = false;
            if (result.color === "grün") result.usedGraphic = bottleGreenSmall;
            if (result.color === "braun") result.usedGraphic = bottleBrownSmall;
            if (result.color === "weiß") result.usedGraphic = bottleWhiteSmall;
            result.size = "0,33L";
            props.onBottleChange({...bottle, size: "0,33L"});
            return setBottle(result);
        } else {
            result.sizeIsNormal = true;
            if (result.color === "grün") result.usedGraphic = bottleGreenNormal;
            if (result.color === "braun") result.usedGraphic = bottleBrownNormal;
            if (result.color === "weiß") result.usedGraphic = bottleWhiteNormal;
            props.onBottleChange({...bottle, size: "0,5L"});
            result.size = "0,5L";
            return setBottle(result);
        }
    };

    const enterText = (event: any) => {
        //const {value, maxLength} = event.target;
        props.onBottleChange({...bottle, enteredText: event.target.value});

        setBottle({
            ...bottle,
            enteredText: event.target.value,
        });

        // props.onChange();
    };


    return (
        <div>
            <div className={classes.bottleWrapper}>
                <div className={classes.bottlePic}>
                    <img src={bottle.usedGraphic} alt="a bottle of beer"/>
                    <div
                        className={
                            bottle.sizeIsNormal
                                ? classes.renderText
                                : classes.renderTextBottleSmall
                        }
                    >
                        <p>{bottle.enteredText}</p>
                    </div>
                    <div className={classes.buttonWrapper}>
                        <button
                            onClick={() => {
                                bottleColorChangeHandlerLeft();
                            }}
                            className={`${classes.button} ${classes.buttonLeft}`}
                        >
                            <span>zurück</span>
                        </button>
                        <button
                            onClick={() => {
                                bottleColorChangeHandlerRight();
                            }}
                            className={`${classes.button} ${classes.buttonRight}`}
                        >
                            <span>vor</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className={classes.bottlePanelWrapper}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <input
                        type="text"
                        maxLength={24}
                        onChange={(event) => {
                            enterText(event);
                        }}
                        placeholder="Ihr Labeltext..."
                    />
                </form>
                <div className={classes.changeSizeWrapper}>
                    <div>
                        <p>Size {bottle.size}</p>
                        <button
                            onClick={() => {
                                bottleSizeToggle();
                            }}
                            className={`${classes.button} ${
                                bottle.sizeIsNormal ? classes.minus : classes.plus
                            }`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ConfigurationBottle;
