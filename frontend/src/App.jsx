import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import {
  Home,
  Layout,
  // ProductList,
  // Details,
  // Cart,
  // News, 
  // Contact,
  // Register,
  // Login,
  // ProtectRoute,
  // Profile,
  // About,
  // Blog,
  // Offer,
  // Services,
  // Order,
  // Search,
} from "./screens";

// import {
//   LayoutList,
//   AdminProductList,
//   OrderList,
//   ProfileList,
//   Customers,
//   EditUser,
//   EditProductIndex,
//   CreateProductIndex,
//   Statistics,
// } from "./screens/Dashboard/pages";
import Billing from "./screens/Checkout";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  const [height, setHeight] = useState(0);
  return (
    <div>
      <Home />
    </div>
  );
}
