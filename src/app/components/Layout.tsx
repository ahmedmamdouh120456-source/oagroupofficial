import { Outlet, ScrollRestoration } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { LangProvider, useLang } from "./LanguageContext";

function LayoutInner() {
  const { dir } = useLang();

  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-hidden flex flex-col">
      <Navbar />

      <main className="flex-1 min-w-0">
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
