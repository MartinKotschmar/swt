import MainHeader from "./components/Layout/Header/MainHeader";
import {Link, Route, Switch} from "react-router-dom";
import ConfiguratorScreen from "./components/Layout/Body/screens/ConfiguratorScreen";
import Datenschutzerklaerung from "./components/Layout/Body/screens/Datenschutzerklärung";
import Impressum from "./components/Layout/Body/screens/Impressum";
import AgeCheckModal from "./components/Layout/Body/overlays/AgeCheckModal";
import React, {Fragment, useState} from "react";


const Wrapper = () => {

    const [orders, setOrders] = useState([]);

    return (
        <Fragment>
            <MainHeader/>
            <Switch>
                <Route path="/beer-configurator/:stepId">
                    <ConfiguratorScreen orders={orders} setOrders={setOrders}/>
                </Route>
                <Route path="/data-protection" exact>
                    <Datenschutzerklaerung/>
                </Route>
                <Route path="/imprint" exact>
                    <Impressum/>
                </Route>
            </Switch>
            <div className="PageWrapper">
                <AgeCheckModal active={false}/>
                {/*<div className="header">
                    <div className="logo"/>
                    <div className="navigation">
                        <a href="#">Bierkonfigurator</a>
                        <a href="#">Top Biere</a>
                        <a href="#">Login</a>
                        <a href="#">Warenkorb</a>
                    </div>
                </div>*/}
                {/*<div className="body">
                    <div className="bierkonfigurator">
                        <h2>BierKonfigurator</h2>
                        <div className="bierkonfigurator-panel">
                            <div className="fortschrittsbalken"/>
                            <div className="auswahldingsi">
                                <div className="auswahl-panel"/>
                                <div className="auswahl-flasche"/>
                            </div>
                        </div>

                    </div>
                </div>*/}
                <div className="footer">
                    <div className="banner"/>
                    <div className="nav-footer">
                        <Link to="/imprint">Impressum</Link>
                        <Link to="/data-protection">Datenschutzerklärung</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Wrapper;