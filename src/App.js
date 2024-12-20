import React from "react";

import "../src/App.less";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
