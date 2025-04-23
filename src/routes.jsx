import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ErrorPage from "./Components/ErrorPage/Errorpage";
import Dashboard from "./pages/Dashboard";
import ExpenseTracker from "./pages/ExpenseTracker";
import EmergencyFund from "./pages/EmergencyFund";
import Insurance from "./pages/Insurance";
import Investments from "./pages/Investments";
import Goals from "./pages/Goals";
import FinancialTools from "./pages/FinancialTools";
import Profile from "./pages/Profile";
import FinancialEducation from "./Components/FinancialEducation/FinancialEducation";
import FinancialInsights from "./Components/FinancialInsights/FinancialInsights";
import HeroSection from "./Components/HeroSection/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FinancialInsights />
      <FinancialEducation />

    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/expense-tracker",
        element: <ExpenseTracker />,
      },
      {
        path: "/emergency-fund",
        element: <EmergencyFund />,
      },
      {
        path: "/insurance",
        element: <Insurance />,
      },
      {
        path: "/investments",
        element: <Investments />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/tools",
        element: <FinancialTools />,
      },
      {
        path: "/goals",
        element: <Goals />,
      },
    ],
  },
]);
