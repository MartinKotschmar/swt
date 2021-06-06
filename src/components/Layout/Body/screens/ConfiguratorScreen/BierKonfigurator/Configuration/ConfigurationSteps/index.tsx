import React from "react";
import {Link} from "react-router-dom";
import classes from './configurationSteps.module.css';


const ConfigurationSteps = (props: any) => {
    const {navPoints, changeActiveMarker, showHoverText, hideHoverText, active, changeActive}: any = props;

    return (
        <section>
            <ul style={{padding: 0}}>
                <div className={`${classes.flex} ${classes.noListStyle} ${classes.width100}`}>
                    {navPoints.map((point: any, i: number) => {
                        return (
                            <li className={classes.flex_4} key={i}>
                                <div
                                    className={`${classes.hoverText} ${classes.textHeight} ${(point.hoverText.length > 10) ? classes.b_1 : ""}`}
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
                                              changeActive(i);
                                              changeActiveMarker(i);
                                              hideHoverText(i);
                                          }}
                                    >
                                        <div
                                            className={`${classes.dot} ${"step-" + (active + 1) === point.linkText ? classes.dotActive : ""} ${point.status ? classes.finished : classes.unfinished}`}/>
                                    </Link>
                                    {navPoints[i + 1] ? <div
                                            className={`${classes.connectionLine2} ${navPoints[i + 1].status === 1 ? classes.finished : classes.unfinished}`}/> :
                                        <div
                                            className={`${classes.connectionLine2} ${classes.transparent}`}
                                            style={{width: "100%"}}/>}
                                </div>
                                <div>{i === active ? point.name : null}</div>
                            </li>
                        )
                    })}
                </div>
            </ul>
        </section>
    )
};

export default ConfigurationSteps;
