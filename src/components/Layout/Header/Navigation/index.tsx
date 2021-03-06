import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./navigation.module.css";
import { STOCK_PATH } from "../../../../constants";
import "./index.css";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <NavLink to="/beer-configurator/step-1">Bierkonfigurator</NavLink>
        </li>
        <li>
          <NavLink to="/privacy-policy">Datenschutzerkl√§rung</NavLink>
        </li>
        <li>
          <NavLink to="/imprint">Impressum</NavLink>
        </li>
        <li>
          <NavLink to="/shopping-cart">Warenkorb</NavLink>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={STOCK_PATH}>
            Warenbestand
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
