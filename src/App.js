import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";
import Team from "./pages/Team";
import Messages from "./pages/Messages";
import Support from "./pages/Support";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
    return (
        <>
            <Router>
                <Navbar setSidebar={setSidebar} sidebar = {sidebar}/>
                <Switch>
                    <Route path="/" exact render={() => <Home sidebar={sidebar} />} />
                    <Route path="/reports"  render={() => <Reports sidebar={sidebar} />} />
                    <Route path="/products" render={() => <Products sidebar={sidebar} />} />
                    <Route path="/team" render={() => <Team sidebar={sidebar} />} />
                    <Route path="/messages" render={() => <Messages sidebar={sidebar} />} />
                    <Route path="/support" render={() => <Support sidebar={sidebar} />} />
                </Switch>
            </Router>
        </>
    );
};

export default App;
