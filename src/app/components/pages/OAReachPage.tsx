import { motion } from "motion/react";
import { Link } from "react-router";
import { useLang } from "../LanguageContext";
import { Layers, Bot, BarChart3, Zap, Shield, Target, Phone, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

export function OAReachPage() {
  const { t, lang } = useLang();
  const font = lang === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif";
  const Arrow = lang === "ar" ? ChevronLeft : ChevronRight;

  const features = [
    { icon: <Layers className="w-5 h-5" />, title: t("جمع موحد لكل المنصات", "Unified Platform Collection"), desc: t("واتساب · فيسبوك · إنستجرام · لينكد إن · تيك توك · سناب شات · الإيميلات · المكالمات — جميعها في لوحة تحكم واحدة", "WhatsApp · Facebook · Instagram · LinkedIn · TikTok · Snapchat · Emails · Calls — all in one dashboard") },
    { icon: <Bot className="w-5 h-5" />, title: t("شات بوت ذكاء اصطناعي", "AI Chatbot That Replies Like a Human"), desc: t("ذكاء اصطناعي مخصص لشركتك، يتحدث بأسلوبك، ويبني علاقة حقيقية مع العميل", "AI tailored to your company, speaks your style, builds relationships with clients") },
    { icon: <BarChart3 className="w-5 h-5" />, title: "Lead Scoring", desc: t("كل محادثة تحصل على تقييم من ٠ إلى ١٠٠ يحدد أولوي��ها — ركّز على العملاء الأهم", "Every conversation gets a score out of 100 — focus on what matters") },
    { icon: <Zap className="w-5 h-5" />, title: t("حملات رسائل جماعية", "Bulk Message Campaigns"), desc: t("أرسل لآلاف العملاء في ثانية واحدة عبر جميع القنوات معًا", "Send to thousands of clients in one second across all channels") },
    { icon: <Shield className="w-5 h-5" />, title: t("نظام حماية من الحظر", "Anti-Ban Protection System"), desc: t("تقنية أمان متطورة تحمي حساباتك أثناء الحملات الكبيرة", "Advanced security technology protects your accounts during large campaigns") },
    { icon: <BarChart3 className="w-5 h-5" />, title: t("تحليلات لحظية", "Real-Time Analytics"), desc: t("عدد الرسائل، معدل الاستجابة، التحويلات — كل شيء في الوقت الفعلي", "Message count, response rate, conversions — everything in real-time") },
    { icon: <Phone className="w-5 h-5" />, title: t("قريبًا: مركز اتصال متكامل", "Coming Soon: Full Call Center"), desc: t("نظام مكالمات شامل متصل بجميع قنوات التواصل", "Complete calling system connected to all communication channels"), badge: true },
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at top center, #2D1B30 0%, #1A0E1E 50%, #120A14 100%)" }}>
        {/* Starfield dots */}
        <div className="absolute inset-0">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-[#E8DFC0] rounded-full animate-pulse"
              style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, opacity: Math.random() * 0.15 + 0.03, animationDelay: `${Math.random() * 3}s` }} />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 mb-8">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-xs text-red-400" style={{ fontFamily: "'JetBrains Mono', monospace" }}>LIVE SYSTEM</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-[#E8DFC0] mb-2" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.1em" }}>
            OA REACH
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-[#E8DFC0] mb-6" style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
            {t("تخيّل كل عملائك في مكان واحد", "Imagine All Your Customers in One Place")}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="text-[#E8DFC0]/40 max-w-2xl mx-auto" style={{ fontFamily: font }}>
            {t("منصة واحدة تجمع قنواتك، وترد على عملائك، وتضاعف مبيعاتك — دون أن يضيع عميل واحد.", "One platform that unifies your channels, replies to your customers, and multiplies your sales — without losing a single lead.")}
          </motion.p>

          {/* Channels strip */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {[
              { name: t("واتساب", "WhatsApp"), color: "#25D366" },
              { name: t("فيسبوك", "Facebook"), color: "#1877F2" },
              { name: t("إنستجرام", "Instagram"), color: "#E1306C" },
              { name: t("لينكد إن", "LinkedIn"), color: "#0A66C2" },
              { name: t("تيك توك", "TikTok"), color: "#E8DFC0" },
              { name: t("سناب شات", "Snapchat"), color: "#F7D000" },
              { name: t("الإيميلات", "Emails"), color: "#C9A84C" },
              { name: t("المكالمات", "Calls"), color: "#A87FC4" },
            ].map((c, i) => (
              <motion.span key={c.name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.85 + i * 0.06 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm"
                style={{ borderColor: `${c.color}30`, background: `${c.color}0d`, color: "#E8DFC0", fontFamily: font }}>
                <span className="w-2 h-2 rounded-full" style={{ background: c.color }} />
                {c.name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24" style={{ background: "#150D18" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature list */}
            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-[#1A0E1E] border border-[#E8DFC0]/5 hover:border-[#E8DFC0]/15 transition-all">
                  <div className="p-2.5 rounded-xl bg-[#6B4C8A]/15 text-[#A87FC4] flex-shrink-0">{f.icon}</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[#E8DFC0]" style={{ fontFamily: font, fontWeight: 700 }}>{f.title}</h4>
                      {f.badge && <span className="px-2 py-0.5 text-[10px] rounded-full bg-[#E8DFC0]/10 text-[#E8DFC0]/60" style={{ fontFamily: "'JetBrains Mono', monospace" }}>COMING SOON</span>}
                    </div>
                    <p className="text-[#E8DFC0]/35 text-sm mt-1" style={{ fontFamily: font }}>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Dashboard Mockup */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="bg-[#1A0E1E] border border-[#E8DFC0]/10 rounded-2xl p-6 shadow-[0_0_60px_rgba(107,76,138,0.1)] sticky top-28 self-start">
              {/* Platform tabs */}
              <div className="flex flex-wrap items-center gap-2 mb-5 pb-4 border-b border-[#E8DFC0]/5">
                {[
                  { name: "WhatsApp", color: "#25D366" },
                  { name: "Facebook", color: "#1877F2" },
                  { name: "Instagram", color: "#E1306C" },
                  { name: "LinkedIn", color: "#0A66C2" },
                  { name: "TikTok", color: "#E8DFC0" },
                  { name: "Snapchat", color: "#F7D000" },
                  { name: "Email", color: "#C9A84C" },
                  { name: "Calls", color: "#A87FC4" },
                ].map((p) => (
                  <span key={p.name} className="px-3 py-1.5 text-xs rounded-lg border" style={{ borderColor: `${p.color}30`, color: `${p.color}80`, background: `${p.color}08`, fontFamily: "'DM Sans', sans-serif" }}>
                    <span className="inline-block w-1.5 h-1.5 rounded-full me-1.5" style={{ background: p.color }} />
                    {p.name}
                  </span>
                ))}
              </div>

              {/* Conversations */}
              <div className="space-y-3 mb-5">
                {[
                  { name: "Ahmed", msg: t("عايز أعرف أسعار الباقات", "I want to know package prices"), score: 89, ai: true },
                  { name: "Sara", msg: t("ممكن تفاصيل أكتر؟", "Can I get more details?"), score: 73, ai: false },
                  { name: "Omar", msg: t("عايز أبدأ حملة إعلانية", "I want to start an ad campaign"), score: 92, ai: true },
                  { name: "Fatma", msg: t("شكراً، هبعت البيانات", "Thanks, I'll send the data"), score: 65, ai: true },
                ].map((c) => (
                  <div key={c.name} className="flex items-center justify-between p-3 rounded-xl bg-[#150D18]/80">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#6B4C8A]/20 flex items-center justify-center text-[#A87FC4] text-xs" style={{ fontFamily: font, fontWeight: 700 }}>{c.name[0]}</div>
                      <div>
                        <p className="text-[#E8DFC0] text-sm" style={{ fontFamily: font, fontWeight: 600 }}>{c.name}</p>
                        <p className="text-[#E8DFC0]/30 text-xs" style={{ fontFamily: font }}>{c.msg}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {c.ai && <span className="text-[10px] text-[#A87FC4]">🤖</span>}
                      <span className="text-sm" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: c.score >= 80 ? "#25D366" : c.score >= 70 ? "#E8DFC0" : "#E8DFC0aa" }}>{c.score}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats bar */}
              <div className="p-3 rounded-xl bg-[#6B4C8A]/10 border border-[#6B4C8A]/15 text-center mb-3">
                <p className="text-xs text-[#E8DFC0]/40" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Campaign sent to 1,247 contacts · 68% opened
                </p>
              </div>

              {/* Notification */}
              <div className="p-3 rounded-xl bg-[#E8DFC0]/5 border border-[#E8DFC0]/10">
                <p className="text-xs text-[#E8DFC0]/50" style={{ fontFamily: font }}>
                  🤖 {t("AI رد على Ahmed — السكور اتحدث: 89/100", "AI replied to Ahmed — Score updated: 89/100")}
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-16 text-center">
            <Link to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-[#E8DFC0] to-[#D4C9A8] text-[#1A0E1E] transition-all hover:scale-105"
              style={{ fontFamily: font, fontWeight: 800, fontSize: "1.1rem" }}>
              {t("احجز ديمو مجاني لـ OA REACH", "Book a Free OA REACH Demo")} <Arrow className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}