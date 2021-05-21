import React, { useState } from "react";
import ConfigurationSteps from "../ConfigurationSteps";
import classes from "./ConfigurationPanel.module.css";
import IngredientsPanel from "./IngredientsPanel";
import { Link } from "react-router-dom";
import StepDetails from "../StepDetails";

const ConfigurationPanel = () => {
  const [active, setActive] = useState(0);
  const [navPoints, setNavPoints] = useState([
    {
      name: "Biersorte",
      status: 1,
      linkText: "step-1",
      hoverText: "Biersorte",
      showHover: false,
      category: "beertype",
    },
    {
      name: "Geschmack",
      status: 0,
      linkText: "step-2",
      hoverText: "Geschmack",
      showHover: false,
      category: "flavour",
    },
    {
      name: "Flasche",
      status: 0,
      linkText: "step-3",
      hoverText: "Flasche",
      showHover: false,
      category: "",
    },
    {
      name: "Etikett",
      status: 0,
      linkText: "step-4",
      hoverText: "Etikett",
      showHover: false,
      category: "",
    },
  ]);

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
    setNavPoints(temp);
  };

  const showHoverText = (element: number) => {
    if (element !== active) {
      let temp: any = [...navPoints];
      temp[element].showHover = true;
      setNavPoints(temp);
    }
  };

  const hideHoverText = (element: number) => {
    let temp: any = [...navPoints];
    temp[element].showHover = false;
    setNavPoints(temp);
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
      <StepDetails steps={navPoints} />
      {/*Forward/Backward buttons (Panel navigation)*/}
      <div
        className={classes.flex}
        style={{ width: "100%", padding: "0px 4px" }}
      >
        <div style={{ width: "100%" }}>
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
        <div style={{ width: "100%" }}>
          {active !== 3 ? (
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
