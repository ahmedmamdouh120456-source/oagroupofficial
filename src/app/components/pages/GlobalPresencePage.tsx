import { motion } from "motion/react";
import { Link } from "react-router";
import { useLang } from "../LanguageContext";
import { Globe2, ArrowUpRight, ChevronLeft, ChevronRight, Camera, Film, Sparkles, Wand2, Scissors, ExternalLink, MapPin } from "lucide-react";
import siffahPreview from "../../../imports/image-4.png";
import fxStudioLocation from "../../../imports/image-5.png";

export function GlobalPresencePage() {
  const { t, lang } = useLang();
  const font = lang === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif";
  const mono = "'JetBrains Mono', monospace";
  const Arrow = lang === "ar" ? ChevronLeft : ChevronRight;

  const fxKeywords = [
    { icon: <Camera className="w-4 h-4" />, label: t("التصوير", "Photography") },
    { icon: <Film className="w-4 h-4" />, label: t("إنتاج الفيديو", "Video Production") },
    { icon: <Sparkles className="w-4 h-4" />, label: t("المحتوى الإبداعي", "Creative Content") },
    { icon: <Wand2 className="w-4 h-4" />, label: t("الإنتاج", "Production") },
    { icon: <Scissors className="w-4 h-4" />, label: t("المعالجة النهائية", "Post-Production") },
  ];

  const ecosystem = [
    { key: "OAGROUP", desc: t("التسويق الرقمي والاستراتيجية الإبداعية", "Digital Marketing & Creative Strategy"), color: "#E8DFC0" },
    { key: "SIFFAH", desc: t("الحضور الإبداعي في السعودية", "Creative Presence in Saudi Arabia"), color: "#C9A84C" },
    { key: "FXSTUDIO", desc: t("استوديو الإنتاج البصري والمحتوى", "Visual Production & Content Studio"), color: "#A87FC4" },
  ];

  return (
    <div className="pt-24">
      {/* ═══ HERO ═══ */}
      <section className="relative py-20 md:py-32 overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 30%, #2D1B30 0%, #1A0E1E 55%, #120A14 100%)" }}>
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(rgba(232,223,192,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(232,223,192,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
        {/* Rotating globe rings */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 end-[-10%] w-[520px] h-[520px] border border-[#6B4C8A]/10 rounded-full hidden md:block" />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 end-[2%] w-[360px] h-[360px] border border-[#E8DFC0]/[0.06] rounded-full hidden md:block" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }} transition={{ duration: 9, repeat: Infinity }}
          className="absolute top-1/3 start-1/4 w-[500px] h-[500px] bg-[#6B4C8A] rounded-full blur-[170px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E8DFC0]/15 bg-[#E8DFC0]/[0.03] mb-8">
            <Globe2 className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span className="text-xs tracking-[0.2em] text-[#E8DFC0]/50" style={{ fontFamily: mono }}>GLOBAL PRESENCE</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(2.4rem, 6vw, 4.2rem)", lineHeight: 1.1 }}>
            <span className="text-[#E8DFC0]">{t("أبعد من مصر.", "More Than Egypt.")}</span>
            <br />
            <span className="bg-gradient-to-l from-[#C9A84C] via-[#E8DFC0] to-[#A87FC4] bg-clip-text text-transparent">
              {t("نصنع للعالم.", "Built for the World.")}
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="text-[#E8DFC0]/40 max-w-2xl mx-auto mt-8 leading-relaxed" style={{ fontFamily: font }}>
            {t(
              "OAGROUP شركة تسويق رقمي وإبداع بحضور متنامٍ خارج حدود مصر، نقدّم حلولًا إبداعية ورقمية وإنتاجية للعلامات التجارية في مختلف الأسواق.",
              "OAGROUP is a digital marketing and creative company with a growing presence beyond Egypt, delivering creative, digital, and production solutions for brands across different markets."
            )}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="mt-10">
            <a href="#siffah"
              className="inline-flex items-center gap-3 px-8 md:px-10 py-4 rounded-xl bg-gradient-to-r from-[#E8DFC0] to-[#D4C9A8] text-[#1A0E1E] transition-all hover:scale-105"
              style={{ fontFamily: font, fontWeight: 800, fontSize: "1.05rem" }}>
              {t("اكتشف أعمالنا الدولية", "Explore Our International Work")} <Arrow className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══ SIFFAH ═══ */}
      <section id="siffah" className="py-16 md:py-28 relative overflow-hidden" style={{ background: "#1A0E1E" }}>
        <div className="absolute top-1/4 end-0 w-[500px] h-[400px] bg-[#C9A84C] opacity-[0.04] blur-[160px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Text */}
            <motion.div initial={{ opacity: 0, x: lang === "ar" ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#C9A84C]/50 tracking-[0.2em] text-xs mb-4 block" style={{ fontFamily: mono }}>
                {t("حضورنا في السعودية", "PRESENCE IN SAUDI ARABIA")}
              </span>
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <h2 className="text-[#E8DFC0]" style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3rem)" }}>
                  Siffah
                </h2>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C9A84C]/25 bg-[#C9A84C]/[0.06]">
                  <span className="text-base leading-none">🇸🇦</span>
                  <span className="text-[#E8DFC0]/70 text-xs" style={{ fontFamily: font, fontWeight: 700 }}>{t("المملكة العربية السعودية", "Saudi Arabia")}</span>
                </span>
              </div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E8DFC0]/12 bg-[#E8DFC0]/[0.03] mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8DFC0]/60" />
                <span className="text-[#E8DFC0]/50 text-[0.7rem] tracking-[0.12em]" style={{ fontFamily: mono }}>{t("علامة تابعة لـ OAGROUP", "AN OAGROUP BRAND")}</span>
              </span>
              <p className="text-[#E8DFC0]/45 leading-relaxed mb-6" style={{ fontFamily: font }}>
                {t(
                  "يمتد حضورنا خارج مصر إلى المملكة العربية السعودية من خلال Siffah — علامة إبداعية متخصصة في الهوية البصرية والسوشيال ميديا وإنتاج الفيديو.",
                  "Our presence extends beyond Egypt into Saudi Arabia through Siffah — a creative brand focused on visual identity, social media, and video production."
                )}
              </p>
              <p className="text-[#E8DFC0]/70 leading-relaxed mb-8 border-s-2 border-[#C9A84C]/40 ps-5" style={{ fontFamily: font, fontWeight: 600 }}>
                {t(
                  "مبنية لتُبدع، وتتواصل، وتبني علاقات مع العلامات التجارية في الأسواق الدولية.",
                  "Built to create, communicate, and connect with brands in international markets."
                )}
              </p>

              {/* Website badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8DFC0]/12 bg-[#E8DFC0]/[0.03] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                <span className="text-[#E8DFC0]/60 text-sm" style={{ fontFamily: mono }}>siffah.com</span>
              </div>

              <div>
                <a href="https://siffah.com/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-[#E8DFC0] text-[#1A0E1E] transition-all hover:scale-105 hover:bg-[#D4C9A8]"
                  style={{ fontFamily: font, fontWeight: 800 }}>
                  {t("زيارة Siffah", "Visit Siffah")} <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Editorial browser mockup */}
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C9A84C]/10 to-transparent blur-2xl rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden border border-[#E8DFC0]/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] bg-[#150D18]">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#E8DFC0]/[0.06] bg-[#120A14]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E8DFC0]/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E8DFC0]/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E8DFC0]/20" />
                  <div className="ms-3 flex-1 px-3 py-1 rounded-md bg-[#E8DFC0]/[0.04] text-center">
                    <span className="text-[#E8DFC0]/40 text-xs" style={{ fontFamily: mono }}>siffah.com</span>
                  </div>
                </div>
                {/* Live website screenshot */}
                <div className="relative">
                  <img src={siffahPreview} alt={t("معاينة موقع Siffah", "Siffah website preview")} className="w-full block" />
                  <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(to top, rgba(21,13,24,0.55), transparent 45%)" }} />
                  {/* Location pin */}
                  <div className="absolute bottom-4 start-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#120A14]/80 border border-[#C9A84C]/25 backdrop-blur-md">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
                    <span className="text-[#E8DFC0]/80 text-xs" style={{ fontFamily: mono }}>{t("السعودية", "SAUDI ARABIA")}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ FXSTUDIO ═══ */}
      <section className="py-16 md:py-28 relative overflow-hidden" style={{ background: "#0D0710" }}>
        {/* Cinematic light sweeps */}
        <motion.div animate={{ opacity: [0.03, 0.08, 0.03], x: [0, 40, 0] }} transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-0 start-1/3 w-[2px] h-full bg-gradient-to-b from-transparent via-[#A87FC4] to-transparent blur-sm" />
        <motion.div animate={{ opacity: [0.02, 0.06, 0.02], x: [0, -30, 0] }} transition={{ duration: 15, repeat: Infinity, delay: 3 }}
          className="absolute top-0 end-1/4 w-[2px] h-full bg-gradient-to-b from-transparent via-[#E8DFC0] to-transparent blur-sm" />
        <div className="absolute bottom-0 start-0 w-[600px] h-[400px] bg-[#6B4C8A] opacity-[0.06] blur-[180px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Cinematic visual */}
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#A87FC4]/10 to-transparent blur-2xl rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden border border-[#A87FC4]/15 shadow-[0_30px_90px_rgba(0,0,0,0.6)] aspect-[4/5] md:aspect-[4/3]">
                <img src={fxStudioLocation} alt={t("استوديو FXSTUDIO", "FXSTUDIO location")} className="w-full h-full object-cover" />
                {/* Cinematic overlay */}
                <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,7,16,0.75) 0%, rgba(13,7,16,0.1) 40%, transparent 70%)" }} />
                {/* Film grain corners */}
                <span className="absolute top-4 start-4 text-[#E8DFC0]/60 text-xs flex items-center gap-1.5" style={{ fontFamily: mono }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> REC
                </span>
                <span className="absolute top-4 end-4 text-[#E8DFC0]/40 text-xs" style={{ fontFamily: mono }}>4K · 24fps</span>
                <div className="absolute bottom-5 start-5">
                  <span className="block text-[#E8DFC0] tracking-[0.3em]" style={{ fontFamily: mono, fontWeight: 700, fontSize: "clamp(1.1rem, 3vw, 1.5rem)" }}>FXSTUDIO</span>
                  <span className="block text-[#E8DFC0]/40 text-xs tracking-[0.2em] mt-1" style={{ fontFamily: mono }}>CREATIVE PRODUCTION</span>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div initial={{ opacity: 0, x: lang === "ar" ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="order-1 md:order-2">
              <span className="text-[#A87FC4]/60 tracking-[0.2em] text-xs mb-4 block" style={{ fontFamily: mono }}>
                {t("استوديو الإبداع لدينا", "OUR CREATIVE STUDIO")}
              </span>
              <div className="flex items-center gap-4 mb-3 flex-wrap">
                <h2 className="text-[#E8DFC0] tracking-[0.05em]" style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3rem)" }}>
                  FXSTUDIO
                </h2>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#A87FC4]/25 bg-[#A87FC4]/[0.06]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A87FC4]" />
                  <span className="text-[#E8DFC0]/60 text-[0.7rem] tracking-[0.12em]" style={{ fontFamily: mono }}>{t("استوديو تابع لـ OAGROUP", "AN OAGROUP STUDIO")}</span>
                </span>
              </div>
              <p className="bg-gradient-to-l from-[#A87FC4] to-[#E8DFC0] bg-clip-text text-transparent mb-6" style={{ fontFamily: font, fontWeight: 800, fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}>
                {t("حيث تتحوّل الأفكار إلى صورة.", "Where Ideas Become Visuals.")}
              </p>
              <p className="text-[#E8DFC0]/45 leading-relaxed mb-8" style={{ fontFamily: font }}>
                {t(
                  "FXSTUDIO هو استوديو الإنتاج الإبداعي لدينا، مبني لتحويل الأفكار إلى محتوى بصري مؤثر عبر التصوير وإنتاج الفيديو والإخراج الإبداعي والمعالجة النهائية.",
                  "FXSTUDIO is our creative production studio, built to turn ideas into powerful visual content through photography, video production, creative direction, and post-production."
                )}
              </p>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2.5 mb-9">
                {fxKeywords.map((k) => (
                  <span key={k.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#A87FC4]/20 bg-[#A87FC4]/[0.06] text-[#E8DFC0]/70 text-sm"
                    style={{ fontFamily: font }}>
                    <span className="text-[#A87FC4]">{k.icon}</span>{k.label}
                  </span>
                ))}
              </div>

              <a href="https://www.instagram.com/Fxstudio.egy/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#6B4C8A] to-[#A87FC4] text-[#E8DFC0] transition-all hover:scale-105"
                style={{ fontFamily: font, fontWeight: 800 }}>
                {t("اكتشف FXSTUDIO", "Explore FXSTUDIO")} <ArrowUpRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ ECOSYSTEM ═══ */}
      <section className="py-16 md:py-28 relative overflow-hidden" style={{ background: "#150D18" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#6B4C8A] opacity-[0.04] blur-[150px] rounded-full" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#6B4C8A]/60 tracking-[0.2em] text-xs mb-4 block" style={{ fontFamily: mono }}>
              {t("منظومة واحدة", "THE ECOSYSTEM")}
            </span>
            <h2 className="text-[#E8DFC0]" style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(1.7rem, 4.5vw, 2.6rem)" }}>
              {t("مجموعة واحدة. قدرات إبداعية متعددة.", "One Group. Multiple Creative Capabilities.")}
            </h2>
          </motion.div>

          {/* Connected diagram */}
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8DFC0]/15 to-transparent -translate-y-1/2" />
            <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
              {ecosystem.map((n, i) => (
                <motion.div key={n.key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  className="relative flex flex-col items-center text-center">
                  {/* Node */}
                  <div className="relative w-full rounded-2xl border bg-[#1A0E1E] p-8 transition-all duration-500 hover:-translate-y-2"
                    style={{ borderColor: `${n.color}25`, boxShadow: `0 20px 60px ${n.color}0a` }}>
                    <div className="w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center"
                      style={{ background: `${n.color}12`, border: `1px solid ${n.color}30` }}>
                      <span className="w-3 h-3 rounded-full" style={{ background: n.color }} />
                    </div>
                    <h3 className="text-[#E8DFC0] mb-2 tracking-[0.08em]" style={{ fontFamily: mono, fontWeight: 700, fontSize: "1.15rem" }}>{n.key}</h3>
                    <p className="text-[#E8DFC0]/40 text-sm" style={{ fontFamily: font }}>{n.desc}</p>
                    {i === 0 && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] tracking-[0.15em] bg-[#E8DFC0] text-[#1A0E1E]" style={{ fontFamily: mono, fontWeight: 700 }}>CORE</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 50%, #2D1B30 0%, #1A0E1E 60%, #120A14 100%)" }}>
        <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }} transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6B4C8A] rounded-full blur-[180px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-6" style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.4rem)", lineHeight: 1.1 }}>
            <span className="bg-gradient-to-l from-[#E8DFC0] via-[#C9A84C] to-[#E8DFC0] bg-clip-text text-transparent">
              {t("لنبنِ شيئًا يعبر الحدود.", "Let’s Build Something That Travels.")}
            </span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-[#E8DFC0]/45 leading-relaxed mb-10" style={{ fontFamily: font }}>
            {t(
              "من الاستراتيجية والتسويق الرقمي إلى الأعمال الإبداعية الدولية والإنتاج البصري، تجمع OAGROUP القدرات الصحيحة معًا لبناء علامات تجارية تتحرك إلى ما وراء الحدود.",
              "From strategy and digital marketing to international creative work and visual production, OAGROUP brings the right capabilities together to build brands that move beyond borders."
            )}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-[#E8DFC0] to-[#D4C9A8] text-[#1A0E1E] transition-all hover:scale-105"
              style={{ fontFamily: font, fontWeight: 800, fontSize: "1.1rem" }}>
              {t("ابدأ مشروعًا", "Start a Project")} <Arrow className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
