import { useState } from "react";
import classes from "./ingredientItem.module.css";

const IngredientItem = (props: any) => {
  const [value, setValue] = useState(false);

  if (props.resetValues) {
    setValue(false);
  }

  return (
    <label key={props.id} className={`${classes.container}`}>
      <span className={`${classes.title}`}>{props.title}</span>
      <input
        type={props.setType}
        checked={props.setType === "radio" ? props.value : value}
        name={props.name}
        onChange={() => {
          if (props.setType === "radio") {
            props.onChange(props, !value);
            props.updateRadioValue(props.itemKey);
          } else {
            props.onChange(props, !value);
            setValue(!value);
          }
        }}
      />
      <span>{` (${props.price.amount.toFixed(2)} €)`}</span>
      <span
        className={`${
          props.setType === "checkbox" ? classes.checkmark : classes.radio
        }`}
      />
    </label>
  );
};
export default IngredientItem;
