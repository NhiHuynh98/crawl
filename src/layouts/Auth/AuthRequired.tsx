import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Main from "../Main";

const AuthRequired = () => {
  const isAuthenticated = !!localStorage.getItem("authToken")


  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Main>
      <Outlet/>
    </Main>
  );
};

export default AuthRequired;
