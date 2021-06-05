import MainHeader from "./components/Layout/Header/MainHeader";
import {Link, Route, Switch} from "react-router-dom";
import ConfiguratorScreen from "./components/Layout/Body/screens/ConfiguratorScreen";
import Datenschutzerklaerung from "./components/Layout/Body/screens/Datenschutzerklärung";
import Lieferung
    from "./components/Layout/Body/screens/ConfiguratorScreen/BierKonfigurator/Configuration/DeliveryDetails";
import Impressum from "./components/Layout/Body/screens/Impressum";
import ShoppingCart from "./components/Layout/Body/screens/ShoppingCart";
import AgeCheckModal from "./components/Layout/Body/overlays/AgeCheckModal";
import React, {Fragment, useEffect, useState} from "react";
import Footer from "./components/Layout/Footer";
import ShoppingCart from "./components/Layout/Body/screens/ShoppingCart";
import classes from "./Wrapper.module.css";

const Wrapper = () => {
  const [update, doUpdate] = useState(true);
  let orders: any = [];

    // let orders: any = [];
    const [orders, setOrders]: any = useState([]);

    const updateOrders = (newOrder: any) => {
        setOrders([...orders, [newOrder]]);
    };

    const getOrder = () => {
        return orders;
    }

    useEffect(() => {
        return getOrder();
    })

    return (
        <Fragment>
            <MainHeader/>

            <div className={`${classes.pageWrapper}`}>
                <Switch>
                    <Route path="/" exact>
                        <ConfiguratorScreen updateOrders={updateOrders}/>
                    </Route>
                    <Route path="/beer-configurator/:stepId">
                        <ConfiguratorScreen orders={orders} updateOrders={updateOrders}/>
                    </Route>
                    <Route path="/privacy-policy" exact>
                        <Datenschutzerklaerung/>
                    </Route>
                    <Route path="/imprint" exact>
                        <Impressum/>
                    </Route>
                    <Route path="/shopping-cart" exact>
                        <ShoppingCart orders={orders}/>
                    </Route>
                    <Route path="/delivery" exact>
                        <Lieferung/>
                    </Route>
                </Switch>

                <AgeCheckModal active={false}/>
            </div>

            <Footer/>
        </Fragment>
    );
};

export default Wrapper;
