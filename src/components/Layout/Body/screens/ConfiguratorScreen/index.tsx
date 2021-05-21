import React, { useState } from "react";
import ConfigurationPanel from "./BierKonfigurator/Configuration/ConfigurationPanel";
import ConfigurationBottle from "./BierKonfigurator/Configuration/ConfigurationBottle";
import "./index.css";
import IngredientsList from "./BierKonfigurator/Configuration/ConfigurationPanel/IngredientsPanel/IngredientsList";

const ConfiguratorScreen = () => {
  return (
    <section>
      {/*content/data: The Ingredients List (the select fields of which the user can choose from)*/}
      <div className={"flex-wrapper"}>
        <ConfigurationPanel />
        <ConfigurationBottle />
      </div>
    </section>
  );
};

export default ConfiguratorScreen;
