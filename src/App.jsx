import "./App.css";
import React from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import ContactPage from "./components/ContactPage";
import Services from "./components/Services";
import Fishes from "./components/AquaticSpecies/Fishes";
import Footer from "./components/Footer";
import Equipments from "./components/Equipments/Equipments";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Trading from "./components/Trading/Trading.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";


const Root = () => {
  return (
    <div className="">
      <ScrollToTop/>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/about",
        element: <Services />,
      },
      {
        path: "/equipments",
        element: <Equipments />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/fishes",
        element: <Fishes />,
      },
      {
        path: "/trading",
        element: <Trading />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
