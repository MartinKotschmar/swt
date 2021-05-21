import classes from "./typePanel.module.css";
import { Link } from "react-router-dom";

const TypePanel = () => {
  const typeList = [
    "Altbier",
    "Berliner Weisse",
    "Bock",
    "Dunkel",
    "Export",
    "Gose",
    "Kölsch",
    "Lager",
    "Märzen",
    "Oktoberfest",
    "Pils",
    "Rauch",
    "Schwarz",
    "Weizen",
    "Zwickel&Keller",
  ];

  return (
    <div>
      <h2>Type of Beer Panel</h2>
      <div className={classes.container}>
        {typeList.map((x, value) => {
          return (
            <label>
              <input
                className={classes.input}
                key={x}
                type="radio"
                name="typePanelInput"
              ></input>
              {typeList[value]}
            </label>
          );
        })}
      </div>
      <br />
      <div></div>
    </div>
  );
};

export default TypePanel;
