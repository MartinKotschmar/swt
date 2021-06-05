import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./navigation.module.css";
import { STOCK_PATH } from "../../../../constants";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <NavLink activeClassName={"active"} to="/beer-configurator/step-1">
            Bierkonfigurator
          </NavLink>
        </li>
        <li>
          <NavLink to="/privacy-policy">Datenschutzerklärung</NavLink>
        </li>
        <li>
          <NavLink to="/imprint">Impressum</NavLink>
        </li>
        <li>
          <NavLink to="/shopping-cart">Warenkorb</NavLink>
        </li>
        <li>
          <NavLink to="/delivery">Lieferung</NavLink>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={STOCK_PATH}>Warenbestand</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
