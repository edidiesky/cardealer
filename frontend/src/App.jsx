import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import {
  Home,
  Layout,
  ProductList,
  Details,
  Cart,
  News,
  Contact,
  Register,
  Login,
  ProtectRoute,
  Profile,
  About,
  Blog,
  Offer,
  Services,
  Order,
  Search,
} from "./screens";

import {
  LayoutList,
  AdminProductList,
  OrderList,
  ProfileList,
  Customers,
  EditUser,
  EditProductIndex,
  CreateProductIndex,
  Statistics,
} from "./screens/Dashboard/pages";
import Billing from "./screens/Checkout";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  const [height, setHeight] = useState(0);
  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={"car-dealership/cars/:id"} element={<Details />} />
          <Route path={"car-dealership/inventory"} element={<ProductList />} />
          <Route path={"car-dealership/cart/:id"} element={<Cart />} />
          <Route path={"car-dealership/cart"} element={<Cart />} />
          <Route path={"car-dealership/about"} element={<About />} />
          <Route path={"car-dealership/contact"} element={<Contact />} />
          <Route path={"car-dealership/latest-offers"} element={<Offer />} />
          <Route path={"car-dealership/auth/login"} element={<Login />} />
          <Route path={"car-dealership/auth/register"} element={<Register />} />
          <Route
            path={"car-dealership/profile"}
            element={
              <ProtectRoute>
                <Profile />
              </ProtectRoute>
            }
          />
          <Route
            path={":id/order"}
            element={
              <ProtectRoute>
                <Order />
              </ProtectRoute>
            }
          />
        </Route>

        <Route
          path={"/car-dealership/dashboard"}
          element={
            <ProtectRoute>
              <LayoutList />
            </ProtectRoute>
          }
        >
          <Route exact path={"order"} element={<OrderList />} />

          <Route exact path={"customer"} element={<Customers />} />
          <Route exact path={"profile"} element={<ProfileList />} />
          <Route
            exact
            path={"create-product"}
            element={<CreateProductIndex />}
          />

          <Route exact path={"customer/:id"} element={<EditUser />} />

          <Route exact path={"product/:id"} element={<EditProductIndex />} />
          <Route exact index element={<AdminProductList />} />
        </Route>
      </Routes>
    </div>
  );
}
