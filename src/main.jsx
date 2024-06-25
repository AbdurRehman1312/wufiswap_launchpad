import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Layout from "../Layout";
import Swap from "./pages/Swap/Swap";
import Farm from "./pages/Farm/Farm";
import Launchpad from "./pages/Launchpad/Launchpad";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Swap />} />
      <Route path="farm" element={<Farm />} />
      <Route path="launchpad" element={<Launchpad />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);