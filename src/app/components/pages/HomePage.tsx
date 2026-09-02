import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight, Play, Sparkles, Zap, Target, MessageCircle, Camera, Palette as PaletteIcon, Code, TrendingUp, ExternalLink, Video } from "lucide-react";
import { useLang } from "../LanguageContext";
import { PartnersSection } from "../PartnersSection";
import characterImg from "../../../imports/2-1.jpg";
import mishkahLogo from "../../../imports/w-mishkah.png";
import ejazaLogo from "../../../imports/w-ejaza.png";
import g3aLogo from "../../../imports/w-g3a.png";
import debeerLogo from "../../../imports/w-debeer.png";
import morshedLogo from "../../../imports/w-morshed.png";
import motahedaLogo from "../../../imports/w-motaheda.png";
import marolaLogo from "../../../imports/w-marola.png";
import { useEffect, useState, useRef } from "react";

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(current);
    }, 30);
    return () => clearInterval(interval);
  }, [started, target]);
  return (
    <motion.span onViewportEnter={() => setStarted(true)}
      style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "clamp(1.8rem, 5vw, 2.4rem)" }}
      className="text-[#E8DFC0]">
      {count}+{suffix}
    </motion.span>
  );
}

/* ─── Typing Text Effect ─── */
function TypedText({ texts, font }: { texts: string[]; font: string }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, texts]);

  return (
    <span style={{ fontFamily: font }}>
      {displayed}
      <span className="animate-pulse text-[#C9A84C]">|</span>
    </span>
  );
}

/* ─── Service Icon Component ─── */
function ServiceIcon({ icon: Icon, color }: { icon: React.ElementType; color: string }) {
  return (
    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-12 h-12 rounded-2xl flex items-center justify-center"
      style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
      <Icon className="w-5 h-5" style={{ color }} />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════ */
export function HomePage() {
  const { t, lang } = useLang();
  const font = lang === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif";
  const Arrow = lang === "ar" ? ChevronLeft : ChevronRight;
  const heroRef = useRef<HTMLDivElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  const typedTexts = lang === "ar"
    ? ["نصمّم", "نصوّر", "نسوّق", "نبرمج", "نبدع"]
    : ["Design", "Photograph", "Market", "Develop", "Create"];

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 60% 40%, #2D1B30 0%, #1A0E1E 50%, #120A14 100%)" }}>
        {/* Static glow orbs (soft radial gradients — no filter cost) */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(107,76,138,0.16), transparent 65%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.09), transparent 65%)" }} />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(rgba(232,223,192,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(232,223,192,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />

        <div
          className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center pt-28 md:pt-32 pb-20 md:pb-20">
          <div>
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#E8DFC0]/15 bg-[#E8DFC0]/[0.03] mb-10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <span className="text-xs tracking-[0.2em] text-[#E8DFC0]/40" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{t("شركة عالمية", "INTERNATIONAL COMPANY")}</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
              style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(2.8rem, 6vw, 4.5rem)", lineHeight: 1.1 }}>
              <span className="bg-gradient-to-l from-[#E8DFC0] via-[#C9A84C] to-[#E8DFC0] bg-clip-text text-transparent">
                {t("نصنع علامتك", "We Build Your Brand")}
              </span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }}
              className="my-3 flex items-center gap-4">
              <div className="h-[3px] w-12 bg-gradient-to-r from-[#6B4C8A] to-transparent rounded-full" />
              <span className="text-[#E8DFC0]/20 tracking-[0.3em] text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {t("ونحنا", "AND WE")}
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.6 }}
              className="text-[#E8DFC0]"
              style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.1 }}>
              <TypedText texts={typedTexts} font={font} />
            </motion.h1>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.8 }}
              className="mt-2"
              style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1.1 }}>
              <span className="bg-gradient-to-l from-[#6B4C8A] to-[#A87FC4] bg-clip-text text-transparent">
                {t("ونوصّلها للعالم", "And Deliver It to the World")}
              </span>
            </motion.h1>

            {/* Tags */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
              className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: PaletteIcon, label: t("تصميم", "Design") },
                { icon: Camera, label: t("تصوير", "Photography") },
                { icon: TrendingUp, label: t("تسويق", "Marketing") },
                { icon: Code, label: t("برمجة", "Development") },
                { icon: MessageCircle, label: t("مودريتور", "Moderation") },
              ].map((tag, i) => (
                <motion.span key={tag.label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.3 + i * 0.1 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E8DFC0]/[0.04] border border-[#E8DFC0]/8 text-[#E8DFC0]/35 text-xs"
                  style={{ fontFamily: font }}>
                  <tag.icon className="w-3 h-3" />{tag.label}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }}
              className="mt-10 flex flex-wrap gap-4">
              <Link to="/services"
                className="group px-7 py-3.5 bg-gradient-to-r from-[#E8DFC0] to-[#C9A84C] text-[#1A0E1E] rounded-xl flex items-center gap-2 hover:shadow-[0_0_30px_rgba(232,223,192,0.2)] transition-all duration-500"
                style={{ fontFamily: font, fontWeight: 700 }}>
                {t("اكتشف خدماتنا", "Discover Our Services")}
                <Arrow className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button onClick={() => setShowVideo(true)}
                className="group px-7 py-3.5 border border-[#6B4C8A]/50 text-[#A87FC4] rounded-xl hover:bg-[#6B4C8A]/10 transition-all duration-300 flex items-center gap-2"
                style={{ fontFamily: font, fontWeight: 700 }}>
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" />
                {t("شاهد الشوريل", "Watch Showreel")}
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
              className="mt-14 flex gap-8 md:gap-12">
              {[
                { target: 5, label: t("سنوات خبرة", "Years") },
                { target: 100, label: t("مشروع", "Projects") },
                { target: 40, label: t("علامة تجارية", "Brands") },
              ].map((s) => (
                <div key={s.label}>
                  <AnimatedCounter target={s.target} />
                  <div className="h-[2px] w-8 mt-2 mb-1.5 rounded-full bg-gradient-to-r from-[#C9A84C] to-transparent" />
                  <div className="text-[#E8DFC0]/25 text-xs" style={{ fontFamily: font }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div initial={{ opacity: 0, scale: 0.85, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.2, delay: 0.5 }}
            className="relative flex justify-center w-full max-w-sm sm:max-w-md md:max-w-none mx-auto mt-4 md:mt-0">
            <div className="absolute inset-0 rounded-[3rem] scale-90" style={{ background: "radial-gradient(circle, rgba(107,76,138,0.28), transparent 70%)" }} />
            {/* Decorative ring */}
            <div className="absolute -inset-3 md:-inset-4 rounded-[3rem] border border-dashed border-[#6B4C8A]/15" />
            <img src={characterImg} alt="OA Group" className="relative z-10 w-full max-w-lg rounded-3xl border border-[#E8DFC0]/15 ring-1 ring-[#C9A84C]/15 shadow-[0_30px_90px_rgba(0,0,0,0.55)]" />
            {/* Floating badges — very subtle float (~3%) */}
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 md:top-8 start-1 md:-start-6 z-20 px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-[#1A0E1E] border border-[#E8DFC0]/10 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-[#E8DFC0] text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{t("إبداع بلا حدود", "CREATIVE STUDIO")}</span>
            </motion.div>
            <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 md:bottom-12 end-1 md:-end-6 z-20 px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-[#1A0E1E] border border-[#6B4C8A]/20 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#A87FC4]" />
              <span className="text-[#E8DFC0] text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>OA REACH</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-[#E8DFC0]/20 text-[10px] tracking-[0.3em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>SCROLL</span>
          <div className="w-5 h-8 rounded-full border border-[#E8DFC0]/15 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-[#E8DFC0]/30" />
          </div>
        </motion.div>
      </section>

      {/* ═══ VIDEO SHOWREEL SECTION ═══ */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #120A14 0%, #1A0E1E 50%, #150D18 100%)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-12">
            <span className="text-[#6B4C8A]/50 tracking-[0.2em] text-xs mb-4 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {t("شاهدنا", "SHOWREEL")}
            </span>
            <h2 className="text-[#E8DFC0] mb-3" style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(1.6rem, 4vw, 2rem)" }}>
              {t("شغلنا بيتكلم عننا", "Our Work Speaks Volumes")}
            </h2>
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="relative rounded-2xl overflow-hidden border border-[#E8DFC0]/5"
>
  <div className="aspect-video bg-[#1A0E1E] relative overflow-hidden">
    <video
      src="/showreel.mp4"
      controls
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      Your browser does not support the video tag.
    </video>
  </div>
</motion.div>
</div>
</section>

      {/* ═══ SERVICES PREVIEW ═══ */}
      <section className="py-16 md:py-28 relative" style={{ background: "#150D18" }}>
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(107,76,138,0.08), transparent 65%)" }} />
        
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-20">
            <span className="text-[#6B4C8A]/50 tracking-[0.2em] text-xs mb-4 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {t("خدماتنا", "SERVICES")}
            </span>
            <h2 className="text-[#E8DFC0] mb-4" style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(1.8rem, 5vw, 2.5rem)" }}>
              {t("ترسانتنا الكاملة", "Our Full Arsenal")}
            </h2>
            <p className="text-[#E8DFC0]/25 text-sm max-w-md mx-auto" style={{ fontFamily: font }}>
              {t("حلول إبداعية وتسويقية متكاملة — من الفكرة للتنفيذ", "Complete creative & marketing solutions — from idea to execution")}
            </p>
          </motion.div>

          {/* Bento layout: 3+3 top row, 2+2+2 bottom row on desktop */}
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-6">
            {[
              { num: "01", icon: PaletteIcon, span: "lg:col-span-3", title: t("الجرافيك والموشن", "Graphic & Motion"), desc: t("هويات بصرية، تصميمات سوشيال ميديا، وفيديوهات موشن جرافيك احترافية", "Visual identities, social media designs, and professional motion graphics"), tags: [t("هوية بصرية", "Brand Identity"), t("موشن", "Motion"), t("ريلز", "Reels")], color: "#E8DFC0" },
              { num: "02", icon: Code, span: "lg:col-span-3", title: t("البرمجة والتقنية", "Development & Tech"), desc: t("مواقع إلكترونية، تطبيقات موبايل، وأنظمة مخصصة تعمل على مدار الساعة", "Websites, mobile apps, and custom systems working 24/7"), tags: [t("مواقع", "Web"), t("تطبيقات", "Apps")], color: "#A87FC4" },
              { num: "03", icon: Target, span: "lg:col-span-2", title: t("التسويق الرقمي", "Digital Marketing"), desc: t("حملات ذكية ومدروسة على جميع المنصات بنتائج قابلة للقياس", "Smart campaigns across all platforms with measurable results"), tags: [t("إعلانات", "Ads"), "SEO", "Meta"], color: "#6B4C8A" },
              { num: "04", icon: MessageCircle, span: "lg:col-span-2", title: t("خدمة المودريتور", "Moderator Service"), desc: t("فريق متخصص يرد على رسائل وتعليقات صفحاتك باحترافية ٢٤/٧", "Specialized team responding to your page messages professionally 24/7"), tags: [t("ردود", "Replies"), t("مبيعات", "Sales")], color: "#C9A84C" },
              { num: "05", icon: Video, span: "lg:col-span-2", title: t("التصوير والمونتاج", "Photography & Editing"), desc: t("تصوير احترافي للمنتجات والفعاليات، ومونتاج فيديو بتصحيح ألوان ومؤثرات", "Professional product & event shooting, plus video editing with color grading & effects"), tags: [t("تصوير", "Photo"), t("مونتاج", "Editing"), t("ألوان", "Grading")], color: "#A87FC4" },
            ].map((s, i) => (
              <motion.div key={s.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`${s.span} group relative bg-[#150D18] rounded-2xl p-7 md:p-8 overflow-hidden transition-transform duration-300 hover:-translate-y-1`}
                style={{ border: "1px solid rgba(232,223,192,0.07)" }}>
                {/* Top accent line in the card's own color */}
                <div className="absolute top-0 start-0 h-[3px] w-16 rounded-full" style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }} />
                <span className="absolute top-4 end-5 text-[#E8DFC0]/[0.05]"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}>{s.num}</span>
                <ServiceIcon icon={s.icon} color={s.color} />
                <h3 className="text-[#E8DFC0] mt-5 mb-2" style={{ fontFamily: font, fontWeight: 800, fontSize: "1.15rem" }}>{s.title}</h3>
                <p className="text-[#E8DFC0]/35 text-sm mb-5 leading-relaxed max-w-md" style={{ fontFamily: font }}>{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 text-xs rounded-full bg-[#E8DFC0]/[0.03] text-[#E8DFC0]/35 border border-[#E8DFC0]/[0.06]" style={{ fontFamily: font }}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center mt-14">
            <Link to="/services" className="group inline-flex items-center gap-2 text-[#E8DFC0]/40 hover:text-[#E8DFC0] transition-colors text-sm" style={{ fontFamily: font }}>
              {t("تعرف على جميع خدماتنا", "Explore All Our Services")}
              <Arrow className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ REAL CLIENTS ═══ */}
      <section className="py-16 md:py-28 relative" style={{ background: "#1A0E1E" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
            <span className="text-[#C9A84C]/40 tracking-[0.2em] text-xs mb-4 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {t("ثقة عملئنا", "CLIENT TRUST")}
            </span>
            <h2 className="text-[#E8DFC0] mb-3" style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(1.7rem, 4.5vw, 2.2rem)" }}>
              {t("عملاء وثقوا بنا", "Clients Who Trusted Us")}
            </h2>
          </motion.div>

          {/* Client Logos Marquee */}
          <div className="relative overflow-hidden mb-14">
            <div className="absolute start-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #1A0E1E, transparent)" }} />
            <div className="absolute end-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #1A0E1E, transparent)" }} />
            <div className="flex w-max items-center" style={{ animation: "marquee 40s linear infinite" }}>
              {[0, 1].map((set) => (
                [
                  { name: t("الجامعة الإسلامية بأمريكا الشمالية (مشكاة)", "Islamic University of North America (Mishkah)"), logo: mishkahLogo },
                  { name: t("إجازة أونلاين", "Ejaza Online"), logo: ejazaLogo },
                  { name: t("المرشد الأزهري", "Al-Morshd Al-Azhary"), logo: morshedLogo },
                  { name: t("المتحدة للأخشاب", "Al Motaheda Wood"), logo: motahedaLogo },
                  { name: t("وود مارولا", "Wood Marola"), logo: marolaLogo },
                  { name: t("G3A — عبد الله قدري", "G3A — Abdullah Kadry"), logo: g3aLogo },
                  { name: t("دي بير", "De Beer Refinish"), logo: debeerLogo },
                ].map((c, i) => (
                  <div key={`${set}-${i}`} title={c.name} className="flex-shrink-0 h-16 w-36 ms-14 flex items-center justify-center">
                    <img src={c.logo} alt={c.name}
                      className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))
              ))}
            </div>
          </div>

          {/* Trust bar under the logos */}
          <div className="mt-4 flex flex-col items-center gap-6">
            <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-[#E8DFC0]/10 to-transparent" />
            <p className="text-[#E8DFC0]/30 text-sm text-center max-w-lg" style={{ fontFamily: font }}>
              {t("علامات تجارية في مصر والسعودية والخليج اختارت O.A Group لبناء حضورها الرقمي", "Brands across Egypt, Saudi Arabia & the Gulf chose O.A Group to build their digital presence")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: Sparkles, label: t("جودة إبداعية عالية", "Premium Creative") },
                { icon: Zap, label: t("تسليم سريع وملتزم", "Fast & Reliable") },
                { icon: Target, label: t("نتائج قابلة للقياس", "Measurable Results") },
              ].map((chip) => (
                <div key={chip.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8DFC0]/[0.03] border border-[#E8DFC0]/[0.07]">
                  <chip.icon className="w-3.5 h-3.5 text-[#C9A84C]" />
                  <span className="text-[#E8DFC0]/45 text-xs" style={{ fontFamily: font }}>{chip.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #2D1B30 0%, #1A0E1E 50%, #120A14 100%)" }}>
        <div className="absolute inset-0 mx-auto w-1/2 h-full rounded-full" style={{ background: "radial-gradient(circle, rgba(107,76,138,0.10), transparent 65%)" }} />
        {/* Decorative lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6B4C8A]/20 to-transparent" />
        
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <span className="text-[#C9A84C]/40 tracking-[0.2em] text-xs mb-6 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {t("ابدأ الآن", "START NOW")}
            </span>
            <h2 className="text-[#E8DFC0] mb-5" style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
              {t("جاهز نصنع قصة نجاحك؟", "Ready to Build Your Success Story?")}
            </h2>
            <p className="text-[#E8DFC0]/30 mb-10 text-sm" style={{ fontFamily: font }}>
              {t("فريقنا في مصر والسعودية جاهز يساعدك تبدأ", "Our team in Egypt and Saudi Arabia is ready to help you start")}
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact"
              className="group px-8 py-3.5 bg-gradient-to-r from-[#E8DFC0] to-[#C9A84C] text-[#1A0E1E] rounded-xl hover:shadow-[0_0_40px_rgba(232,223,192,0.15)] transition-all duration-500 flex items-center gap-2"
              style={{ fontFamily: font, fontWeight: 700 }}>
              {t("تواصل معنا الآن", "Contact Us Now")}
              <Arrow className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://wa.me/201501158007" target="_blank" rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#25D366]/90 text-white rounded-xl hover:bg-[#25D366] hover:shadow-[0_0_30px_rgba(37,211,102,0.2)] transition-all duration-500 flex items-center gap-2"
              style={{ fontFamily: font, fontWeight: 700 }}>
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {t("واتساب مباشر", "WhatsApp Direct")}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══ PARTNERS (last section) ═══ */}
      <PartnersSection />

      {/* ═══ VIDEO MODAL ═══ */}
      <AnimatePresence>
        {showVideo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setShowVideo(false)}>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
              className="w-full max-w-lg text-center" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-end mb-4">
                <button onClick={() => setShowVideo(false)} className="text-white/50 hover:text-white text-sm flex items-center gap-2">
                  {t("إغلاق", "Close")} ✕
                </button>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#1A0E1E] p-10 flex flex-col items-center gap-6">
                {/* Decorative circles */}
                <div className="relative w-28 h-28">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-dashed border-[#6B4C8A]/30" />
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-3 rounded-full border border-[#E8DFC0]/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-10 h-10 text-[#E8DFC0] ms-1" fill="currentColor" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[#E8DFC0] mb-2" style={{ fontFamily: font, fontWeight: 800, fontSize: "1.3rem" }}>
                    {t("شاهد شغلنا على فيسبوك", "Watch Our Work on Facebook")}
                  </h3>
                  <p className="text-[#E8DFC0]/30 text-sm mb-6" style={{ fontFamily: font }}>
                    {t("هتلاقي كل فيديوهاتنا وأعمالنا على صفحتنا الرسمية", "Find all our videos and work on our official page")}
                  </p>
                </div>
                <a href="https://www.facebook.com/oaroup/videos" target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#1877F2] text-white rounded-xl hover:bg-[#166FE5] hover:shadow-[0_0_30px_rgba(24,119,242,0.3)] transition-all duration-500"
                  style={{ fontFamily: font, fontWeight: 700 }}>
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  {t("افتح صفحة OAGROUP", "Open OAGROUP Page")}
                  <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
              <p className="text-white/20 text-xs text-center mt-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                OAGROUP — Official Page
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}