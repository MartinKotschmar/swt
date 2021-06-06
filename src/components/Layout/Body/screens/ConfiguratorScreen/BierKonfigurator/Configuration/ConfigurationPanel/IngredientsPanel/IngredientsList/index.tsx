import classes from "./ingredientsList.module.css";
import IngredientItem from "../IngredientItem";
import {useState} from "react";

const IngredientsList = (props: any) => {
    const [radioValue, setRadioValue] = useState("");

    const updateRadioValue = (newValue: string) => {
        setRadioValue(newValue);
    };

    return (
        <div className={`${classes.container} ${classes.ingredientList}`}>
            {props.ingredients.map((element: any, i: number) => {
                let setType = "checkbox";
                if (element.categories.includes("Komponente")) {
                    setType = "radio";
                }
                const category = element.categories.filter((e: any) => e !== 'Komponente' && e !== 'Zutat');
                const key = "Ingredient_" + category + "_" + i;

                return (
                    <IngredientItem
                        name={setType === "radio" ? category[0] : ""}
                        updateRadioValue={updateRadioValue}
                        value={(setType === "radio" && radioValue === key)}
                        key={key}
                        itemKey={key}
                        setType={setType}
                        id={element.id}
                        title={element.title}
                        categories={element.categories}
                        price={element.price}
                        onChange={props.onChange}
                        resetValues={props.resetValues}
                    />
                );
            })}
        </div>
    );
};
export default IngredientsList;
