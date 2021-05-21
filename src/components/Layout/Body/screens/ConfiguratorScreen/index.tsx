import React, {useState} from "react";
import ConfigurationPanel from "./BierKonfigurator/Configuration/ConfigurationPanel";
import ConfigurationBottle from "./BierKonfigurator/Configuration/ConfigurationBottle";
import "./index.css";
import IngredientsList from "./BierKonfigurator/Configuration/ConfigurationPanel/IngredientsPanel/IngredientsList";

const ConfiguratorScreen = (props:any) => {

    const [currentOrder, setCurrentOrder]:any = useState([]);

    const onChange = (id: string, value: any) => {
        for (let i = 0; i <= currentOrder.length; i++) {
            if (id === currentOrder[i]["id"] && !value) {
                let updatedOrder = currentOrder;
                return setCurrentOrder(updatedOrder.splice(i));
            }
        }

        setCurrentOrder([...currentOrder, {
        id:id,
        value:value
        }]
    )}

    const onSubmit = () =>{
        props.setOrders(...props.orders, currentOrder)
    };

    return (
        <section>
            {/*content/data: The Ingredients List (the select fields of which the user can choose from)*/}
            <div className={"flex-wrapper"}>
                <ConfigurationPanel onChange={onChange} onSubmit={onSubmit}/>
                <ConfigurationBottle/>
            </div>
        </section>
    );
};

export default ConfiguratorScreen;
