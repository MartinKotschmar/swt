const sum = (order: any) => {
  let sum = 0;
  for (let i = 0; i < order.length; i++) {
    sum += order[i].price;
  }
  return sum;
};

const ShoppingCart = (props: any) => {
  let order = props.getOrder();
  console.log(order);

  const content =
    order.length > 0 ? (
      <ul>
        {props.orders[0].map((items: any, i: number) => {
          return (
            <li>
              <h5>{items.title}</h5>
              <p>Amount: {items.amount}</p>
              <p>Preis: {items.price}</p>
            </li>
          );
        })}
      </ul>
    ) : (
      <h4>Es befinden sich noch keine Artikel im Warenkorb</h4>
    );

  let finalPrice = order[0] ? sum(order[0]) : 0;

  console.log(order);

  return (
    <div>
      <h2>Einkaufswagen</h2>
      <div>
        {content}
        {/* 
        <h4>Produkttitel</h4>

        <p>
          <span>Anzahl Flaschen (Größe der Flaschen)</span>
          <span>Menge (in l)</span>
          <span>Preis (Produkt)</span>
        </p>
        <button> - (Produkt löschen)</button> */}
      </div>
      <h4>Gesamtpreis: {finalPrice + " €"}</h4>
    </div>
  );
};

export default ShoppingCart;
