import classes from "./ShoppingCart.module.css";
import React from "react";

const ShoppingCart = (props: any) => {

    let isOrder = props.orders.length > 0;

    const order = props.orders[0];


    let content;
    if (isOrder) {
        //the order is sorted into groups of the same category
        const sortedArray = order.sort((a: any, b: any) => (a.category > b.category) ? 1 : -1);

        const categories = sortedArray.map((a: any) => a.foo);

        console.log(order);
        console.log(sortedArray);
        //the order rendered in the form category -> items
        content = <section>
            {categories.map((category: string) => {
                return (<div className={`${classes.cart}  ${classes.flex} ${classes.fd_column}`} key={Math.random()}>
                    <div className={`${classes.product_categories}`}>{category}</div>
                    <div className={`${classes.seperator}`}/>
                    {sortedArray.map((item: any) => {
                        <div className={`${classes.product_title}`} key={Math.random()}>{item.title}</div>
                    })
                    }
                </div>)
            })}
        </section>;

    } else {
        content = <p>Noch keine Artikel im Warenkorb.</p>
    }

    return (
        <div>
            {/*<h2>Einkaufswagen</h2>*/}
            {/*<div>*/}
            {/*  <h4>Produkttitel</h4>*/}
            {/*  <p>*/}
            {/*    <span>Anzahl Flaschen (Größe der Flaschen)</span>*/}
            {/*    <span>Menge (in l)</span>*/}
            {/*    <span>Preis (Produkt)</span>*/}
            {/*  </p>*/}
            {/*  <button> - (Produkt löschen)</button>*/}
            {/*</div>*/}
            {/*<h4>Gesamtpreis</h4>*/}
            {content}
        </div>
    );
};

export default ShoppingCart;
