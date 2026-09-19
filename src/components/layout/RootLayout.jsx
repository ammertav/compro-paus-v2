import { Outlet, ScrollRestoration } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout() {
    return (
        // Jangan beri overflow-x-hidden di sini, navbar sticky akan rusak
        <div className="flex min-h-screen w-full flex-col">
            <Navbar />
            <main className="flex w-full flex-1 flex-col pb-32.5">
                <Outlet />
            </main>
            <Footer />
            <ScrollRestoration />
        </div>
    );
}
