import React from 'react';
import {Switch, Route, Link, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Main from './containers/Main'
import Dashboard from "./containers/Dashboard";

function App() {
  return (
    <React.Fragment>

      <Router>
        <Link to="/">Dashboard</Link>
        <Switch>
          <Route path="/">
            <Main/>
          </Route>
          <Route path="/dashboard">
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
