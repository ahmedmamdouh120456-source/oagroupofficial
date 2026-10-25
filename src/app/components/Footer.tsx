import { Link } from "react-router";
import { Mail, Copy, Check, Phone, Instagram, Facebook, Clock, CalendarOff } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLang } from "./LanguageContext";
import logoImg from "../../imports/540454450_122108095274987112_4613267991255325676_n.jpg";

export function Footer() {
  const { t, lang } = useLang();
  const [copied, setCopied] = useState(false);
  const font = lang === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif";
  const mono = "'JetBrains Mono', monospace";

  const copyEmail = () => {
    navigator.clipboard.writeText("info@oagroupofficial.com");
    setCopied(true);
    toast.success(t("تم نسخ البريد الإلكتروني!", "Email copied to clipboard!"));
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { icon: <Facebook className="w-4 h-4" />, href: "https://www.facebook.com/oaroup", label: "Facebook" },
    { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com/oagroupdigital", label: "Instagram" },
  ];

  const links = [
    { to: "/", label: t("الرئيسية", "Home") },
    { to: "/about", label: t("من نحن", "About Us") },
    { to: "/services", label: t("خدماتنا", "Services") },
    { to: "/works", label: t("أعمالنا", "Our Work") },
    { to: "/global-presence", label: t("حضورنا العالمي", "Global Presence") },
    { to: "/contact", label: t("تواصل معنا", "Contact Us") },
  ];

  const services = [
    t("التسويق الرقمي", "Digital Marketing"),
    t("الجرافيك والموشن", "Graphic & Motion"),
    t("البرمجة والتقنية", "Development & Tech"),
    t("خدمة المودريتور", "Moderator Service"),
    t("التصوير والمونتاج", "Photography & Editing"),
  ];

  const heading = "text-[#E8DFC0] mb-5 text-[0.7rem] uppercase tracking-[0.2em]";

  return (
    <footer className="relative bg-[#120A14] border-t border-[#E8DFC0]/[0.08]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E8DFC0]/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-16 pb-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl overflow-hidden p-0.5 border border-[#E8DFC0]/20 bg-[#1A0E1E]">
                <img src={logoImg} alt="OAGROUP" className="w-full h-full rounded-[9px] object-cover" />
              </div>
              <span className="text-[#E8DFC0] tracking-[0.18em] text-lg" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>OAGROUP</span>
            </Link>
            <p className="text-[#E8DFC0] text-base mb-2" style={{ fontFamily: font, fontWeight: 700 }}>{t("نصنع الفرق رقميًا", "Making the Digital Difference")}</p>
            <p className="text-[#E8DFC0]/45 text-sm leading-relaxed max-w-xs" style={{ fontFamily: font }}>
              {t("وكالة تسويق رقمي دولية — استراتيجية، إبداع، وتنفيذ يصنع نتائج حقيقية.", "An international digital marketing agency — strategy, creativity and execution that deliver real results.")}
            </p>
            <div className="flex items-center gap-2 mt-6">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}
                  className="w-10 h-10 rounded-full border border-[#E8DFC0]/15 flex items-center justify-center text-[#E8DFC0]/60 hover:text-[#1A0E1E] hover:bg-[#E8DFC0] hover:border-[#E8DFC0] transition-all">
                  {s.icon}
                </a>
              ))}
              <span className="ms-2 text-[#E8DFC0]/35 text-xs" style={{ fontFamily: mono }} dir="ltr">@oagroupdigital</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className={heading} style={{ fontFamily: font, fontWeight: 700, letterSpacing: lang === "ar" ? 0 : undefined }}>{t("روابط سريعة", "Quick Links")}</h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[#E8DFC0]/50 hover:text-[#E8DFC0] transition-colors text-sm" style={{ fontFamily: font }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className={heading} style={{ fontFamily: font, fontWeight: 700, letterSpacing: lang === "ar" ? 0 : undefined }}>{t("خدماتنا", "Our Services")}</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-[#E8DFC0]/50 hover:text-[#E8DFC0] transition-colors text-sm" style={{ fontFamily: font }}>{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + hours */}
          <div className="lg:col-span-3">
            <h4 className={heading} style={{ fontFamily: font, fontWeight: 700, letterSpacing: lang === "ar" ? 0 : undefined }}>{t("تواصل معنا", "Get in Touch")}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E8DFC0]/40 shrink-0" />
                <a href="mailto:info@oagroupofficial.com" dir="ltr" className="text-[#E8DFC0]/60 text-xs hover:text-[#E8DFC0] transition-colors break-all" style={{ fontFamily: mono }}>
                  info@oagroupofficial.com
                </a>
                <button onClick={copyEmail} aria-label="Copy email" className="p-1 rounded hover:bg-white/5 text-[#E8DFC0]/35 hover:text-[#E8DFC0]">
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E8DFC0]/40 shrink-0" />
                <a href="https://wa.me/201501158007" target="_blank" rel="noopener noreferrer" dir="ltr" className="text-[#E8DFC0]/60 text-xs hover:text-[#E8DFC0] transition-colors" style={{ fontFamily: mono }}>
                  +20 150 115 8007
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#E8DFC0]/10 bg-[#6B4C8A]/10 p-4 space-y-3">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E8DFC0]/60 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#E8DFC0] text-sm" style={{ fontFamily: font, fontWeight: 700 }}>{t("الأحد – الخميس", "Sunday – Thursday")}</p>
                  <p className="text-[#E8DFC0]/50 text-xs mt-0.5" style={{ fontFamily: mono }} dir="ltr">10:00 AM – 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <CalendarOff className="w-4 h-4 text-[#E8DFC0]/40 shrink-0" />
                <p className="text-[#E8DFC0]/50 text-xs" style={{ fontFamily: font }}>{t("إجازة: الجمعة والسبت", "Closed: Friday & Saturday")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#E8DFC0]/[0.07] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#E8DFC0]/40 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }} dir="ltr">
            ©️ 2026 OAGROUP — All Rights Reserved
          </p>
          <p className="text-[#E8DFC0]/30 text-xs" style={{ fontFamily: font }}>
            {t("شركة عالمية", "An International Company")}
          </p>
        </div>
      </div>
    </footer>
  );
}
