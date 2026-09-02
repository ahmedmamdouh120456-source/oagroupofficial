import { Outlet, ScrollRestoration } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { LangProvider, useLang } from "./LanguageContext";

function LayoutInner() {
  const { dir } = useLang();
  return (
<div className="min-h-screen w-full overflow-x-hidden flex flex-col"      <Navbar />
      <main className="flex-1">
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
