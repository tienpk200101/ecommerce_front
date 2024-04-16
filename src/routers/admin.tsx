import { RouteObject } from "react-router-dom";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import AdminLayout from "../layouts/admin";

type CustomRouterObject = {};

const adminRouter: Array<RouteObject & CustomRouterObject> = [
  {
    path: "dashboard",
    children: [
      {
        path: "home",
        children: [{ index: true, element: <AdminLayout /> }],
      },
    ],
  },
];

export default adminRouter;
