import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages";
import About from "./pages/about";
import Experience from "./pages/experience";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

const routes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Experience",
    element: <Experience />,
  },
  {
    path: "/Portfolio",
    element: <Portfolio />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
];

const router = createBrowserRouter(routes, { basename: "/sydney-m-brown" });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
