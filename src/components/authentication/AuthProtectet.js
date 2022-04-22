import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../header/Header";

const AuthProtectet = ({allowedRole}) => {
  const userData = JSON.parse(localStorage.getItem("data"));
  console.log(userData.roles);
  const { auth } = useAuth();
  const location = useLocation();
  return userData.roles===allowedRole ? (
    <>
      <Header/>
      <Outlet />
    </>
  ) : userData.jwt ? <Navigate to='/unauthorized' state = {{from: location}} replace/>:(
    <Navigate to="/login" state={{from: location}} replace />
  ); 
};

export default AuthProtectet;
