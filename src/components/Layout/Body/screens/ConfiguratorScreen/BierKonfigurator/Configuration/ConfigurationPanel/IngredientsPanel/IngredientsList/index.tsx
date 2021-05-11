import classes from "./ingredientsList.module.css";

const IngredientsList = (props: any) => {
  return (
    <div className={classes.container}>
      {props.list.map((x: any, value: any) => {
        return (
          <label>
            <input
              key={x}
              type="checkbox"
              name={"ingredientsPanelInput" + props.listNumber}
              value={value}
            ></input>
            {props.list[value]}
          </label>
        );
      })}
    </div>
  );
};

export default IngredientsList;
