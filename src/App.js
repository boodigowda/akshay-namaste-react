import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Error from "./components/Error";

const AppLayout = () => {
  console.log(<Body />);
  return (
    <React.Fragment>
      <Header />
      <Body />
    </React.Fragment>
  );
};

export const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout />, errorElement: <Error /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/cart", element: <Cart /> },
]);

export default AppLayout;
