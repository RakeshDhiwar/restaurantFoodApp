import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//Store and provider
import { Provider } from "react-redux";
import Store from "./store/Store.js";

//pages
import Layout from "./compponents/Layout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./compponents/Register.jsx";

//menupages
import Menu from "./pages/Menu.jsx";
import Beverages from "./pages/Beverages.jsx";
import Breakfast from "./pages/Breakfast.jsx";
import Snacks from "./pages/Snacks.jsx";
import LunchDinner from "./pages/LunchDinner.jsx";
import Desserts from "./pages/Desserts.jsx";
import Special from "./pages/Special.jsx";

import Order from "./pages/Order.jsx";
import Admin from "./pages/Admin.jsx";
import Home from "./pages/Home";

import AddFoodForm from "./pages/AddFoodForm.jsx"
import UpdateFoodForm from "./pages/UpdateFoodForm.jsx"

//react router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="menu" element={<Menu />} />

      <Route path="beverages" element={<Beverages />} />
      <Route path="breakfast" element={<Breakfast />} />
      <Route path="snacks" element={<Snacks />} />
      <Route path="lunchdinner" element={<LunchDinner />} />
      <Route path="desserts" element={<Desserts />} />
      <Route path="special" element={<Special />} />
      <Route path="foodform" element={<AddFoodForm />} />
      <Route path="updatefoodform" element={<UpdateFoodForm />} />
      <Route path="order" element={<Order />} />
      <Route path="admin" element={<Admin />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
