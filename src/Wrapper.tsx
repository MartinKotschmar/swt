import MainHeader from "./components/Layout/Header/MainHeader";
import {Route, Switch} from "react-router-dom";
import ConfiguratorScreen from "./components/Layout/Body/screens/ConfiguratorScreen";
import Datenschutzerklaerung from "./components/Layout/Body/screens/Datenschutzerklärung";
import Lieferung
    from "./components/Layout/Body/screens/ConfiguratorScreen/BierKonfigurator/Configuration/DeliveryDetails";
import Impressum from "./components/Layout/Body/screens/Impressum";
import ShoppingCart from "./components/Layout/Body/screens/ShoppingCart";
import AgeCheckModal from "./components/Layout/Body/overlays/AgeCheckModal";
import React, {Fragment, useEffect, useState} from "react";
import Footer from "./components/Layout/Footer";
import classes from "./Wrapper.module.css";
import Banner from "./components/Layout/Body/overlays/Banner";

const Wrapper = () => {

    const [orders, setOrders]: any = useState([]);
    const [showSuccess, setShowSuccess] = useState(false);

    const updateOrders = (props: any) => {
        console.log(props);
        setOrders(props);
    };

    const changeShowSuccess = () => {
        setShowSuccess(!showSuccess);
    }


    return (
        <Fragment>
            <Banner type={'success'} visibility={showSuccess}/>
            <MainHeader/>

            <div className={`${classes.pageWrapper}`}>
                <Switch>
                    <Route path="/" exact>
                        <ConfiguratorScreen updateOrders={updateOrders}/>
                    </Route>
                    <Route path="/beer-configurator/:stepId">
                        <ConfiguratorScreen updateOrders={updateOrders}/>
                    </Route>
                    <Route path="/privacy-policy" exact>
                        <Datenschutzerklaerung/>
                    </Route>
                    <Route path="/imprint" exact>
                        <Impressum/>
                    </Route>

                    <Route path="/shopping-cart" exact>
                        <ShoppingCart orders={orders} changeShowSuccess={changeShowSuccess}/>
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
