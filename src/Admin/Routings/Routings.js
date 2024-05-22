import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import { MainLayout } from "../../Layouts/MainLayout";
import DoctorsPage from "../Doctors/DoctorsPage";
import DoctorAddForm from "../Doctors/DoctorAddForm";
import HospitalPage from "../../Hospitals/HospitalPage";
import HospitalAddForm from "../../Hospitals/HospitalAddForm";
import DoctorView from "../Doctors/DoctorView";
import HospitalView from "../../Hospitals/HospitalView";

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
    children: [
      {
        path: "doctors",
        element: <DoctorsPage />,
      },
      {
        path: "doctors/view",
        element: <DoctorView />,
      },
      {
        path: "doctorForm",
        element: <DoctorAddForm />,
      },
      {
        path: "hospitals",
        element: <HospitalPage />,
      },
      {
        path: "hospitalFrom",
        element: <HospitalAddForm />,
      },
      {
         path: "hospitals/view",
        element: <HospitalView />,
      },
    ],
  },
]);
