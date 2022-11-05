import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal/Modal"
import React, { useState } from "react";
import AdSense from "react-adsense";
import "./style.scss"
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy"

const Layout = () => {
  const [subscriptionState, setSubscriptionState] = useState(false);
  return (
    <>
      <Navbar setSubscriptionState={setSubscriptionState} currentSubscriptionState={subscriptionState}/>
      {subscriptionState && <Modal setSubscriptionState={setSubscriptionState} currentSubscriptionState={subscriptionState}/>}
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {

  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

