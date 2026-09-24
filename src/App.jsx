import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "@/components/layout/RootLayout";
import About from "@/pages/About";
import Ammertav from "@/pages/Ammertav";
import Career from "@/pages/Career";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import InkCreative from "@/pages/InkCreative";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "business/ammertav", element: <Ammertav /> },
            { path: "business/ink-creative", element: <InkCreative /> },
            { path: "career", element: <Career /> },
            { path: "contact", element: <Contact /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
