import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Service /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
