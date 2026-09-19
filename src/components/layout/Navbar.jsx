import { useState } from "react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { aboutLinks, navLinks } from "@/data/navigation";

/**
 * Navbar kapsul melayang.
 * CATATAN: position sticky harus ada di elemen ini dan parent-nya harus
 * setinggi seluruh halaman. Jangan bungkus dengan container ber-overflow-x
 * hidden, karena itu membuat scrollport mati dan sticky tidak berfungsi.
 */
export default function Navbar() {
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Tutup semua menu setiap kali link diklik
    const closeMenus = () => {
        setIsAboutOpen(false);
        setIsMenuOpen(false);
    };

    return (
        <nav className="pointer-events-none sticky top-0 z-500 w-full px-4 py-4.5 md:px-6">
            <div className="pointer-events-auto relative mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-full border border-primary/10 bg-white/82 py-2.5 pr-3 pl-6 shadow-[0_10px_30px_-16px_rgba(1,34,63,.22)] backdrop-blur-[18px] backdrop-saturate-[1.4]">
                <Link to="/" onClick={closeMenus} className="block shrink-0">
                    <img
                        src="/images/logo-paus-black.webp"
                        alt="PAUS"
                        className="block h-6.5 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-1 text-sm lg:flex">
                    <div
                        className="relative"
                        onMouseEnter={() => setIsAboutOpen(true)}
                        onMouseLeave={() => setIsAboutOpen(false)}
                    >
                        <button
                            type="button"
                            aria-expanded={isAboutOpen}
                            aria-haspopup="true"
                            onClick={() => setIsAboutOpen(!isAboutOpen)}
                            className={cn(
                                "flex cursor-pointer items-center gap-1.75 rounded-full px-3.5 py-2.25 transition-colors duration-300",
                                isAboutOpen && "bg-primary/6",
                            )}
                        >
                            About Us
                            <ChevronIcon isOpen={isAboutOpen} />
                        </button>

                        {/* Dropdown About Us */}
                        <div
                            className={cn(
                                "absolute top-[calc(100%+10px)] -left-1.5 min-w-60 rounded-2xl border border-primary/10 bg-white p-2 shadow-[0_22px_48px_-20px_rgba(1,34,63,.32)] transition-[opacity,translate] duration-300 ease-out-expo",
                                isAboutOpen
                                    ? "pointer-events-auto translate-y-0 opacity-100"
                                    : "pointer-events-none -translate-y-2 opacity-0",
                            )}
                        >
                            {aboutLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={closeMenus}
                                    className="block rounded-lg px-4.5 py-2.75 whitespace-nowrap transition-colors hover:bg-primary/6 hover:opacity-100"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            onClick={closeMenus}
                            className="rounded-full px-3.5 py-2.25 transition-colors hover:bg-primary/6 hover:opacity-100"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    {/* Desktop CTA */}
                    <Link
                        to="/contact"
                        onClick={closeMenus}
                        className="hidden shrink-0 rounded-full bg-primary px-6.5 py-3.25 text-[13px] font-medium whitespace-nowrap text-white sm:block"
                    >
                        Contact Us
                    </Link>

                    {/* Hamburger */}
                    <button
                        type="button"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="cursor-pointer rounded-full p-2.5 transition-colors hover:bg-primary/6 lg:hidden"
                    >
                        <MenuIcon isOpen={isMenuOpen} />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={cn(
                        "absolute inset-x-0 top-[calc(100%+10px)] rounded-3xl border border-primary/10 bg-white p-2 shadow-[0_22px_48px_-20px_rgba(1,34,63,.32)] transition-[opacity,translate] duration-300 ease-out-expo lg:hidden",
                        isMenuOpen
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none -translate-y-2 opacity-0",
                    )}
                >
                    <p className="px-4.5 pt-3 pb-1 text-[13px] font-medium text-primary/74">
                        About Us
                    </p>
                    {aboutLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            onClick={closeMenus}
                            className="block rounded-lg px-4.5 py-3 text-[15px] transition-colors hover:bg-primary/6 hover:opacity-100"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <span className="mx-4.5 my-2 block h-px bg-primary/10" />

                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            onClick={closeMenus}
                            className="block rounded-lg px-4.5 py-3 text-[15px] transition-colors hover:bg-primary/6 hover:opacity-100"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        onClick={closeMenus}
                        className="mt-2 block rounded-full bg-primary px-6.5 py-3.5 text-center text-sm font-medium text-white sm:hidden"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
}

function ChevronIcon({ isOpen }) {
    return (
        <svg
            width="9"
            height="6"
            viewBox="0 0 9 6"
            fill="none"
            aria-hidden="true"
            className={cn(
                "block transition-transform duration-300 ease-out-expo",
                isOpen && "rotate-180",
            )}
        >
            <path
                d="M1 1L4.5 4.5L8 1"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
            />
        </svg>
    );
}

function MenuIcon({ isOpen }) {
    return (
        <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.6}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
            />
        </svg>
    );
}
