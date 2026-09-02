import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "./LanguageContext";
import logoImg from "../../imports/540454450_122108095274987112_4613267991255325676_n.jpg";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const links = [
    { to: "/", label: t("الرئيسية", "Home") },
    { to: "/about", label: t("من نحن", "About Us") },
    { to: "/services", label: t("خدماتنا", "Services") },
    { to: "/oa-reach", label: "OA REACH" },
    { to: "/works", label: t("أعمالنا", "Our Work") },
    { to: "/contact", label: t("تواصل معنا", "Contact") },
  ];

  const isActive = (to: string) => location.pathname === to;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#1A0E1E]/90 backdrop-blur-xl border-b border-[#D4C9A8]/10" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl overflow-hidden bg-[#1A0E1E] p-0.5 border border-[#E8DFC0]/15">
            <img src={logoImg} alt="O.A Group" className="w-full h-full rounded-lg object-cover" />
          </div>
          <div>
            <span className="text-[#E8DFC0] tracking-[0.15em] block" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1.05rem" }}>O.A GROUP</span>
            <span className="text-[#E8DFC0]/40 block" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.55rem", letterSpacing: "0.15em" }}>
              {t("نصنع الفرق رقميًا", "Dream. We are here")}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.to} to={l.to}
              className={`text-sm transition-colors ${isActive(l.to) ? "text-[#E8DFC0]" : "text-[#E8DFC0]/50 hover:text-[#E8DFC0]"}`}
              style={{ fontFamily: lang === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif" }}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E8DFC0]/20 text-[#E8DFC0]/60 hover:text-[#E8DFC0] hover:border-[#E8DFC0]/40 transition-all text-xs">
            <Globe className="w-3.5 h-3.5" />
            {lang === "ar" ? "EN" : "عربي"}
          </button>
          <Link to="/contact"
            className="px-5 py-2 bg-[#E8DFC0] text-[#1A0E1E] rounded-lg hover:bg-[#D4C9A8] transition-all text-sm"
            style={{ fontFamily: lang === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif", fontWeight: 700 }}>
            {t("ابدأ الآن", "Start Now")}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-[#E8DFC0]">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1A0E1E]/95 backdrop-blur-xl border-t border-[#E8DFC0]/10 px-6 py-6 space-y-4">
          {links.map((l) => (
            <Link key={l.to} to={l.to}
              className={`block text-sm py-2 ${isActive(l.to) ? "text-[#E8DFC0]" : "text-[#E8DFC0]/50"}`}
              style={{ fontFamily: lang === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif" }}>
              {l.label}
            </Link>
          ))}
          <button onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="flex items-center gap-1.5 text-[#E8DFC0]/60 text-sm mt-4">
            <Globe className="w-4 h-4" /> {lang === "ar" ? "English" : "عربي"}
          </button>
        </div>
      )}
    </nav>
  );
}