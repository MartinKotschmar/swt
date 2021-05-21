import React from "react";
import classes from "./backdrop.module.css";

const Backdrop = (props: any) => {
  return (
    <div
      className={`${classes.backdrop} ${props.active ? classes.active : ""}`}
      onClick={props.onClick ? props.onClick : null}
    />
  );
};

export default Backdrop;
