import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Login from "../../pages/Login/Login";
import { MainLayout } from "../../components/Layouts/MainLayout";
import DoctorsPage from "../../pages/hospitalManagement/Doctors/DoctorsPage";
import DoctorAddForm from "../../pages/hospitalManagement/Doctors/DoctorAddForm";
import HospitalPage from "../../pages/hospitalManagement/Hospitals/HospitalPage";
import HospitalAddForm from "../../pages/hospitalManagement/Hospitals/HospitalAddForm";
import DoctorView from "../../pages/hospitalManagement/Doctors/DoctorView";
import HospitalView from "../../pages/hospitalManagement/Hospitals/HospitalView";
import SettingsPage from "../../pages/hospitalManagement/Settings/SettingsPage";
import SettingsAddForm from "../../pages/hospitalManagement/Settings/SettingsAddForm";
import Customers from "../../pages/customer/Customer";
import { CustomerLayout } from "../../components/Layouts/CustomerLayout";
import Finance from "../../pages/customer/Finance";
import CustomerForm from "../../pages/customer/CustomerForm";
import CustomerDetails from "../../pages/customer/CustomerDetails";
import Details from "../../pages/customer/Details";
import ClientDetails from "../../pages/customer/clientDetails/ClientDetails";
import CustomerEdit from "../../pages/customer/CustomerEdit";
import DetailsPlan from "../../pages/customer/plans/DetailsPlan";
import PlansForm from "../../pages/customer/plans/PlansForm";
import PlanDataPreview from "../../pages/customer/plans/PlanDataPreview";
import InvoiceTable from "../../pages/customer/invoice/InvoiceTable";
import InvoiceForm from "../../pages/customer/invoice/InvoiceForm";
import InvoiceView from "../../pages/customer/invoice/InvoiceView";
import BabyDetails from "../../pages/customer/babyDetails/BabyDetails";
import CustomerSettingsPage from "../../pages/customer/settings/SettingsPage";
import BabyDetailsFormData from "../../pages/customer/babyDetails/BabyDetailsFormData";
import CustomerDashboard from "../../pages/customer/dashboard/Dashboard";
import HospitalEditForm from "../../pages/hospitalManagement/Hospitals/HospitalEditForm";
import DoctorEditForm from "../../pages/hospitalManagement/Doctors/DoctorEditForm";
import PlansEdit from "../../pages/customer/plans/plansEdit";

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
        path: "doctors/edit",
        element: <DoctorEditForm />,
      },
      {
        path: "doctorForm",
        // element: <DoctorAddForm />,
      },
      {
        path: "hospitals",
        element: <HospitalPage />,
      },
      {
        path: "hospitalFrom",
        // element: <HospitalAddForm />,
      },
      {
        path: "hospitals/view",
        element: <HospitalView />,
      },
      {
        path: "hospitals/Edit",
        element: <HospitalEditForm />,
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
        path: "customerDashboard",
        element: <CustomerDashboard />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "customerForm",
        // element: <CustomerForm />,
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
        // element: <PlansForm />,
      },
      {
        path: "plans/Edit",
        // element: <PlansEdit />,
      },
      {
        path: "plans/plansDetailsPreview",
        element: <PlanDataPreview />,
      },
      {
        path: "baby_details",
        element: <BabyDetails />,
      },
      {
        path: "baby_details/babyDetailsView",
        element: <BabyDetailsFormData />,
      },
      {
        path: "finance",
        element: <Finance />,
      },
      {
        path: "invoices",
        element: <InvoiceTable />,
      },
      {
        path: "invoices/invoiceForm",
        element: <InvoiceForm />,
      },
      {
        path: "invoices/invoiceView",
        element: <InvoiceView />,
      },
      {
        path: "settings",
        element: <CustomerSettingsPage />,
      },
    ],
  },
]);
