import MainHeader from "./components/Layout/Header/MainHeader";
import { Link, Route, Switch } from "react-router-dom";
import ConfiguratorScreen from "./components/Layout/Body/screens/ConfiguratorScreen";
import Datenschutzerklaerung from "./components/Layout/Body/screens/Datenschutzerklärung";
import Impressum from "./components/Layout/Body/screens/Impressum";
import ShoppingCart from "./components/Layout/Body/screens/ShoppingCart";
import AgeCheckModal from "./components/Layout/Body/overlays/AgeCheckModal";
import React, { Fragment, useState } from "react";

const Wrapper = () => {
  const [update, doUpdate] = useState(true);
  let orders: any = [];

  const updateOrders = (newOrder: any) => {
    orders = [...orders, [newOrder]];
    console.log(orders);
  };

  const getOrder = () => {
    console.log(orders);
    return orders;
  };

  return (
    <Fragment>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <ConfiguratorScreen orders={orders} updateOrders={updateOrders} />
        </Route>
        <Route path="/beer-configurator/:stepId">
          <ConfiguratorScreen
            orders={orders}
            updateOrders={updateOrders}
            update={update}
            doUpdate={doUpdate}
          />
        </Route>
        <Route path="/privacy-policy" exact>
          <Datenschutzerklaerung />
        </Route>
        <Route path="/imprint" exact>
          <Impressum />
        </Route>
        <Route path="/shopping-cart" exact>
          <ShoppingCart getOrder={getOrder} />
        </Route>
      </Switch>
      <div className="PageWrapper">
        <AgeCheckModal active={false} />
        <div className="footer">
          <div className="banner" />
          <div className="nav-footer">
            <Link to="/imprint">Impressum</Link>
            <Link to="/privacy-policy">Datenschutzerklärung</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Wrapper;
