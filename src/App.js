import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
// import About from "./components/About";
// import ContactUs from "./components/ContactUs";
// import Cart from "./components/Cart";
// import Error from "./components/Error";
// import RestraurantMenu from "./components/RestraurantMenu";
import ShimmerUi from "./components/ShimmerUi";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
const RestraurantMenu = lazy(() => import("./components/RestraurantMenu"));
const Error = lazy(() => import("./components/Error"));
const Cart = lazy(() => import("./components/Cart"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<ShimmerUi/>}>
        <Header />
        <Outlet />
      </Suspense>
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
      { path: "/grocery", element: <Grocery /> },
      { path: "/restaurants/:restId", element: <RestraurantMenu /> },
    ],
  },
]);

export default AppLayout;
