import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //for BEM naming convention change App->app
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
           {/*<h1>We are in the search page</h1>*/}
           <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
