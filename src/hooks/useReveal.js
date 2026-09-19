import { useEffect } from "react";

const EASE = "cubic-bezier(.16,1,.3,1)";
const SELECTOR = ".rv, .rv-stagger";

/**
 * Scroll reveal + parallax, port 1:1 dari prototype desain.
 *
 * Kontrak keamanan (jangan diganti dengan reveal berbasis class CSS):
 *  - State tersembunyi dipasang INLINE, hanya pada node yang didaftarkan hook
 *    ini, dan dibersihkan oleh jalur kode yang sama.
 *  - Elemen baru disembunyikan setelah probe double-rAF membuktikan frame
 *    clock berjalan. Kalau rAF tidak jalan, tidak ada yang disembunyikan.
 *  - Elemen yang sudah berada di viewport tidak pernah disembunyikan.
 *  - Fallback "snap" melewati transisi, bukan menulis ulang properti.
 *
 * Kontrak markup:
 *  - className="rv"          satu blok, fade up 34px
 *  - className="rv-stagger"  wrapper, child langsung muncul bergantian 90ms
 *  - data-px="0.1"           parallax, faktor x 110px (lihat ui/Parallax)
 */
export default function useReveal() {
    useEffect(() => {
        const reduce = window.matchMedia?.(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        const state = { clockLive: false, io: null, mo: null, raf: 0 };

        const show = (el) => {
            if (el.dataset.rvShown) return;
            el.dataset.rvShown = "1";
            if (!el.dataset.rvArmed) return;

            const stagger = el.classList.contains("rv-stagger");
            const nodes = stagger ? Array.from(el.children) : [el];
            nodes.forEach((node, i) => {
                node.style.transitionDelay = stagger
                    ? `${Math.min(i, 5) * 90}ms`
                    : "";
                node.style.opacity = "";
                node.style.transform = "";
            });
        };

        const snap = (el) => {
            const nodes = el.classList.contains("rv-stagger")
                ? Array.from(el.children)
                : [el];
            nodes.forEach((node) => {
                node.style.transition = "none";
                node.style.opacity = "";
                node.style.transform = "";
            });
            void el.offsetWidth;
            nodes.forEach((node) => {
                node.style.transition = "";
            });
            el.dataset.rvShown = "1";
        };

        const arm = (node, distance, duration) => {
            node.style.opacity = "0";
            node.style.transform = `translateY(${distance}px)`;
            node.style.transition = `opacity ${duration}ms ${EASE}, transform ${duration}ms ${EASE}`;
        };

        const sweep = () => {
            if (!state.clockLive || reduce) {
                document.querySelectorAll(SELECTOR).forEach(show);
                return;
            }

            const vh = window.innerHeight || 0;
            document.querySelectorAll(SELECTOR).forEach((el) => {
                if (el.dataset.rvShown || el.dataset.rvArmed) return;
                if (el.getBoundingClientRect().top < vh * 0.92) {
                    el.dataset.rvShown = "1";
                    return;
                }

                el.dataset.rvArmed = "1";
                if (el.classList.contains("rv-stagger")) {
                    Array.from(el.children).forEach((child) =>
                        arm(child, 26, 800),
                    );
                } else {
                    arm(el, 34, 900);
                }
                state.io.observe(el);
            });
        };

        // Probe double-rAF: pastikan frame clock hidup sebelum menyembunyikan
        let probe = 0;
        const tickProbe = () => {
            if (++probe >= 2) {
                state.clockLive = true;
                state.io = new IntersectionObserver(
                    (entries, observer) => {
                        entries.forEach((entry) => {
                            if (!entry.isIntersecting) return;
                            show(entry.target);
                            observer.unobserve(entry.target);
                        });
                    },
                    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
                );
                sweep();
                state.mo = new MutationObserver(sweep);
                state.mo.observe(document.body, {
                    childList: true,
                    subtree: true,
                });
                return;
            }
            requestAnimationFrame(tickProbe);
        };
        requestAnimationFrame(tickProbe);

        const safety = setTimeout(() => {
            document.querySelectorAll(SELECTOR).forEach((el) => {
                if (
                    el.dataset.rvArmed &&
                    getComputedStyle(el).opacity !== "1"
                ) {
                    snap(el);
                } else if (!el.dataset.rvShown) {
                    show(el);
                }
            });
        }, 1800);

        // Parallax
        let targets = [];
        let frameCount = 0;
        const frame = () => {
            if (frameCount % 45 === 0) {
                targets = Array.from(document.querySelectorAll("[data-px]"));
            }
            frameCount++;

            if (!reduce) {
                const vh = window.innerHeight || 1;
                for (const el of targets) {
                    const rect = el.getBoundingClientRect();
                    const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
                    const offset =
                        -progress * (parseFloat(el.dataset.px) || 0) * 110;
                    el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
                }
            }
            state.raf = requestAnimationFrame(frame);
        };
        frame();

        return () => {
            clearTimeout(safety);
            cancelAnimationFrame(state.raf);
            state.io?.disconnect();
            state.mo?.disconnect();
        };
    }, []);
}
