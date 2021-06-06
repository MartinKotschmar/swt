import React from "react";
import ConfigurationPanel from "./BierKonfigurator/Configuration/ConfigurationPanel";
import ConfigurationBottle from "./BierKonfigurator/Configuration/ConfigurationBottle";
import "./index.css";

type orderItem = {
    id: string,
    value: any,
    price: number,
    title: string,
    categories: any,
    name: string
};


const ConfiguratorScreen = (props: any) => {

    let currentOrder: orderItem[] = [];
    let size: string = '0,5L';
    let enteredText: string = '';
    let color: string = 'braun';


    const onChange = (props: any, value: any) => {
        const {id, price, title, categories, name} = props;

        //check if item already exists in currentOrder
        if (currentOrder.length > 0) {
            for (let i = 0; i < currentOrder.length; i++) {
                if (id === currentOrder[i].id) {
                    return currentOrder.splice(i, 1);
                }

                if (name !== "" && name === currentOrder[i].name) {
                    console.log(name);
                    currentOrder.splice(i, 1);
                }

            }
        }

        //add item to currentOrder
        currentOrder = [
            ...currentOrder,
            {
                id: id,
                value: value,
                price: price,
                title: title,
                categories: categories,
                name: name
            },
        ];
        console.log(currentOrder);
        return currentOrder;
    };

    const onSubmit = () => {
        const data = [currentOrder, size, enteredText, color]
        props.updateOrders(data);
        currentOrder = [];
        return currentOrder;
    };

    const onBottleChange = (props: any) => {
        if (props.size !== size) return size = props.size;
        if (props.enteredText !== enteredText) return enteredText = props.enteredText;
        if (props.color !== color) return color = props.color;
    }

    return (
        <section>
            {/*content/data: The Ingredients List (the select fields of which the user can choose from)*/}
            <div className={"flex-wrapper"}>
                <ConfigurationPanel onChange={onChange} onSubmit={onSubmit}/>
                <ConfigurationBottle onBottleChange={onBottleChange}/>
            </div>
        </section>
    );
};

export default ConfiguratorScreen;
