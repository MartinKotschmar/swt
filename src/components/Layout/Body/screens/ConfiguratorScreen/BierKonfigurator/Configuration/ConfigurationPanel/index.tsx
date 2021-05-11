import React from "react";
import { Link, Route } from "react-router-dom";
import ConfigurationSteps from "../ConfigurationSteps";
import IngredientsList from "./IngredientsPanel";
import TypePanel from "./TypePanel";
import IngredientsPanel from "./IngredientsPanel";

const ConfigurationPanel = () => {
  return (
    <section>
      <h2>Configuration-Panel</h2>
      <Route path="/beer-configurator/step-1" exact>
        <TypePanel />
      </Route>
      <Route path="/beer-configurator/step-2" exact>
        <IngredientsPanel />
      </Route>
      <Link to="/beer-configurator/start">
        <button>Zurück</button>
      </Link>
      <Link to="/beer-configurator/step-1">
        <button>Weiter</button>
      </Link>
      {/* <ConfigurationSteps /> */}
      {/* <TypePanel /> */}
      {/* <IngredientsList /> */}
    </section>
  );
};

export default ConfigurationPanel;
