import React from "react";
import { createBrowserRouter, Route, Routes, Navigate, RouterProvider } from "react-router-dom";

import AuthLayout from "layouts/auth";


// Layouts
import DashboardLayout from "layouts/dashboard";
import AccountLayout from "layouts/account";
import { NotFound } from "pages";

// Dashboard Views
import MainDashboard from "views/dashboard/default";
import Profile from "views/dashboard/profile"
import Course from "views/dashboard/course";

// Account Views
import BasicInfo from "views/account/default"


// Auth Views
import SignIn from "views/auth/SignIn";
import PDF from "components/PDF";
import Logout from "components/navbar/Logout/Logout";





const router = createBrowserRouter([
  {
    path: "/",
    element: <><a href="/dashboard">Link to Dashboard</a></>
  },
  {path: "/logout",element : <Logout/>},
  {
    path: "/pdf",
    element: <PDF />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <MainDashboard />,
      },
      {
        path: "academic",
        children: [
          {
            path: "faculty-advisor",
            element: <>faculty</>,
          },
          {
            path: "subject",
            element: <>subject</>,
          },
        ],
      },
      {
        path: "course",
        element: <Course />,
      },
      {
        path: "student",
        children: [
          {
            path: "account",
            element: <>Student</>
          }
        ]
      }
    ],
  },
  {
    path: "/account",
    element: <AccountLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/account/basic-info" replace />
      },
      {
        path: "basic-info",
        element: <BasicInfo />
      },
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [{
      path: "login",
      element: <SignIn />
    }]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <Navigate to="/dashboard" replace />
      },
    ]
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
