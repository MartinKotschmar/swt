import {useState} from "react";
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
                type="checkbox"
                checked={value}
                onChange={() => {
                    props.onChange(props.id, !value);
                    setValue(!value);
                }}
            />
            <span className={`${classes.checkmark}`}/>
        </label>
    )
};

export default IngredientItem;