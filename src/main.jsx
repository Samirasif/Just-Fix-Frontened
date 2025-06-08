import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import Services from "./Pages/Services.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Profile from "./Pages/Profile.jsx";
import Bookings from "./Pages/Bookings.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Professionals from "./Pages/Professionals.jsx";
import ServiceDetails from "./Pages/ServiceDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Wrap other routes inside App layout if needed
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/services`),
      },
      
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/service/:id", element: <ServiceDetails /> },
      { path: "/profile", element: <Profile /> },
      { path: "/bookings", element: <Bookings /> },
      { path: "/professionals", element: <Professionals /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
