import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { LangProvider, useLang } from "./LanguageContext";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function LayoutInner() {
  const { dir } = useLang();
  return (
    <div className="relative min-h-screen flex flex-col w-full max-w-full overflow-x-hidden" dir={dir} style={{ background: "#1A0E1E", fontFamily: "'Cairo', sans-serif" }}>
      <Navbar />
      <main className="relative flex-1 w-full max-w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  );
}

export function Layout() {
  return (
    <LangProvider>
      <LayoutInner />
    </LangProvider>
  );
}
