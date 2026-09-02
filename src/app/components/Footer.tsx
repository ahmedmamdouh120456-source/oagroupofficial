import { Link } from "react-router";
import { Mail, Copy, Check, Phone, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLang } from "./LanguageContext";
import logoImg from "../../imports/540454450_122108095274987112_4613267991255325676_n.jpg";

export function Footer() {
  const { t, lang } = useLang();
  const [copied, setCopied] = useState(false);
  const font = lang === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif";

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

  return (
    <footer className="relative pt-16 pb-6" style={{ background: "#120A14", borderTop: "1px solid rgba(228,223,192,0.08)" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8DFC0]/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#1A0E1E] p-0.5 border border-[#E8DFC0]/15">
                <img src={logoImg} alt="O.A Group" className="w-full h-full rounded-md object-cover" />
              </div>
              <span className="text-[#E8DFC0] tracking-[0.15em]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>O.A GROUP</span>
            </div>
            <p className="text-[#E8DFC0] text-sm mb-1" style={{ fontFamily: font, fontWeight: 700 }}>{t("نصنع الفرق رقميًا", "Making the Digital Difference")}</p>
            <p className="text-[#E8DFC0]/40 text-xs" style={{ fontFamily: font }}>{t("وكالة تسويق رقمي", "Digital Marketing Agency")}</p>
            <p className="text-[#E8DFC0]/30 text-xs mt-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>OAGROUP · {t("شركة عالمية", "INTERNATIONAL COMPANY")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#E8DFC0] mb-4 text-sm" style={{ fontFamily: font, fontWeight: 700 }}>{t("روابط سريعة", "Quick Links")}</h4>
            <div className="space-y-2">
              {[
                { to: "/", label: t("الرئيسية", "Home") },
                { to: "/about", label: t("من نحن", "About Us") },
                { to: "/services", label: t("خدماتنا", "Our Services") },
                { to: "/oa-reach", label: "OA REACH" },
                { to: "/works", label: t("أعمالنا", "Our Work") },
                { to: "/global-presence", label: t("حضورنا العالمي", "Global Presence") },
                { to: "/contact", label: t("تواصل معنا", "Contact Us") },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="block text-[#E8DFC0]/40 hover:text-[#E8DFC0] transition-colors text-sm" style={{ fontFamily: font }}>{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#E8DFC0] mb-4 text-sm" style={{ fontFamily: font, fontWeight: 700 }}>{t("خدماتنا", "Our Services")}</h4>
            <div className="space-y-2 text-sm text-[#E8DFC0]/40">
              <p style={{ fontFamily: font }}>{t("التسويق الرقمي", "Digital Marketing")}</p>
              <p style={{ fontFamily: font }}>{t("الجرافيك والموشن", "Graphic & Motion")}</p>
              <p style={{ fontFamily: font }}>{t("البرمجة والتقنية", "Development & Tech")}</p>
              <p style={{ fontFamily: font }}>{t("خدمة المودريتور", "Moderator Service")}</p>
              <p style={{ fontFamily: font }}>{t("التصوير والمونتاج", "Photography & Editing")}</p>
              <p style={{ fontFamily: font }}>OA REACH</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#E8DFC0] mb-4 text-sm" style={{ fontFamily: font, fontWeight: 700 }}>{t("تواصل معنا", "Contact Us")}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E8DFC0]/40 flex-shrink-0" />
                <a href="mailto:info@oagroupofficial.com"
                  className="text-[#E8DFC0]/50 text-xs hover:text-[#E8DFC0] transition-all hover:drop-shadow-[0_0_8px_rgba(228,223,192,0.3)]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  info@oagroupofficial.com
                </a>
                <button onClick={copyEmail} className="p-1 rounded hover:bg-white/5 text-[#E8DFC0]/30 hover:text-[#E8DFC0]">
                  {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E8DFC0]/40 flex-shrink-0" />
                <span className="text-[#E8DFC0]/50 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>+20 150 115 8007</span>
              </div>
            </div>

            {/* Social Media */}
            <h4 className="text-[#E8DFC0] mt-6 mb-3 text-sm" style={{ fontFamily: font, fontWeight: 700 }}>{t("تابعنا على", "Follow Us")}</h4>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#E8DFC0]/5 border border-[#E8DFC0]/10 flex items-center justify-center text-[#E8DFC0]/40 hover:text-[#E8DFC0] hover:border-[#E8DFC0]/30 hover:bg-[#E8DFC0]/10 transition-all"
                  title={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#E8DFC0]/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#E8DFC0]/30 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {t("© ٢٠٢٦ O.A GROUP — جميع الحقوق محفوظة", "© 2026 O.A GROUP — All Rights Reserved")}
          </p>
          <p className="text-[#E8DFC0]/20 text-xs" style={{ fontFamily: font }}>
            {t("شركة عالمية", "An International Company")}
          </p>
        </div>
      </div>
    </footer>
  );
}