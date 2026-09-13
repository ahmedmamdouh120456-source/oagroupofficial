import { Outlet, ScrollRestoration } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { LangProvider, useLang } from "./LanguageContext";

function LayoutInner() {
  const { dir } = useLang();
  return (
    <div className="min-h-screen flex flex-col w-full max-w-full overflow-x-hidden" dir={dir} style={{ background: "#241631", fontFamily: "'Cairo', sans-serif" }}>
      <Navbar />
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollRestoration />
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
