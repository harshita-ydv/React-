import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoder } from "./components/Github/Github.jsx";




// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "home",
//         element: <Home />,
//       },
//       {
//         path: "About",
//         element: <About/>,
//       },
//       {
//         path: "Contact",
//         element: <Contact/>,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
    <Route path = '' element = {<Home/>}/>
    <Route path = '/About' element = {<About/>}/>
    <Route path = '/Contact' element = {<Contact/>}/>
    <Route path = 'user/:userid' element = {<User/>}/>

    <Route
    loader ={githubInfoLoder}
     path = 'github'
      element = {<Github/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
