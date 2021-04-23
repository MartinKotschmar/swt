// grau: #444444
// darkgray: #222222
// primary-orange: #DA7817

import './App.css';
import {Link, Route} from 'react-router-dom';
import MainHeader from "./components/Layout/Header/MainHeader";
import ConfiguratorScreen from "./components/Layout/Body/screens/ConfiguratorScreen";
import Datenschutzerklaerung from "./components/Layout/Body/screens/Datenschutzerklärung";
import Impressum from "./components/Layout/Body/screens/Impressum";

function App() {
    return (
        <div className="App">
            <Route path='bier-konfigurator'>
                <ConfiguratorScreen/>
            </Route>
            <Route path='datenschutzerklärung'>
                <Datenschutzerklaerung/>
            </Route>
            <Route path='impressum'>
                <Impressum/>
            </Route>

            <div className="PageWrapper">
                <MainHeader/>
                <div className="header">
                    <div className="logo"/>
                    <div className="navigation">
                        <a href="#">Bierkonfigurator</a>
                        <a href="#">Top Biere</a>
                        <a href="#">Login</a>
                        <a href="#">Warenkorb</a>
                    </div>
                </div>
                <div className="body">
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
                </div>
                <div className="footer">
                    <div className="banner"/>
                    <div className="nav-footer">
                        <Link to='/impressum'>Impressum</Link>
                        <Link to='/datenschutzerklärung'>Datenschutzerklärung</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
