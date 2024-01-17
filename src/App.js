import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestraurantMenu from "./components/RestraurantMenu";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restaurants/:restId", element: <RestraurantMenu /> },
    ],
  },
]);

export default AppLayout;
