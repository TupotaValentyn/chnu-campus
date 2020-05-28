import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import campusRoutes from "./components/routing/capmpusRoutes";
import { campusItemsRoutesWithProps } from "./components/routing/campusItemsRoutes";
import CampusItem from "./components/common/CampusItem/CampusItem";
import Header from "./components/common/Header";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Switch>
            {campusRoutes.map((route, index) => {
              return <Route key={`campus-${route.path}`} {...route} />
            })}

            {campusItemsRoutesWithProps.map((route: any, index: any) => {
              return <Route key={`campus-item-${route.path}`} render={(props) => {
                const routeMatchProps = campusItemsRoutesWithProps
                  .find((matchRoute: any) => matchRoute.path === props.location.pathname);
                const routeProps = routeMatchProps || route;
                return <CampusItem {...routeProps.props}/>
              }
              }/>
            })}
          </Switch>

        </BrowserRouter>
      </div>
    </MuiThemeProvider>

  );
}

export default App;
