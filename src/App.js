import React from "react";

import "../src/App.less";
import "../src/fontawesome";

import { RouterProvider } from "react-router-dom";
import routes from "./routers";
import Breadcrumbs from "./helper/breadcrumb";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes
} from "react-router-dom";

const AppRoutes = () => {
  return useRoutes(routes);
};

const App = () => {
  // return <RouterProvider router={router} />;
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
