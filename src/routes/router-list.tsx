import DashboardPage from "@/pages/dashboard";
import FooterPage from "@/pages/footer";
import RegulationPage from "@/pages/regulation";
import RequirementPage from "@/pages/requirement";
import SigninPage from "@/pages/signin";
import { createBrowserRouter } from "react-router";

const routerList = createBrowserRouter([
  {
    path: "/",
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
  {
    path: "/requirement",
    element: <RequirementPage />,
  },
]);

export default routerList;
