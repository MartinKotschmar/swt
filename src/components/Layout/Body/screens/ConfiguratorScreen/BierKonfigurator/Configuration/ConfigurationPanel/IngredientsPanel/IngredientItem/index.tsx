import { useState } from "react";
import classes from "./ingredientItem.module.css";

const IngredientItem = (props: any) => {
  const [value, setValue] = useState(false);
  let setName = "";
  let setType = "checkbox";
  if (props.categories[0] === "Komponente") {
    setName = props.categories[1];
    setType = "radio";
  } else if (props.categories[1] === "Komponente") {
    setName = props.categories[0];
    setType = "radio";
  }
  if (props.resetValues) {
    setValue(false);
  }

  return (
    <label key={props.id} className={`${classes.container}`}>
      <span className={`${classes.title}`}>{props.title}</span>
      <input
        required
        type={setType}
        checked={value}
        name={setName}
        onChange={() => {
          props.onChange(props, !value);
          setValue(!value);
        }}
      />
      <span>{` (${props.price.formatted})`}</span>
      <span className={`${classes.checkmark}`} />
    </label>
  );
};

export default IngredientItem;
