import classes from "./ShoppingCart.module.css";
import React from "react";
import { Link } from "react-router-dom";

const ShoppingCart = (props: any) => {
  //todo send data of order to the backend to finish the transaction (+ lieferdetails)
  let content;
  const basePrice = 3;
  const orders = props.orders;
  const orders2 = [
    {
      items: [orders[0]],
      bottleSize: orders[1],
      bottleText: orders[2],
      bottleColor: orders[3],
    },
  ];

  const deliveryData = props.deliveryDetails;

  if (orders2[0] && orders2[0].bottleSize !== undefined) {
    const items = orders2[0].items;
    const order = orders2[0];
    let finalPrice: number = 0;

    //the order is sorted into groups of the same category
    const sortedItems = items.sort((a: any, b: any) =>
      a.category > b.category ? 1 : -1
    );
    console.log(sortedItems);
    let categories = sortedItems[0]
      .map((a: any) => a.categories)
      .map((e: any) =>
        e.filter((e: any) => e !== "Komponente" && e !== "Zutat")
      );
    let arr: any = [];
    for (let i = 0; i < categories.length; i++) {
      arr = arr.concat(categories[i]);
    }
    categories = arr.reduce((unique: any, item: any) => {
      return unique.includes(item) ? unique : [...unique, item];
    }, []);

    finalPrice = sortedItems[0].reduce(
      (a: number, b: any) => a + (b.price.amount || 0),
      0
    );

    //the order rendered in the form category -> items
    content = (
      <section>
        {categories.map((category: string, i: number) => {
          console.log(category);
          return (
            <div
              className={`${classes.cart}  ${classes.flex} ${classes.fd_column}`}
              key={`ShoppingCart-Category-${categories[i]}`}
            >
              <div className={`${classes.product_categories}`}>{category}</div>
              <div className={`${classes.seperator}`} />
              {sortedItems[0].map((item: any, i: number) => {
                console.log(item);
                if (item.categories.includes(category)) {
                  return <div key={`ShoppingCart-Item-${i}`}>{item.title}</div>;
                }
              })}
            </div>
          );
        })}
      </section>
    );

    return (
      <div className={classes.container}>
        {content}
        <hr />
        <section className={`${classes.flex} ${classes.fd_column}`}>
          <div
            className={`${classes.cart} ${classes.flex} ${classes.fd_column}`}
          >
            <div className={`${classes.product_categories}`}>Bierflasche</div>
            <div className={`${classes.seperator}`} />
            <div className={`${classes.product_title}`}>
              Farbe: {order.bottleColor}
            </div>
            <div className={`${classes.product_title}`}>
              Größe: {order.bottleSize}
            </div>
            <div className={`${classes.product_title}`}>
              Text:{" "}
              {order.bottleText ? (
                order.bottleText
              ) : (
                <span style={{ color: "#aaa", fontStyle: "italic" }}>
                  [ohne Text]
                </span>
              )}
            </div>
          </div>
        </section>
        <hr />
        <p>
          Der Gesamtpreis beträgt: {`${(finalPrice + basePrice).toFixed(2)}  €`}
        </p>

        {deliveryData.length > 0 ? (
          <button
            className={`${classes.submitButton}`}
            onClick={() => {
              props.changeShowSuccess();
              setTimeout(function () {
                window.location.href = "/";
              }, 4500);
            }}
          >
            Jetzt kaufen!
          </button>
        ) : (
          <Link to={"/delivery"}>
            <button className={classes.linkButton}>
              Lieferdetails hinzufügen
            </button>
          </Link>
        )}
      </div>
    );
  } else {
    content = <p>Noch keine Artikel im Warenkorb.</p>;

    return <div className={classes.container}>{content}</div>;
  }
};

export default ShoppingCart;
