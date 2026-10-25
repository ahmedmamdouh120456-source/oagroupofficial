import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Globe, ArrowUpRight } from "lucide-react";
import { useLang } from "./LanguageContext";
import logoImg from "../../imports/540454450_122108095274987112_4613267991255325676_n.jpg";

const NAV_HEIGHT_COMPACT = 64;  // px — matches h-16
const NAV_HEIGHT_DEFAULT = 80;  // px — matches h-20

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const location = useLocation();
  const font = lang === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif";
  const navRef = useRef<HTMLElement>(null);

  // Detect scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const links = [
    { to: "/", label: t("الرئيسية", "Home") },
    { to: "/about", label: t("من نحن", "About") },
    { to: "/services", label: t("خدماتنا", "Services") },
    { to: "/works", label: t("أعمالنا", "Work") },
    { to: "/global-presence", label: t("حضورنا العالمي", "Global Presence") },
    { to: "/contact", label: t("تواصل معنا", "Contact") },
  ];

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  const solid = scrolled || mobileOpen;
  const navH = solid ? NAV_HEIGHT_COMPACT : NAV_HEIGHT_DEFAULT;

  return (
    <header ref={navRef} className="fixed top-0 inset-x-0 z-50">
      {/* Main bar */}
      <nav
        style={{ height: navH, transition: "height 0.4s ease, background-color 0.4s ease, box-shadow 0.4s ease" }}
        className={`flex items-center ${solid ? "bg-[#1A0E1E]/92 backdrop-blur-xl border-b border-[#E8DFC0]/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.55)]" : "bg-transparent border-b border-transparent"}`}
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="OAGROUP">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#E8DFC0]/20 bg-[#1A0E1E] p-0.5 shrink-0">
              <img src={logoImg} alt="OAGROUP" className="w-full h-full rounded-[9px] object-cover" />
            </div>
            <div className="leading-tight">
              <span
                className="text-[#E8DFC0] tracking-[0.18em] block text-[1rem]"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
              >
                OAGROUP
              </span>
              <span
                className="text-[#E8DFC0]/45 block text-[0.62rem]"
                style={{ fontFamily: font, letterSpacing: lang === "ar" ? 0 : "0.12em" }}
              >
                {t("نصنع الفرق رقميًا", "Digital Marketing Agency")}
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1 rounded-full border border-[#E8DFC0]/10 bg-[#E8DFC0]/[0.03] p-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-1.5 rounded-full text-[0.82rem] whitespace-nowrap transition-all duration-300 ${
                  isActive(l.to)
                    ? "bg-[#E8DFC0] text-[#1A0E1E]"
                    : "text-[#E8DFC0]/60 hover:text-[#E8DFC0] hover:bg-[#E8DFC0]/[0.07]"
                }`}
                style={{ fontFamily: font, fontWeight: isActive(l.to) ? 700 : 500 }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="flex items-center gap-1.5 h-9 px-3 rounded-full border border-[#E8DFC0]/15 text-[#E8DFC0]/70 hover:text-[#E8DFC0] hover:border-[#E8DFC0]/40 transition-all text-xs cursor-pointer"
              style={{ fontFamily: lang === "ar" ? "'DM Sans', sans-serif" : "'Cairo', sans-serif" }}
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === "ar" ? "EN" : "عربي"}
            </button>
            <Link
              to="/contact"
              className="group flex items-center gap-1.5 h-9 px-5 bg-[#E8DFC0] text-[#1A0E1E] rounded-full hover:bg-white transition-all text-sm shrink-0"
              style={{ fontFamily: font, fontWeight: 700 }}
            >
              {t("ابدأ الآن", "Start Now")}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 rtl:-scale-x-100" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="lg:hidden w-10 h-10 rounded-full border border-[#E8DFC0]/15 flex items-center justify-center text-[#E8DFC0] shrink-0 transition-colors hover:border-[#E8DFC0]/35"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer — sits directly below the nav bar */}
      <div
        style={{
          top: NAV_HEIGHT_COMPACT,
          maxHeight: mobileOpen ? "calc(100dvh - 64px)" : "0px",
          opacity: mobileOpen ? 1 : 0,
          transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
        className="lg:hidden fixed inset-x-0 bottom-0 bg-[#110A14]/98 backdrop-blur-xl overflow-y-auto overflow-x-hidden"
      >
        <div className="px-6 py-6 flex flex-col min-h-full">
          <div className="flex flex-col">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                className={`flex items-center justify-between py-4 border-b border-[#E8DFC0]/8 text-lg transition-colors ${
                  isActive(l.to) ? "text-[#E8DFC0]" : "text-[#E8DFC0]/55 hover:text-[#E8DFC0]/90"
                }`}
                style={{ fontFamily: font, fontWeight: isActive(l.to) ? 700 : 500 }}
              >
                {l.label}
                <span
                  className="text-[0.65rem] text-[#E8DFC0]/30"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  0{i + 1}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-8 flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="flex items-center gap-2 h-12 px-5 rounded-full border border-[#E8DFC0]/20 text-[#E8DFC0]/80 text-sm cursor-pointer"
              style={{ fontFamily: font }}
            >
              <Globe className="w-4 h-4" />
              {lang === "ar" ? "English" : "عربي"}
            </button>
            <Link
              to="/contact"
              className="flex-1 flex items-center justify-center h-12 rounded-full bg-[#E8DFC0] text-[#1A0E1E] text-sm font-bold"
              style={{ fontFamily: font, fontWeight: 700 }}
            >
              {t("ابدأ الآن", "Start Now")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
