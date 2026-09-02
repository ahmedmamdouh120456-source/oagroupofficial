import { motion } from "motion/react";
import { Link } from "react-router";
import { useLang } from "../LanguageContext";
import { Palette, Monitor, Megaphone, Camera, PenTool, Code, Smartphone, Database, Search, BarChart3, Share2, ChevronLeft, ChevronRight, CheckCircle2, MessagesSquare, Clock, UserCheck, ShieldCheck, Headphones } from "lucide-react";

export function ServicesPage() {
  const { t, lang } = useLang();
  const font = lang === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif";
  const Arrow = lang === "ar" ? ChevronLeft : ChevronRight;

  const services = [
    {
      num: "01",
      icon: <Palette className="w-8 h-8" />,
      title: t("الجرافيك والموشن", "Graphic & Motion Design"),
      desc: t("نصمّم لك هوية بصرية متكاملة، محتوى سوشيال ميديا احترافي، وفيديوهات موشن جرافيك تشرح منتجك وتبيعه بطريقة مبتكرة تلفت الانتباه.", "We design a complete visual identity, professional social media content, and motion graphics videos that explain your product and sell it in an innovative, attention-grabbing way."),
      color: "#E8DFC0",
      items: [
        { icon: <PenTool className="w-4 h-4" />, label: t("تصميم هوية بصرية متكاملة", "Complete Visual Identity Design") },
        { icon: <Camera className="w-4 h-4" />, label: t("تصميمات سوشيال ميديا", "Social Media Design") },
        { icon: <Palette className="w-4 h-4" />, label: t("فيديوهات موشن جرافيك", "Motion Graphics Videos") },
        { icon: <Share2 className="w-4 h-4" />, label: t("محتوى ريلز وتيك توك", "Reels & TikTok Content") },
        { icon: <Camera className="w-4 h-4" />, label: t("تصوير احترافي للمنتجات", "Professional Product Photography") },
      ],
    },
    {
      num: "02",
      icon: <Monitor className="w-8 h-8" />,
      title: t("البرمجة والتقنية", "Development & Technology"),
      desc: t("نبني لك مواقع إلكترونية، تطبيقات موبايل، وأنظمة إدارة مخصصة بأحدث التقنيات. حلول برمجية تعمل في خدمة عملك على مدار الساعة.", "We build websites, mobile apps, and custom management systems with the latest technologies. Software solutions that work for your business around the clock."),
      color: "#A87FC4",
      items: [
        { icon: <Code className="w-4 h-4" />, label: t("تطوير مواقع إلكترونية احترافية", "Professional Website Development") },
        { icon: <Smartphone className="w-4 h-4" />, label: t("تطبيقات موبايل (iOS & Android)", "Mobile Apps (iOS & Android)") },
        { icon: <Database className="w-4 h-4" />, label: t("أنظمة إدارة مخصصة", "Custom Management Systems") },
        { icon: <Code className="w-4 h-4" />, label: t("ربط وتكامل الأنظمة (APIs)", "System Integration (APIs)") },
        { icon: <Monitor className="w-4 h-4" />, label: t("متاجر إلكترونية متكاملة", "Complete E-commerce Stores") },
      ],
    },
    {
      num: "03",
      icon: <Megaphone className="w-8 h-8" />,
      title: t("التسويق الرقمي", "Digital Marketing"),
      desc: t("حملات إعلانية ذكية ومدروسة على جميع المنصات — Meta، Google، TikTok، Snapchat — بنتائج مضمونة وقابلة للقياس والتحليل.", "Smart, well-planned ad campaigns across all platforms — Meta, Google, TikTok, Snapchat — with guaranteed, measurable, and analyzable results."),
      color: "#6B4C8A",
      items: [
        { icon: <Megaphone className="w-4 h-4" />, label: t("إعلانات ممولة (Meta & Google)", "Paid Advertising (Meta & Google)") },
        { icon: <Search className="w-4 h-4" />, label: t("تحسين محركات البحث (SEO)", "Search Engine Optimization (SEO)") },
        { icon: <BarChart3 className="w-4 h-4" />, label: t("بناء استراتيجية محتوى", "Content Strategy Development") },
        { icon: <BarChart3 className="w-4 h-4" />, label: t("تحليلات وتقارير أداء", "Performance Analytics & Reports") },
        { icon: <Share2 className="w-4 h-4" />, label: t("إدارة حسابات التواصل الاجتماعي", "Social Media Account Management") },
      ],
    },
    {
      num: "04",
      icon: <MessagesSquare className="w-8 h-8" />,
      title: t("خدمة المودريتور", "Moderator Service"),
      desc: t("فريق متخصص يرد على رسائل وتعليقات صفحاتك على مدار الساعة باحترافية تامة. نحوّل كل تفاعل إلى فرصة بيع حقيقية ونبني علاقة قوية مع جمهورك.", "A specialized team that responds to your page messages and comments around the clock with complete professionalism. We turn every interaction into a real sales opportunity and build strong relationships with your audience."),
      color: "#E8DFC0",
      items: [
        { icon: <Headphones className="w-4 h-4" />, label: t("الرد على رسائل الصفحات والحسابات", "Responding to Page Messages & DMs") },
        { icon: <MessagesSquare className="w-4 h-4" />, label: t("إدارة التعليقات والتفاعلات", "Managing Comments & Interactions") },
        { icon: <Clock className="w-4 h-4" />, label: t("تغطية على مدار الساعة", "Around-the-Clock Coverage") },
        { icon: <UserCheck className="w-4 h-4" />, label: t("تحويل الاستفسارات إلى عملاء", "Converting Inquiries Into Clients") },
        { icon: <ShieldCheck className="w-4 h-4" />, label: t("حماية سمعة العلامة التجارية", "Brand Reputation Protection") },
      ],
    },
  ];

  return (
    <div className="pt-24">
      <section className="py-20" style={{ background: "radial-gradient(ellipse at 50% 20%, #2D1B30 0%, #1A0E1E 60%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
            <span className="text-[#E8DFC0]/30 tracking-[0.2em] text-xs mb-4 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {lang === "ar" ? "خدماتنا" : "OUR SERVICES"}
            </span>
            <h1 className="text-[#E8DFC0] mb-4" style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              {t("ترسانتنا الكاملة", "Our Full Arsenal")}
            </h1>
            <p className="text-[#E8DFC0]/35 max-w-xl mx-auto" style={{ fontFamily: font }}>
              {t("كل ما تحتاجه لكي يتواجد براندك، ويتميز، ويحقق مبيعات حقيقية — في مكان واحد.", "Everything you need for your brand to exist, stand out, and achieve real sales — all in one place.")}
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((s, i) => (
              <motion.div key={s.num} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 items-start">
                <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: `${s.color}12`, border: `1px solid ${s.color}25`, color: s.color }}>
                      {s.icon}
                    </div>
                    <div>
                      <span className="text-[#E8DFC0]/15 block" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "0.75rem" }}>{s.num}</span>
                      <h2 className="text-[#E8DFC0]" style={{ fontFamily: font, fontWeight: 900, fontSize: "1.5rem" }}>{s.title}</h2>
                    </div>
                  </div>
                  <p className="text-[#E8DFC0]/40 text-sm leading-relaxed mb-8" style={{ fontFamily: font }}>{s.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm transition-all"
                    style={{ background: `${s.color}15`, border: `1px solid ${s.color}30`, color: s.color, fontFamily: font, fontWeight: 700 }}>
                    {t("اطلب هذه الخدمة", "Request This Service")} <Arrow className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="bg-[#150D18] border border-[#E8DFC0]/5 rounded-2xl p-8 space-y-4">
                    {s.items.map((item, j) => (
                      <motion.div key={j} initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: j * 0.08 }}
                        className="flex items-center gap-3">
                        <div className="text-[#E8DFC0]/20">{item.icon}</div>
                        <span className="text-[#E8DFC0]/50 text-sm" style={{ fontFamily: font }}>{item.label}</span>
                        <CheckCircle2 className="w-4 h-4 text-[#E8DFC0]/10 ms-auto" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24" style={{ background: "#150D18" }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-[#E8DFC0] text-center mb-16" style={{ fontFamily: font, fontWeight: 900, fontSize: "2rem" }}>
            {t("كيف نعمل؟", "How Do We Work?")}
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: t("نسمعك", "We Listen"), desc: t("نفهم طبيعة عملك وأهدافك بالتفصيل", "We understand your business and goals in detail") },
              { step: "02", title: t("نخطط", "We Plan"), desc: t("نضع استراتيجية مبنية على بيانات حقيقية", "We create a strategy based on real data") },
              { step: "03", title: t("ننفذ", "We Execute"), desc: t("ننفذ بأعلى معايير الجودة والسرعة", "We execute with the highest quality and speed standards") },
              { step: "04", title: t("نطوّر", "We Optimize"), desc: t("نحلل النتائج ونطور الأداء باستمرار", "We analyze results and continuously improve performance") },
            ].map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-[#1A0E1E] border border-[#E8DFC0]/5">
                <span className="text-[#E8DFC0]/10 block mb-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "2rem" }}>{p.step}</span>
                <h3 className="text-[#E8DFC0] mb-2" style={{ fontFamily: font, fontWeight: 800 }}>{p.title}</h3>
                <p className="text-[#E8DFC0]/30 text-sm" style={{ fontFamily: font }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}