import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Profile from "../components/Profile/Profile";
import Details from "../components/Details/Details";
import About from "../components/About/About";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Colleges from "../components/Colleges/Colleges";
import Admission from "../components/Admission/Admission";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {path: '/', element: <Home />},
        {path: '/profile', element: <Profile />},
        {path: '/details', element: <Details />},
        {path: '/about', element: <About />},
        {path: '/login', element: <Login />},
        {path: '/signup', element: <SignUp />},
        {path: '/colleges', element: <Colleges />},
        {path: '/admission', element: <Admission />},
      ]
    },
  ]);