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
            <label className={classes.label}>
              <input
                className={classes.input}
                key={value}
                type="radio"
                name="typePanelInput"
                value={value}
              ></input>
              {typeList[value]}
            </label>
          );
        })}
      </div>
      <br />
      <div>
        {/* <Link to="/beer-configurator/start">
          <button>Zurück</button>
        </Link>
        <Link to="/beer-configurator/step-2">
          <button>Weiter</button>
        </Link> */}
      </div>
    </div>
  );
};

export default TypePanel;
