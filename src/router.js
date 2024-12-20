import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthRequired from "./layouts/Auth/AuthRequired";
import Home from "./pages/Home/Home"; 
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import Document from "./pages/Document/Document";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRequired />,
    children: [
      { path: "", element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
  {path: "/document", element: <Document/>},
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> },
]);
