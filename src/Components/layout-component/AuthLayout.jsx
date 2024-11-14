import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <h2>AuthLayout</h2>
      <Outlet></Outlet>
    </div>
  );
}
