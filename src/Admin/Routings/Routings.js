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
import SettingsPage from "../Settings/SettingsPage";
import SettingsAddForm from "../Settings/SettingsAddForm";
import Customers from "../customer/Customer";
import { CustomerLayout } from "../../Layouts/CustomerLayout";
import BabyDetails from "../customer/BabyDetails";
import Finance from "../customer/Finance";
import CustomerForm from "../customer/CustomerForm";
import CustomerDetails from "../customer/CustomerDetails";
import Details from "../customer/Details";
import ClientDetails from "../customer/clientDetails/ClientDetails";
import CustomerEdit from "../customer/CustomerEdit";
import DetailsPlan from "../customer/plans/DetailsPlan";
import PlansForm from "../customer/plans/PlansForm";

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
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "settingForm",
        element: <SettingsAddForm />,
      },
    ],
  },
  {
    path: "/customerPage",
    element: <CustomerLayout />,
    children: [
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "customerForm",
        element: <CustomerForm />,
      },
      {
        path: "customers/customerDetails",
        element: <CustomerDetails />,
      },
      {
        path: "customers/customerEdit",
        element: <CustomerEdit />,
      },
      {
        path: "customers/allDetails",
        element: <Details />,
      },
      {
        path: "customers/allDetails/clientDetails",
        element: <ClientDetails />,
      },
      {
        path: "plans",
        element: <DetailsPlan />,
      },
      {
        path: "plans/plansForm",
        element: <PlansForm />,
      },
      {
        path: "baby_details",
        element: <BabyDetails />,
      },
      {
        path: "finance",
        element: <Finance />,
      },
    ],
  },
]);
