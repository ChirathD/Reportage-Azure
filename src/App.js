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
import BlogPosts from "./components/BlogPosts/BlogPosts"
import SidebarTags from "./components/SidebarTags/Tags"
import Tag2 from "./components/Tag2/Tag2"
import React, { useState } from "react";
import AdSense from "react-adsense";
import "./style.scss"
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy"

import ReactGA from 'react-ga';
ReactGA.initialize('UA-4269444817');
ReactGA.pageview(window.location.pathname + window.location.search);

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
        path: "/main-post/:id",
        element: <BlogPosts/>,
      },
      
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>,
      },
      {
        path: "/test",
        element: <BlogPosts/>,
      },
      {
        path: "/test3",
        element: <Tag2/>,
      },
    ],
  },
  {
    path: "/test2",
    element: <SidebarTags/>,
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

