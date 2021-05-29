import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./navigation.module.css";

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
          <NavLink to="/data-protection">Datenschutzerklärung</NavLink>
        </li>
        <li>
          <NavLink to="/imprint">Impressum</NavLink>
        </li>
        <li>
          <NavLink to="/delivery">Lieferung</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
