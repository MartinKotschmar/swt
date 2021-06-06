import React from "react";
import ConfigurationPanel from "./BierKonfigurator/Configuration/ConfigurationPanel";
import ConfigurationBottle from "./BierKonfigurator/Configuration/ConfigurationBottle";
import "./index.css";

type orderItem = {
  id: string;
  value: any;
  price: number;
  title: string;
  categories: any;
};

const ConfiguratorScreen = (props: any) => {
  let currentOrder: orderItem[] = [];
  let size: string = "0,5L";
  let enteredText: string = "";
  let color: string = "braun";

  const onChange = (props: any, value: any) => {
    const { id, price, title, categories } = props;

    //check if item already exists in currentOrder
    if (currentOrder.length > 0) {
      for (let i = 0; i < currentOrder.length; i++) {
        if (id === currentOrder[i].id) {
          return currentOrder.splice(i, 1);
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
      },
    ];
    return currentOrder;
  };

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
    const data = [currentOrder, size, enteredText, color];
    props.updateOrders(data);
    currentOrder = [];
    return currentOrder;
  };

  const onBottleChange = (props: any) => {
    if (props.size !== size) return (size = props.size);
    if (props.enteredText !== enteredText)
      return (enteredText = props.enteredText);
    if (props.color !== color) return (color = props.color);
  };

  return (
    <section>
      {/*content/data: The Ingredients List (the select fields of which the user can choose from)*/}
      <div className={"flex-wrapper"}>
        <ConfigurationPanel onChange={onChange} onSubmit={onSubmit} />
        <ConfigurationBottle onBottleChange={onBottleChange} />
      </div>
    </section>
  );
};

export default ConfiguratorScreen;
