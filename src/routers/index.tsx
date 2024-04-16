import adminRouter from "./admin";
import userRouter from "./user";
import { createBrowserRouter } from 'react-router-dom';

export const routes = createBrowserRouter([...userRouter, ...adminRouter])