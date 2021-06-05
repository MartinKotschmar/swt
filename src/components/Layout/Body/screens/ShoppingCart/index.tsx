import classes from "./ShoppingCart.module.css";
import React from "react";

const ShoppingCart = (props: any) => {

    let isOrder = props.orders.length > 0;
    let content;

    if (isOrder) {
        const items = props.orders[0].items;
        const order = props.orders[0];
        let finalPrice: number = 0;

        //the order is sorted into groups of the same category
        const sortedItems = items.sort((a: any, b: any) => (a.category > b.category) ? 1 : -1);
        const categories = sortedItems.map((a: any) => a.category).map((category: string) => {
            return sortedItems.find((a: any) => a.category === category)
        });

        finalPrice = sortedItems.reduce((a: number, b: any) => a + (b.price.amount || 0), 0);

        console.log(items);
        console.log(sortedItems);
        //the order rendered in the form category -> items
        content = <section>
            {categories.map((category: string, i: number) => {
                return (<div className={`${classes.cart}  ${classes.flex} ${classes.fd_column}`}
                             key={`ShoppingCart-Kategory-${categories[i]}`}>
                    <div className={`${classes.product_categories}`}>{category}</div>
                    <div className={`${classes.seperator}`}/>
                    {sortedItems.map((item: any, i: number) => <div key={`ShoppingCart-Item-${i}`}>{item.title}</div>
                    )}
                </div>)
            })}
        </section>;

        return (
            <div className={classes.container}>
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
                <hr/>
                <section>
                    <div className={`${classes.cart}  ${classes.flex} ${classes.fd_column}`}>
                        <div className={`${classes.product_categories}`}>Bierflasche</div>
                        <div className={`${classes.seperator}`}/>
                        <div className={`${classes.product_title}`}>Farbe: {order.bottleColor}</div>
                        <div className={`${classes.product_title}`}>Größe: {order.bottleSize}</div>
                        <div className={`${classes.product_title}`}>Text: {order.bottleText}</div>
                    </div>
                </section>
                <hr/>
                <p>Der Gesamtbetrag beträgt: {finalPrice + " €"}</p>

                <button>Jetzt kaufen!</button>
            </div>
        );
    } else {
        content = <p>Noch keine Artikel im Warenkorb.</p>

        return (
            <div className={classes.container}>
                {content}
            </div>)
    }
};

export default ShoppingCart;
