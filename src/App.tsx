import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import Overview from "./components/pages/Overview/Overview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            <Overview />
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
