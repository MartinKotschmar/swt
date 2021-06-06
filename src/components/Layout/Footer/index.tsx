import { NavLink } from "react-router-dom";
import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  const scrollHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={`${classes.footer}`}>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <NavLink to="/imprint" className={classes.link} onClick={scrollHandler}>
              Impressum
            </NavLink>
          </li>
          <li>
            <NavLink to="/privacy-policy" className={classes.link} onClick={scrollHandler}>
              Datenschutzerklärung
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
