import { useRef, useState, useSyncExternalStore } from "react";
import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { company } from "@/data/company";
import { navLabels, navLinks } from "@/data/navigation";
import Container from "./Container";

function subscribeScroll(onChange) {
    window.addEventListener("scroll", onChange, { passive: true });
    return () => window.removeEventListener("scroll", onChange);
}
const getScrolled = () => window.scrollY > 40;

function isActive(pathname, item) {
    if (item.children)
        return item.children.some((child) => isActive(pathname, child));
    if (item.href === "/") return pathname === "/";
    return pathname.startsWith(item.href);
}

export default function Nav() {
    const { pathname } = useLocation();
    const scrolled = useSyncExternalStore(subscribeScroll, getScrolled);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropOpen, setDropOpen] = useState(false);
    const closeTimer = useRef();

    const closeAll = () => {
        setMenuOpen(false);
        setDropOpen(false);
    };

    // Hover is for mouse only; on touch, hover + click would open and
    // immediately close the dropdown
    const openDrop = (e) => {
        if (e.pointerType !== "mouse") return;
        clearTimeout(closeTimer.current);
        setDropOpen(true);
    };
    const closeDrop = (e) => {
        if (e.pointerType !== "mouse") return;
        closeTimer.current = setTimeout(() => setDropOpen(false), 120);
    };

    return (
        <nav
            className={cn(
                "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-800",
                (scrolled || menuOpen || dropOpen) && "bg-navy",
                (scrolled || dropOpen) && "border-white/12",
            )}
        >
            <Container className="flex h-nav items-center justify-between gap-6">
                <Link to="/" onClick={closeAll}>
                    <img
                        src="/images/logo-paus-black.webp"
                        alt="PAUS"
                        className="h-6.5 brightness-0 invert"
                    />
                </Link>

                {/* Desktop */}
                <div className="hidden h-full items-center gap-[clamp(16px,2.6vw,40px)] text-label md:flex">
                    {navLinks.map((item) => {
                        const tone = isActive(pathname, item)
                            ? "font-medium text-white"
                            : "text-white/76";

                        if (!item.children) {
                            return (
                                <Link
                                    key={item.label}
                                    to={item.href}
                                    onClick={closeAll}
                                    className={tone}
                                >
                                    {item.label}
                                </Link>
                            );
                        }

                        return (
                            <div
                                key={item.label}
                                onPointerEnter={openDrop}
                                onPointerLeave={closeDrop}
                                className="relative flex h-full items-center"
                            >
                                <button
                                    type="button"
                                    aria-expanded={dropOpen}
                                    onClick={() => setDropOpen(!dropOpen)}
                                    className={cn(
                                        "flex items-center gap-1.5",
                                        tone,
                                    )}
                                >
                                    {item.label}
                                    <span
                                        className={cn(
                                            "text-[11px] transition-transform duration-600",
                                            dropOpen && "rotate-180",
                                        )}
                                    >
                                        ▾
                                    </span>
                                </button>

                                <div
                                    inert={!dropOpen}
                                    className={cn(
                                        "absolute top-nav -left-6 min-w-75 border border-white/12 bg-navy transition duration-700",
                                        !dropOpen && "-translate-y-2 opacity-0",
                                    )}
                                >
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.href}
                                            to={child.href}
                                            onClick={closeAll}
                                            className={cn(
                                                "flex flex-col gap-0.5 border-b border-white/12 px-6 py-5 last:border-b-0",
                                                isActive(pathname, child)
                                                    ? "text-white"
                                                    : "text-white/76",
                                            )}
                                        >
                                            <span className="text-[17px] font-medium">
                                                {child.label}
                                            </span>
                                            <span className="text-sm text-white/70">
                                                {child.description}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    <a
                        href={company.whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="border-b border-white/40 py-2.5 font-medium"
                    >
                        {navLabels.whatsapp}
                    </a>
                </div>

                {/* Mobile */}
                <button
                    type="button"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="border-b border-white/40 py-3 text-label font-medium md:hidden"
                >
                    {menuOpen ? navLabels.close : navLabels.menu}
                </button>
            </Container>

            {menuOpen && (
                <div className="fixed inset-x-0 top-nav bottom-0 flex flex-col justify-between gap-10 overflow-y-auto bg-navy px-gutter pt-8 pb-10 md:hidden">
                    <div className="flex flex-col">
                        {navLinks.map((item) =>
                            item.children ? (
                                <div
                                    key={item.label}
                                    className="flex flex-col gap-1 border-b border-white/12 py-2.5"
                                >
                                    <span className="py-1.5 text-sm text-white/76">
                                        {item.label}
                                    </span>
                                    {item.children.map((child) => (
                                        <MobileLink
                                            key={child.href}
                                            item={child}
                                            active={isActive(pathname, child)}
                                            onClick={closeAll}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <MobileLink
                                    key={item.label}
                                    item={item}
                                    active={isActive(pathname, item)}
                                    onClick={closeAll}
                                    className="border-b border-white/12 py-2.5"
                                />
                            ),
                        )}
                    </div>

                    <a
                        href={company.whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="self-start border-b border-white/40 pb-1.5 text-lg font-medium"
                    >
                        {navLabels.whatsapp} →
                    </a>
                </div>
            )}
        </nav>
    );
}

function MobileLink({ item, active, onClick, className }) {
    return (
        <Link
            to={item.href}
            onClick={onClick}
            className={cn(
                "text-[40px] font-light tracking-[-.03em]",
                active ? "text-white" : "text-white/62",
                className,
            )}
        >
            {item.label}
        </Link>
    );
}
