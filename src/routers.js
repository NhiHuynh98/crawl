import React from "react";

import AuthRequired from "./layouts/Auth/AuthRequired";
import { Contract, ProductList, Url, Login, Crawl, Document, Dashboard, Home, ProductDetail, Order, Verify, Setting, Notification, ContractDetail, OrderDetails, Chat, Post } from "./pages";

const routes = [
  {
    path: "/",
    element: <AuthRequired />,
    children: [
      { path: "/", element: <Home />, breadcrumb: "Home" },
       {
        path: "/crawl",
        element: <Crawl />,
        breadcrumb: "Crawl Data"
      },
      {
        path: "/post-new",
        element: <Post />,
        breadcrumb: "Post news"
      },
      {
        path: "/upload",
        element: <Url />,
        breadcrumb: "Url"
      },
      { path: "/dashboard", element: <Dashboard />, breadcrumb: "Dashboard" },
      { path: "/document", element: <Document />, breadcrumb: "Document" },
      {
        path: "/product-list",
        element: <ProductList />,
        breadcrumb: "Product Listings"
      },
      {
        path: "/product-list/detail",
        element: <ProductDetail />,
        breadcrumb: "Product Detail"
      },
      {
        path: "/contract-bidding",
        element: <Contract />,
        breadcrumb: "Contract Bidding"
      },
       {
        path: "/contract-bidding/detail",
        element: <ContractDetail />,
        breadcrumb: "Contract Details"
      },
      {
        path: "/order-management",
        element: <Order />,
        breadcrumb: "Order Management"
      },

      {
        path: "/order-management/order-details",
        element: <OrderDetails />,
        breadcrumb: "Order Details"
      },
      {
        path: "/order-management/order-details/specific-chat",
        element: <Chat />,
        breadcrumb: "Order-Specific Chat"
      },
      {
        path: "/KYC-verification",
        element: <Verify />,
        breadcrumb: "KYC Verification"
      },
      {
        path: "/settings",
        element: <Setting />,
        breadcrumb: "Settings"
      },
      {
        path: "/notifications",
        element: <Notification />,
        breadcrumb: "Notifications"
      },
    ]
  },
  { path: "/login", element: <Login /> },
];

export default routes;
