import React, {FunctionComponent, useState} from "react";
import ConfigurationSteps from "../ConfigurationSteps";
import classes from "./ConfigurationPanel.module.css";
import {Link} from "react-router-dom";
import StepDetails from "../StepDetails";

const initialNavPoints: any = [
    {
        name: "Biersorte",
        status: 1,
        linkText: "step-1",
        hoverText: "Biersorte",
        showHover: false,
        category: "Biersorte",
    },
    {
        name: "Geschmack",
        status: 0,
        linkText: "step-2",
        hoverText: "Geschmack",
        showHover: false,
        category: "Geschmacksrichtung",
    },
    {
        name: "Zutat",
        status: 0,
        linkText: "step-3",
        hoverText: "Zutat",
        showHover: false,
        category: "Zutat",
    },
    {
        name: "Flasche",
        status: 0,
        linkText: "step-4",
        hoverText: "Flasche",
        showHover: false,
        category: "Flasche",
    },
    {
        name: "Etikett",
        status: 0,
        linkText: "step-5",
        hoverText: "Etikett",
        showHover: false,
        category: "Etikett",
    },
    {
        name: "Bestellung abschließen",
        status: 0,
        linkText: "step-6",
        hoverText: "Bestellung abschließen",
        showHover: false,
        category: "",
    }
];

const getInitialNavPoints = () => {
    return initialNavPoints;
};

const ConfigurationPanel = (props: any) => {

    const [active, setActive] = useState(0);
    let navPoints: any = getInitialNavPoints();

    const resetNavPoints = () => {
        console.log(initialNavPoints);
        let temp: any = [...navPoints];
        temp.forEach((point: any, i: number) => {
            temp[i].status = (i) ? 0 : 1;
        });
        updateNavPoints(temp);
        setActive(0);
        console.log(navPoints);
        return navPoints;
    };

    const updateNavPoints = (updatedNavPoints: any) => {
        navPoints = [...updatedNavPoints];
        return navPoints;
    };

    const changeActive = (step: number) => {
        setActive(step);
    };

    const changeActiveMarker = (nextActiveStep: number) => {
        let temp: any = [...navPoints];
        temp.forEach((point: any, i: number) => {
            if (i <= nextActiveStep) {
                temp[i].status = 1;
            }
        });
        updateNavPoints(temp);
    };

    const showHoverText = (element: number) => {
        if (element !== active) {
            let temp: any = [...navPoints];
            temp[element].showHover = true;
            updateNavPoints(temp);
        }
    };

    const hideHoverText = (element: number) => {
        let temp: any = [...navPoints];
        temp[element].showHover = false;
        updateNavPoints(temp);
    };

    const onClick = (i: number) => {
        changeActive(i);
        changeActiveMarker(i);
        hideHoverText(i);
    };

    return (
        <section className={classes.mh_20}>
            {/*Panel navigation*/}
            <ConfigurationSteps
                active={active}
                changeActive={changeActive}
                navPoints={navPoints}
                changeActiveMarker={changeActiveMarker}
                hideHoverText={hideHoverText}
                showHoverText={showHoverText}
            />

            {/*Panel content*/}
            {/*<IngredientsPanel />*/}
            {navPoints.map((navPoint: any, index: number) => {
                return <StepDetails key={"stepDetails_" + index} step={navPoint} onChange={props.onChange}
                                    onSubmit={props.onSubmit} active={active} index={index}
                                    resetNavPoints={resetNavPoints}/>
            })}

            {/*Forward/Backward buttons (Panel navigation)*/}
            <div
                className={classes.flex}
                style={{width: "100%", padding: "0px 4px"}}
            >
                <div style={{width: "100%"}}>
                    {active !== 0 ? (
                        <Link
                            to={"/beer-configurator/" + navPoints[active - 1].linkText}
                            className={`${classes.btn} ${classes.btn_left}`}
                            onClick={() => onClick(active - 1)}
                        >
                            Zurück
                        </Link>
                    ) : null}
                </div>
                <div style={{width: "100%"}}>
                    {active !== navPoints.length - 1 ? (
                        <Link
                            to={"/beer-configurator/" + navPoints[active + 1].linkText}
                            className={`${classes.btn} ${classes.btn_right}`}
                            onClick={() => onClick(active + 1)}
                        >
                            Weiter
                        </Link>
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export default ConfigurationPanel;
