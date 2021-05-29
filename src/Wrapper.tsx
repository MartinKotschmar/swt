import MainHeader from "./components/Layout/Header/MainHeader";
import { Link, Route, Switch } from "react-router-dom";
import ConfiguratorScreen from "./components/Layout/Body/screens/ConfiguratorScreen";
import Datenschutzerklaerung from "./components/Layout/Body/screens/Datenschutzerklärung";
import Lieferung from "./components/Layout/Body/screens/ConfiguratorScreen/BierKonfigurator/Configuration/DeliveryDetails";
import Impressum from "./components/Layout/Body/screens/Impressum";
import AgeCheckModal from "./components/Layout/Body/overlays/AgeCheckModal";
import React, { Fragment, useState } from "react";

const Wrapper = () => {
  const [orders, setOrders] = useState([]);

  return (
    <Fragment>
      <MainHeader />
      <Switch>
        <Route path="/beer-configurator/:stepId">
          <ConfiguratorScreen orders={orders} setOrders={setOrders} />
        </Route>
        <Route path="/data-protection" exact>
          <Datenschutzerklaerung />
        </Route>
        <Route path="/imprint" exact>
          <Impressum />
        </Route>
      </Switch>
      <div className="PageWrapper">
        <AgeCheckModal active={true} />
        <div className="footer">
          <div className="banner" />
          <div className="nav-footer">
            <Link to="/imprint">Impressum</Link>
            <Link to="/data-protection">Datenschutzerklärung</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Wrapper;
