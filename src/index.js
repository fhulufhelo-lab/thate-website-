import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './Pages/About';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Request from './Pages/Request';
import ContactUs from './Pages/ContactUs';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "Home",
    element: <Home/>,
  },
  {
    path: "Services",
    element: <Services/>,
  },
  {
    path: "Request",
    element: <Request/>,
  },
  {
    path: "ContactUs",
    element: <ContactUs/>,
  },
  

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
