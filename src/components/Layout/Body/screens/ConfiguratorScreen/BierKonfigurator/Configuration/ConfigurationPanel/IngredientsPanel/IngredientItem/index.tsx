import {useState} from "react";


const IngredientItem = (props: any) => {

    const [value, setValue] = useState(false);

    if (props.resetValue) {
        setValue(false);
    }

    return (
        <label key={props.id}>
            <input
                type="checkbox"
                name={"ingredientsPanelInput" + props.listNumber}
                checked={value}
                onChange={() => {
                    props.onChange(props.id, !value);
                    setValue(!value);
                }}
            />
            {props.title}
        </label>
    )
};

export default IngredientItem;