import React, {useEffect, useState} from 'react'
import bottleGreenNormal from './bottle-green.png'
import bottleWhiteNormal from './bottle-white.png'
import bottleBrownNormal from './bottle-brown.png'
import bottleBrownSmall from './bottle-brown-small.png'
import bottleWhiteSmall from './bottle-white-small.png'
import bottleGreenSmall from './bottle-green-small.png'

import classes from './ConfigurationBottle.module.css'

const ConfigurationBottle = () => {

        // [brown, green, white]

        const [bottle, setBottle] = useState({
            sizeIsNormal: true,
            color: 'brown',
            usedGraphic: bottleBrownNormal,
            size: '0,5L',
            enteredText: '',
            bottleWidth: '',
            bottleHeight: ''
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

        const bottleChangeHandlerLeft = () => {
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
            // @ts-ignore
            const bottlePicHeight = document.getElementById('bottlePic').offsetHeight;
            // @ts-ignore
            const bottlePicWidth = document.getElementById('bottlePic').offsetWidth;
            // @ts-ignore
            setBottle({...bottle, enteredText: event.target.value, bottleHeight: bottlePicHeight, bottleWidth: bottlePicWidth});
        }

        return (

            <div className={classes.flex}>
                <img className={classes.bottleSize} src={bottle.usedGraphic}/>
                <div className={`${classes['renderText']}  ${{bottom: bottle.bottleHeight}}`}><p>{bottle.enteredText}</p></div>
                <div>
                    <h3>{headings.colorChange}</h3>
                    <button onClick={bottleChangeHandlerLeft} className={classes.button}>previous</button>
                    <button onClick={bottleColorChangeHandlerRight} className={classes.button}>next</button>
                    <h3>Size {bottle.size}</h3>
                    <button onClick={bottleSizeToggle} className={classes.button}>CHANGE SIZE</button>
                    <h3>Enter Text here</h3>
                    <form><input type="text" onChange={enterText}/></form>
                </div>
            </div>
        )
    }
;

export default ConfigurationBottle;
