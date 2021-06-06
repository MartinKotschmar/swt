import React, {useState} from 'react'
import bottleGreenNormal from './bottle-green.png'
import bottleWhiteNormal from './bottle-white.png'
import bottleBrownNormal from './bottle-brown.png'
import bottleBrownSmall from './bottle-brown-small.png'
import bottleWhiteSmall from './bottle-white-small.png'
import bottleGreenSmall from './bottle-green-small.png'

import classes from './ConfigurationBottle.module.css'

const ConfigurationBottle = (props: any) => {

        // [brown, green, white]

        const [bottle, setBottle] = useState({
            sizeIsNormal: true,
            color: 'brown',
            usedGraphic: bottleBrownNormal,
            size: '0,5L',
            enteredText: '',
        })

        const bottleColorChangeHandlerRight = () => {
            switch (bottle.color) {
                case 'green': {
                    let result = {...bottle, color: 'white', usedGraphic: bottleWhiteSmall}
                    if (result.sizeIsNormal) result.usedGraphic = bottleWhiteNormal
                    return setBottle(result);
                }
                case 'brown' : {
                    let result = {...bottle, color: 'green', usedGraphic: bottleGreenSmall}
                    if (result.sizeIsNormal) result.usedGraphic = bottleGreenNormal
                    return setBottle(result);
                }
                case 'white' : {
                    let result = {...bottle, color: 'brown', usedGraphic: bottleBrownSmall}
                    if (result.sizeIsNormal) result.usedGraphic = bottleBrownNormal
                    return setBottle(result);
                }
            }
        }

        const bottleColorChangeHandlerLeft = () => {
            switch (bottle.color) {
                case 'green': {
                    let result = {...bottle, color: 'brown', usedGraphic: bottleBrownSmall}
                    if (result.sizeIsNormal) result.usedGraphic = bottleBrownNormal
                    return setBottle(result);
                }
                case 'brown' : {
                    let result = {...bottle, color: 'white', usedGraphic: bottleWhiteSmall}
                    if (result.sizeIsNormal) result.usedGraphic = bottleWhiteNormal
                    return setBottle(result);
                }
                case 'white' : {
                    let result = {...bottle, color: 'green', usedGraphic: bottleGreenSmall}
                    if (result.sizeIsNormal) result.usedGraphic = bottleGreenNormal
                    return setBottle(result);
                }
            }
        }

        const bottleSizeToggle = () => {
            let result = {...bottle}

            if (result.sizeIsNormal) {
                result.sizeIsNormal = false
                if (result.color === 'green') result.usedGraphic = bottleGreenSmall
                if (result.color === 'brown') result.usedGraphic = bottleBrownSmall
                if (result.color === 'white') result.usedGraphic = bottleWhiteSmall
                result.size = '0,33L'
                return setBottle(result);
            } else {
                result.sizeIsNormal = true
                if (result.color === 'green') result.usedGraphic = bottleGreenNormal
                if (result.color === 'brown') result.usedGraphic = bottleBrownNormal
                if (result.color === 'white') result.usedGraphic = bottleWhiteNormal
                result.size = '0,5L'
                return setBottle(result);
            }
        }

        const enterText = (event: any) => {
            //const {value, maxLength} = event.target;

            setBottle({
                ...bottle,
                enteredText: event.target.value,
            });

            // props.onChange();
        }

        const onChange = () => {
            props.onBottleChange(bottle);
        }


        return (

            <div>
                <div className={classes.bottleWrapper}>
                    <div className={classes.bottlePic}>
                        <img src={bottle.usedGraphic} alt='a bottle of beer'/>
                        <div className={bottle.sizeIsNormal ? classes.renderText : classes.renderTextBottleSmall}>
                            <p>{bottle.enteredText}</p>
                        </div>
                        <div className={classes.buttonWrapper}>
                            <button onClick={() => {
                                bottleColorChangeHandlerLeft();
                                onChange();
                            }}
                                    className={`${classes.button} ${classes.buttonLeft}`}>
                                <span>zurück</span>
                            </button>
                            <button onClick={() => {
                                bottleColorChangeHandlerRight();
                                onChange();
                            }}
                                    className={`${classes.button} ${classes.buttonRight}`}>
                                <span>vor</span>
                            </button>
                        </div>
                    </div>

                </div>

                <div className={classes.bottlePanelWrapper}>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        onChange();
                    }}>
                        <input type="text"
                               maxLength={24}
                               onChange={(event) => {
                                   enterText(event);
                                   onChange();
                               }}
                               placeholder='Ihr Labeltext...'/>
                    </form>
                    <div className={classes.changeSizeWrapper}>
                        <div>
                            <p>Size {bottle.size}</p>
                            <button
                                onClick={() => {
                                    bottleSizeToggle();
                                    onChange();
                                }}
                                className={`${classes.button} ${bottle.sizeIsNormal ? classes.minus : classes.plus}`}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
;

export default ConfigurationBottle;
