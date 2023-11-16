import React from "react";

// Layouts
import DashboardLayout from "layouts/dashboard";
import { NotFound } from "pages";

// Dashboard Views
import MainDashboard from "views/dashboard/default";
import Profile from "views/dashboard/profile";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";

const dashboardRoutes = {
  title: "DashBoard",
  routes: [
    {
      path: "/dashboard",
      name: "Dashboard",
    },
    {
      path: "/dashboard/academic",
      name: "Academic",
      children: [
        {
          path: "faculty-advisor",
          name: "Faculty Advisor",
        },
        {
          path: "subject",
          name: "Subject",
        },
      ],
    },
    {
      path: "/dashboard/course",
      name: "Course",
    },
    {
      path: "/account",
      name: "Student",
      children: [
        {
          path: "",
          name: "My Account",
        },
      ],
    },
  ],
};

const accountRoutes = {
  title: "Account Settings",
  routes: [
    {
      path: "/account/basic-info",
      name: "Basic Information",
    },
    {
      path: "/account/parents-info",
      name: "Parents Information",
    },
    {
      path: "/account/fee-history",
      name: "Fee History",
    },
    {
      path: "/account/password",
      name: "Password",
    },
    {
      path: "/account/notifications",
      name: "Notifications",
    },
    {
      path: "/account/verification",
      name: "Verification",
    },
    {
      path: "/dashboard",
      name: "Dashboard",
    },
  ],
};

export { dashboardRoutes, accountRoutes };
