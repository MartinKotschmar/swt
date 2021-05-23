import classes from "./ingredientsList.module.css";
import IngredientItem from "../IngredientItem";

const IngredientsList = (props: any) => {

        return (
            <div className={classes.container}>
                {props.ingredients.map((element: any) => {
                    return (
                        <IngredientItem key={"Ingredient_" + element.id} id={element.id} title={element.title}
                                        onChange={props.onChange} resetValues={props.resetValues}/>
                    );
                })}
            </div>
        );
    }
;

export default IngredientsList;
