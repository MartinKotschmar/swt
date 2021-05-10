import React, {useState} from "react";
import {Link} from "react-router-dom";
import classes from './configurationSteps.module.css';


const ConfigurationSteps = (props: any) => {

    const [navPoints, setNavPoints] = useState([
            {
                name: 'etikett',
                status: 1,
                linkText: 'step-1',
                hoverText: 'etikett',
                showHover: false
            },
            {
                name: 'Biersorte',
                status: 0,
                linkText: 'step-2',
                hoverText: 'Biersorte',
                showHover: false

            },
            {
                name: 'Geschmack',
                status: 0,
                linkText: 'step-3',
                hoverText: 'Geschmack',
                showHover: false

            },
            {
                name: 'Größe',
                status: 0,
                linkText: 'step-4',
                hoverText: 'Größe',
                showHover: false

            },
        ]
    )


    const changeActiveMarker = (nextActiveStep: number) => {
        let temp: any = [...navPoints];
        temp.forEach((point: any, i: number) => {
            if (i <= nextActiveStep) {
                temp[i].status = 1;
            }
        });
        setNavPoints(temp);
    }

    const showHoverText = (element: number) => {
        if (element !== props.active) {
            let temp: any = [...navPoints];
            temp[element].showHover = true;
            setNavPoints(temp);
        }

    };

    const hideHoverText = (element: number) => {
        let temp: any = [...navPoints];
        temp[element].showHover = false;
        setNavPoints(temp);

    }

    /*
    * if the user input in the panel forms isn't valid (incomplete) then make the dot red and if the user hasn't chosen anything make it grey.
    * check using usestate
    * add tooltip with title and subtext with (icon +) title for dots
    * onmouseover effect
* */
    return (
        <section>
            <ul style={{padding:0}}>{/*if active-> no hover and show name, inactive-> hover, but no name*/}
                <div className={`${classes.flex} ${classes.noListStyle} ${classes.width100}`}>
                    {navPoints.map((point, i) => {
                        return (
                            <li className={classes.flex_4} key={i}>
                                <div
                                    className={`${classes.hoverText} ${classes.textHeight}`}
                                >{navPoints[i].showHover ? point.hoverText : ""}
                                </div>
                                <div className={classes.flex}>
                                    <div
                                        className={`${classes.connectionLine} ${point.status ? classes.finished : classes.unfinished} ${point.linkText === 'step-1' ? classes.transparent : ""}`}
                                        style={{width: "100%"}}/>
                                    <Link to={'/beer-configurator/' + point.linkText}
                                          onMouseOver={() => {
                                              showHoverText(i);
                                          }}
                                          onMouseLeave={() => {
                                              hideHoverText(i);
                                          }}
                                          onClick={() => {
                                              props.changeActive(i);
                                              changeActiveMarker(i);
                                              hideHoverText(i);
                                          }}
                                    >
                                        <div
                                            className={`${classes.dot} ${point.status ? classes.finished : classes.unfinished}`}/>
                                    </Link>
                                    {navPoints[i + 1] ? <div
                                            className={`${classes.connectionLine2} ${navPoints[i + 1].status === 1 ? classes.finished : classes.unfinished}`}/> :
                                        <div
                                            className={`${classes.connectionLine2} ${classes.transparent}`}
                                            style={{width: "100%"}}/>}
                                </div>
                                <div>{i === props.active ? point.name : null}</div>
                            </li>
                        )
                    })}
                </div>
            </ul>
        </section>
    )
};

export default ConfigurationSteps;
