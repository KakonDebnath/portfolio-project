import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Skills from "../pages/Skills/Skills";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {path: "/",element: <Home />},
            {path: "/about",element: <About />},
            {path: "/skills",element: <Skills />},
            {path: "/projects",element: <Projects />},
            {path: "/contact",element: <Projects />},
        ],
    },
]);

export default router;