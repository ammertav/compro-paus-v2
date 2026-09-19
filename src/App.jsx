import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "@/components/layout/RootLayout";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import HowItWorks from "@/pages/HowItWorks";
import NotFound from "@/pages/NotFound";
import OurBrands from "@/pages/OurBrands";
import OurTeam from "@/pages/OurTeam";
import Services from "@/pages/Services";
import WhoWeAre from "@/pages/WhoWeAre";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "who-we-are", element: <WhoWeAre /> },
            { path: "our-team", element: <OurTeam /> },
            { path: "our-brands", element: <OurBrands /> },
            { path: "how-it-works", element: <HowItWorks /> },
            { path: "services", element: <Services /> },
            { path: "contact", element: <Contact /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
