import { useState } from "react";
import classes from "./ingredientsList.module.css";

const IngredientsList = (props: any) => {
  const [order, setOrder]: any = useState([]);

  const onSubmitHandler = (event: any) => {
    event.preventDefault();

    /* 
    the order-list needs to be sent to the backend to be processed
    the user should be forwarded to the shopping cart, where a processed list should be rendered 
    (to inform the user what he has in the shopping cart / overview)
    afterwards the user should have the possibility of: (maybe buttons from which the user can choos)
      1. deleting items from the shopping cart (update order)
      2. finishing the order
      3. create more items (reset states)
    */

    console.log(event.target.key);

    /*setOrder((prevOrders: any) => {
      return [
        {
          id: event.target.key,
          value: event.target.value,
        },
        ...prevOrders,
      ];
    });*/
  };

  return (
    <div className={classes.container}>
      {props.ingredients.map((x: any, value: any) => {
        return (
          <label>
            <input
              key={props.ingredients.id}
              type="checkbox"
              name={"ingredientsPanelInput" + props.listNumber}
              value={value}
            ></input>
            {props.ingredients.title}
          </label>
        );
      })}
    </div>
  );
};

export default IngredientsList;
