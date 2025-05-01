import ProtectedRoute from "@/components/protected-route";
import BottomPage from "@/pages/bottom";
import AboutCompanyPage from "@/pages/company-about";
import DashboardPage from "@/pages/dashboard";
import FooterPage from "@/pages/footer";
import HeroPage from "@/pages/hero";
import FaqPage from "@/pages/faq";
import OurAdvantagePage from "@/pages/our-advantage";
import OurServicePage from "@/pages/our-service";
import RegulationPage from "@/pages/regulation";
import RequirementPage from "@/pages/requirement";
import SigninPage from "@/pages/signin";
import { createBrowserRouter } from "react-router";
import BrandPage from "@/pages/brand";

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
  {
    path: "/our-advantage",
    element: (
      <ProtectedRoute>
        <OurAdvantagePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/about-us",
    element: (
      <ProtectedRoute>
        <AboutCompanyPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/hero",
    element: (
      <ProtectedRoute>
        <HeroPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/bottom",
    element: (
      <ProtectedRoute>
        <BottomPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/faq",
    element: (
      <ProtectedRoute>
        <FaqPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/brand",
    element: (
      <ProtectedRoute>
        <BrandPage />
      </ProtectedRoute>
    ),
  },
]);

export default routerList;
