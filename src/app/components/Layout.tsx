import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { LangProvider, useLang } from "./LanguageContext";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

function LayoutInner() {
  const { dir } = useLang();
  return (
    <div
      className="relative min-h-screen flex flex-col w-full"
      dir={dir}
      style={{ background: "#1A0E1E", fontFamily: "'Cairo', sans-serif", overflowX: "clip" }}
    >
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
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
