import React from "react";
import Home from "../pages/Site/Home/Home";
import SiteRoot from "../pages/Site/SiteRoot/SiteRoot";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import AdminRoot from "../pages/Admin/AdminRoot/AdminRoot";
import ConvertImageToPDF from "../pages/Site/ConvertImageToPDF/ConvertImageToPDF";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "image-to-pdf",
        element: <ConvertImageToPDF />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
];
