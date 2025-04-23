import ReactDom from "react-dom/client";
import Footer from "./Components/Footer/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import ErrorPage from "./Components/ErrorPage/Errorpage";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import FinancialInsights from "./Components/FinancialInsights/FinancialInsights";
import FinancialEducation from "./Components/FinancialEducation/FinancialEducation";
import "./styles/global.css";

const AppLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
      <Footer />
    </>
  );
};

const Home = () => {
  return (
    <>
      <HeroSection />
      <FinancialInsights />
      <FinancialEducation />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
