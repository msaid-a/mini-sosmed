import React from "react";
import './lib/styles/tailwind.css'


import { ROUTE_PATH } from "./Route/index";
import {AsyncPage, Layout} from './Component'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

const { HOME, DETAIL_USER } = ROUTE_PATH;


const ROUTES = [
  { path: HOME, exact: true, page: "Main" },
  { path: DETAIL_USER, exact: true, page: "Detail" },
  
];

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {ROUTES.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={() => <AsyncPage page={route.page}  />}
            />
          ))}
          <Route render={() => <p>Not Found</p>} />
        </Switch>
      </Layout>
  </Router>
  );
}

export default App;
