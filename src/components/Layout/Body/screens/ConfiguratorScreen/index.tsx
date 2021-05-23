import React, {FunctionComponent, useState} from "react";
import ConfigurationPanel from "./BierKonfigurator/Configuration/ConfigurationPanel";
import ConfigurationBottle from "./BierKonfigurator/Configuration/ConfigurationBottle";
import "./index.css";

const ConfiguratorScreen = (props: any) => {

    const [currentOrder, setCurrentOrder]: any = useState([]);

    //todo Problem: The state of currentOrder doesn't get updated after setCurrentOrder is called
    //to test: click a checkbox of the ingredientlist, afterwards the state of currentOrder is logged to the console. Since the order is still empty after clicking a second checkbox
    // -> setCurrentOrder wasn't invoked correctly in onChange (component where function is called: IngredientItem)
    //todo same thing happening to the other functions with the same principle of forwarding using props

    const onChange = (id: string, value: any) => {
        console.log(currentOrder);

        //check if item already exists in currentOrder
        if (currentOrder.length > 0) {
            for (let i = 0; i <= currentOrder.length; i++) {
                if (id === currentOrder[i]["id"]) {
                    let updatedOrder = currentOrder;
                    return setCurrentOrder(updatedOrder.splice(i));
                }

            }
        }

        //add item to currentOrder
        return setCurrentOrder((prevCurrentOrder: any) => {
                return [...prevCurrentOrder, {
                    id: id,
                    value: value
                }]
            }
        );
    }

    /*
        the order-list needs to be sent to the backend to be processed
        the user should be forwarded to the shopping cart, where a processed list should be rendered
        (to inform the user what he has in the shopping cart / overview)
        afterwards the user should have the possibility of: (maybe buttons from which the user can choos)
          1. deleting items from the shopping cart (update order)
          2. finishing the order
          3. create more items (reset states)
        */
    const onSubmit = () => {
        props.setOrders(...props.orders, currentOrder);
        return setCurrentOrder([]);
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
