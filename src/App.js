import React, { Suspense, lazy, useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
// import About from "./components/About";
// import ContactUs from "./components/ContactUs";
// import Cart from "./components/Cart";
// import Error from "./components/Error";
// import RestraurantMenu from "./components/RestraurantMenu";
import ShimmerUi from "./components/ShimmerUi";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
const RestraurantMenu = lazy(() => import("./components/RestraurantMenu"));
const Error = lazy(() => import("./components/Error"));
const Cart = lazy(() => import("./components/Cart"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  //authentication

  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const data = {
      name: "Akshay Saini",
    };
    setUserInfo(data.name);
  }, []);
  return (
    <React.Fragment>
      <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
        <Suspense fallback={<ShimmerUi />}>
          <Header />
          <Outlet />
        </Suspense>
      </UserContext.Provider>
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
