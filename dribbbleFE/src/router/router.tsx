import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/authLayout";
import RegisterPage from "../pages/auth/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <RegisterPage />,
      },
    ],
  },
]);
