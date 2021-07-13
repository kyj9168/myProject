import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Products from "./pages/Products";
import Team from "./pages/Team";
import Messages from "./pages/Messages";
import Support from "./pages/Support";

const App = () => {
    const [sidebar, setSidebar] = useState(true);

    const [selectMenu, setSelectMenu] = useState(window.location.pathname);
    return (
        <>
            <Router>
                <Navbar
                    setSidebar={setSidebar}
                    sidebar={sidebar}
                    selectMenu={selectMenu}
                    setSelectMenu={setSelectMenu}
                />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => <Home sidebar={sidebar} />}
                    />
                    <Route
                        path="/chat"
                        render={() => <Chat sidebar={sidebar} />}
                    />
                    <Route
                        path="/products"
                        render={() => <Products sidebar={sidebar} />}
                    />
                    <Route
                        path="/team"
                        render={() => <Team sidebar={sidebar} />}
                    />
                    <Route
                        path="/messages"
                        render={() => <Messages sidebar={sidebar} />}
                    />
                    <Route
                        path="/support"
                        render={() => <Support sidebar={sidebar} />}
                    />
                </Switch>
            </Router>
        </>
    );
};

export default App;
