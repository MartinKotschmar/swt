import {useEffect, useState} from "react";


const IngredientItem = (props: any) => {

    const [value, setValue] = useState(false);

if(props.resetValues){
    setValue(false);

}

    return (
        <label key={props.id}>
            <input
                type="checkbox"
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