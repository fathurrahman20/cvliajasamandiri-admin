import DashboardPage from "@/pages/dashboard";
import FooterPage from "@/pages/footer";
import RegulationPage from "@/pages/regulation";
import SigninPage from "@/pages/signin";
import { createBrowserRouter } from "react-router";

const routerList = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/sign-in",
    element: <SigninPage />,
  },
  {
    path: "/footer",
    element: <FooterPage />,
  },
  {
    path: "/regulation",
    element: <RegulationPage />,
  },
]);

export default routerList;
