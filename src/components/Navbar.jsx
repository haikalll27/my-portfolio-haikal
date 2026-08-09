import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

// Hoisted to module scope: the scroll effect below closes over this with [] deps,
// so it must keep a stable identity once labels become translated at render time.
const NAV_ITEMS = [
    { id: "Home", href: "#Home", labelKey: "nav.home" },
    { id: "About", href: "#About", labelKey: "nav.about" },
    { id: "Portofolio", href: "#Portofolio", labelKey: "nav.portfolio" },
    { id: "Experience", href: "#Experience", labelKey: "nav.experience" },
    { id: "Contact", href: "#Contact", labelKey: "nav.contact" },
];

const Navbar = () => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    useEffect(() => {
        let frame = null;

        const measure = () => {
            frame = null;
            setScrolled(window.scrollY > 20);
            const sections = NAV_ITEMS.map(item => {
                const section = document.querySelector(item.href);
                if (section) {
                    return {
                        id: item.id,
                        offset: section.offsetTop - 550,
                        height: section.offsetHeight
                    };
                }
                return null;
            }).filter(Boolean);

            // A nav item whose section is missing is dropped silently by filter(Boolean),
            // which is what keeps this safe on the /project/:id route. On the landing page
            // it would instead hide a typo'd id, so surface that during development.
            if (import.meta.env.DEV && sections.length > 0 && sections.length !== NAV_ITEMS.length) {
                const missing = NAV_ITEMS.filter(item => !document.querySelector(item.href));
                console.warn(
                    `Navbar: no section found for ${missing.map(item => item.href).join(", ")}. ` +
                    `These links will render but do nothing.`
                );
            }

            const currentPosition = window.scrollY;
            const active = sections.find(section =>
                currentPosition >= section.offset &&
                currentPosition < section.offset + section.height
            );

            if (active) {
                setActiveSection(active.id);
            }
        };

        // Coalesce bursts of scroll events into one measurement per frame.
        const handleScroll = () => {
            if (frame === null) {
                frame = requestAnimationFrame(measure);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        measure();
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (frame !== null) cancelAnimationFrame(frame);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            const top = section.offsetTop - 100;
            window.scrollTo({
                top: top,
                behavior: "smooth"
            });
        }
        setIsOpen(false);
    };

    return (
        <nav
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
            isOpen
                ? "bg-[#030014] opacity-100"
                : scrolled
                ? "bg-[#030014]/50 backdrop-blur-xl"
                : "bg-transparent"
        }`}
    >
        <div className="mx-auto px-4 sm:px-6 lg:px-[10%]">
            <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <a
                        href="#Home"
                        onClick={(e) => scrollToSection(e, "#Home")}
                        className="text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"
                    >
                        Haikal
                    </a>
                </div>
    
                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <div className="ml-8 flex items-center space-x-6 lg:space-x-8">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="group relative px-1 py-2 text-sm font-medium"
                            >
                                <span
                                    className={`relative z-10 transition-colors duration-300 ${
                                        activeSection === item.id
                                            ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                                            : "text-[#e2d3fd] group-hover:text-white"
                                    }`}
                                >
                                    {t(item.labelKey)}
                                </span>
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ${
                                        activeSection === item.id
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                                />
                            </a>
                        ))}
                        <LanguageSwitcher />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <LanguageSwitcher />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
                        aria-expanded={isOpen}
                        className={`relative p-2 text-[#e2d3fd] hover:text-white transition-transform duration-300 ease-in-out transform ${
                            isOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"
                        }`}
                    >
                        {isOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    
        {/* Mobile Menu Overlay */}
        <div
            className={`fixed inset-x-0 bottom-0 top-16 bg-[#030014] transition-all duration-300 ease-in-out md:hidden ${
                isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[-100%] pointer-events-none"
            }`}
        >
            <div className="flex flex-col h-full">
                <div className="flex-1 space-y-4 overflow-y-auto px-4 py-6">
                    {NAV_ITEMS.map((item, index) => (
                        <a
                            key={item.id}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className={`block px-4 py-3 text-lg font-medium transition-all duration-300 ease ${
                                activeSection === item.id
                                    ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                                    : "text-[#e2d3fd] hover:text-white"
                            }`}
                            style={{
                                transitionDelay: `${index * 100}ms`,
                                transform: isOpen ? "translateX(0)" : "translateX(50px)",
                                opacity: isOpen ? 1 : 0,
                            }}
                        >
                            {t(item.labelKey)}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </nav>
    
    );
};

export default Navbar;
