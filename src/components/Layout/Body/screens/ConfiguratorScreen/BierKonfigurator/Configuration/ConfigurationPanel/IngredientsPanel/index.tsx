import FlavourList from "./FlavourList";
import IngredientsList from "./IngredientsList";
import TypePanel from "../TypePanel";

const IngredientsPanel = () => {
  const drinks = ["Cola", "Sprite", "Fanta", "Vodka", "Tequila", "Rum"];
  const juice = [
    "Himbeeren",
    "Limetten",
    "Orangen",
    "Erdbeeren",
    "Mango",
    "Kirsche",
    "Karotte",
  ];
  const special = [
    "Schokolade",
    "Bretzel",
    "Knoblauch",
    "Rosmarin",
    "Chilli",
    "Honig",
    "Karamell",
    "Vanille",
  ];

  return (
    <div>
      <TypePanel />
      <h2>Flavour selection:</h2>
      <FlavourList />
      <div>
        <h2>Ingredients type 1</h2>
        <IngredientsList list={drinks} />
        <h2>Ingredients type 2</h2>
        <IngredientsList list={juice} />
        <h2>Ingredients type 3</h2>
        <IngredientsList list={special} />
      </div>
    </div>
  );
};

export default IngredientsPanel;
