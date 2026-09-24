import { Outlet, ScrollRestoration } from "react-router";
import Footer from "./Footer";
import Nav from "./Nav";

export default function RootLayout() {
    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ScrollRestoration />
        </>
    );
}
