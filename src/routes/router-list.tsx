import ProtectedRoute from "@/components/protected-route";
import DashboardPage from "@/pages/dashboard";
import FooterPage from "@/pages/footer";
import OurServicePage from "@/pages/our-service";
import RegulationPage from "@/pages/regulation";
import RequirementPage from "@/pages/requirement";
import SigninPage from "@/pages/signin";
import { createBrowserRouter } from "react-router";

const routerList = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/sign-in",
    element: <SigninPage />,
  },
  {
    path: "/footer",
    element: (
      <ProtectedRoute>
        <FooterPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/regulation",
    element: (
      <ProtectedRoute>
        <RegulationPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/requirement",
    element: (
      <ProtectedRoute>
        <RequirementPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/our-service",
    element: (
      <ProtectedRoute>
        <OurServicePage />
      </ProtectedRoute>
    ),
  },
]);

export default routerList;
