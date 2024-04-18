import { RouteObject } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import UserListPage from "../pages/admin/user/UserListPage";
import CreateUserPage from "../pages/admin/user/CreateUserPage";
import { PATH_ADMIN_USER } from "../constants/admin/route";

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
        path: PATH_ADMIN_USER.DEFAULT,
        children: [
          {
            index: true,
            element: <UserListPage />,
          },
          {
            path: PATH_ADMIN_USER.CREATE,
            element: <CreateUserPage />,
          }
        ],
      },
    ],
  },
];

export default adminRouter;
