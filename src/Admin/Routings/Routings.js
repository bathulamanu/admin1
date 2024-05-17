import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import { MainLayout } from "../../Layouts/MainLayout";
import DoctorsPage from "../Doctors/DoctorsPage";

export const baseRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/mainPage",
    element: <MainLayout />,
  },
]);


export const siderRoutes=createBrowserRouter([
    {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/doctors",
        element: <DoctorsPage />,
      },

])
