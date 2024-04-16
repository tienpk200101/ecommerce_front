import { RouteObject } from "react-router-dom";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

type CustomRouterObject = {};

const userRouter: Array<RouteObject & CustomRouterObject> = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
];

export default userRouter;
