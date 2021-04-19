// grau: #444444
// darkgray: #222222
// primary-orange: #DA7817


import './App.css';

function App() {
    return (
        <div className="App">
            <div className="PageWrapper">
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
                        <a href="#">Impressum</a>
                        <a href="#">Datenschutzerklärung</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
