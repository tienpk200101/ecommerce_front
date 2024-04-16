import { RouteObject } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import UserListPage from "../pages/admin/user/UserListPage";

type CustomRouterObject = {};

const adminRouter: Array<RouteObject & CustomRouterObject> = [
  {
    path: "admin",
    children: [
      {
        path: "home",
        children: [{ index: true, element: <Dashboard /> }],
      },
      {
        path: "users",
        children: [
          {
            index: true,
            element: <UserListPage />,
          },
        ],
      },
    ],
  },
];

export default adminRouter;
