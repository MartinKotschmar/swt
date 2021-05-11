import React, { useState } from "react";
import ConfigurationSteps from "../ConfigurationSteps";
import classes from "./ConfigurationPanel.module.css";
import IngredientsPanel from "./IngredientsPanel";

const ConfigurationPanel = () => {
  const [active, setActive] = useState(0);

  const [navPoints, setNavPoints] = useState([
    {
      name: "Biersorte",
      status: 1,
      linkText: "step-1",
      hoverText: "Biersorte",
      showHover: false,
    },
    {
      name: "Geschmack",
      status: 0,
      linkText: "step-2",
      hoverText: "Geschmack",
      showHover: false,
    },
    {
      name: "Flasche",
      status: 0,
      linkText: "step-3",
      hoverText: "Flasche",
      showHover: false,
    },
    {
      name: "Etikett",
      status: 0,
      linkText: "step-4",
      hoverText: "Etikett",
      showHover: false,
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
      <h2>Configuration-Panel</h2>
      <ConfigurationSteps
        active={active}
        changeActive={changeActive}
        navPoints={navPoints}
        setNavPoints={setNavPoints}
        changeActiveMarker={changeActiveMarker}
        hideHoverText={hideHoverText}
        showHoverText={showHoverText}
      />

      <IngredientsPanel />

      <div
        className={classes.flex}
        style={{ width: "100%", padding: "0px 4px" }}
      >
        <div style={{ width: "100%" }}>
          {active !== 0 ? (
            <button
              className={`${classes.btn} ${classes.btn_left}`}
              onClick={() => onClick(active - 1)}
            >
              Zurück
            </button>
          ) : null}
        </div>
        <div style={{ width: "100%" }}>
          {active !== 3 ? (
            <button
              className={`${classes.btn} ${classes.btn_right}`}
              onClick={() => onClick(active + 1)}
            >
              Weiter
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ConfigurationPanel;
