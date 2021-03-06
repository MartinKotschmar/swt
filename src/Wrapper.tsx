import MainHeader from "./components/Layout/Header/MainHeader";
import { Link, Route, Switch } from "react-router-dom";
import ConfiguratorScreen from "./components/Layout/Body/screens/ConfiguratorScreen";
import Datenschutzerklaerung from "./components/Layout/Body/screens/Datenschutzerkl√§rung";
import Lieferung from "./components/Layout/Body/screens/ConfiguratorScreen/BierKonfigurator/Configuration/DeliveryDetails";
import Impressum from "./components/Layout/Body/screens/Impressum";
import ShoppingCart from "./components/Layout/Body/screens/ShoppingCart";
import AgeCheckModal from "./components/Layout/Body/overlays/AgeCheckModal";
import React, { Fragment, useEffect, useState } from "react";
import Footer from "./components/Layout/Footer";
import classes from "./Wrapper.module.css";
import Banner from "./components/Layout/Body/overlays/Banner";
import DeliveryDetails from "./components/Layout/Body/screens/ConfiguratorScreen/BierKonfigurator/Configuration/DeliveryDetails";

const Wrapper = () => {
  const [orders, setOrders]: any = useState([]);
  const [deliveryDetails, setDeliveryDetails] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const updateOrders = (props: any) => {
    setOrders(props);
  };

  const changeShowSuccess = () => {
    setShowSuccess(!showSuccess);
  };

  const updateDeliveryDetails = (props: any) => {
    setDeliveryDetails(props);
  };

  const updateUserInput = (props: any) => {};

  return (
    <Fragment>
      <Banner id="banner" type={"success"} visibility={showSuccess} />
      <MainHeader />

      <div className={`${classes.pageWrapper}`}>
        <Switch>
          <Route path="/" exact>
            <ConfiguratorScreen updateOrders={updateOrders} />
          </Route>
          <Route path="/beer-configurator/:stepId">
            <ConfiguratorScreen
              updateOrders={updateOrders}
              updateDeliveryDetails={updateDeliveryDetails}
            />
          </Route>
          <Route path="/privacy-policy" exact>
            <Datenschutzerklaerung />
          </Route>
          <Route path="/imprint" exact>
            <Impressum />
          </Route>

          <Route path="/shopping-cart" exact>
            <ShoppingCart
              orders={orders}
              changeShowSuccess={changeShowSuccess}
              deliveryDetails={deliveryDetails}
            />
          </Route>
        </Switch>

        <AgeCheckModal active={true} />
      </div>

      <Footer />
    </Fragment>
  );
};

export default Wrapper;
