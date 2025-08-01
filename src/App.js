import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages";
import About from "./pages/about";
import Experience from "./pages/experience";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

const router = createBrowserRouter([
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
