import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useLang } from "../LanguageContext";
import logoImg from "../../../imports/540454450_122108095274987112_4613267991255325676_n.jpg";
import img4 from "../../../imports/4.jpg";
import img23 from "../../../imports/23.jpg";
import img5 from "../../../imports/5.jpg";
import imgBliss from "../../../imports/20167976c21deaa876ca0488a6a9fafe.jpg";
import { Users, Globe2, Rocket, Target, Heart, Calendar, Eye, Zap, TrendingUp, Award, Shield, Sparkles } from "lucide-react";
import { PartnersSection } from "../PartnersSection";

export function AboutPage() {
  const { t, lang } = useLang();
  const font = lang === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif";
  const mono = "'JetBrains Mono', monospace";

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });
  const fillOpacity = useTransform(timelineProgress, [0, 0.15], [0.35, 1]);

  const timeline = [
    { year: "2019", title: t("البداية — وُلد الحلم", "The Beginning — A Dream Was Born"), desc: t("تأسست O.A Group كفكرة بسيطة بين مجموعة من الشباب الطموح الذين يملكون شغفًا حقيقيًا بالتسويق الرقمي.", "O.A Group was founded as a simple idea among ambitious young people passionate about digital marketing."), icon: <Calendar className="w-5 h-5" />, color: "#E8DFC0" },
    { year: "2020", title: t("البناء — تأسيس القاعدة", "Building — Laying the Foundation"), desc: t("في خضم جائحة كورونا بنينا أنظمتنا الداخلية وطوّرنا مهاراتنا وبدأنا العمل مع أولى مجموعات عملائنا.", "During COVID-19 we built our systems, developed skills, and started with our first clients."), icon: <Zap className="w-5 h-5" />, color: "#6B4C8A" },
    { year: "2021", title: t("الظهور — خرجنا إلى النور", "The Emergence — We Came to Light"), desc: t("ظهرنا رسميًا بهوية بصرية متكاملة وحملات إعلانية كبيرة وتجاوزنا حاجز ٥٠ عميلًا.", "We emerged with a complete identity, major campaigns, and surpassed 50 clients."), icon: <Eye className="w-5 h-5" />, color: "#C9A84C" },
    { year: "2022–2023", title: t("التوسع — أسواق جديدة", "Expansion — New Markets"), desc: t("انطلقنا من مصر إلى السعودية. أطلقنا نظام OA REACH الذي غيّر قواعد اللعبة.", "We expanded from Egypt to Saudi Arabia. We launched OA REACH."), icon: <TrendingUp className="w-5 h-5" />, color: "#A87FC4" },
    { year: "2024–2026", title: t("الحاضر — لم نتوقف بعد", "The Present — We Haven't Stopped"), desc: t("اليوم O.A Group شريك نجاح لأكثر من ٥٠ عميل في ٣ دول مع فريق متكامل.", "Today O.A Group is a success partner for 50+ clients across 3 countries."), icon: <Rocket className="w-5 h-5" />, color: "#E8DFC0" },
  ];

  const values = [
    { icon: <Target className="w-6 h-6" />, title: t("النتائج أولًا", "Results First"), desc: t("لا نبيع كلامًا — نبيع أرقامًا ونتائج حقيقية", "We don't sell words — we sell real numbers and results"), color: "#C9A84C" },
    { icon: <Heart className="w-6 h-6" />, title: t("شغف حقيقي", "Genuine Passion"), desc: t("نحب ما نفعله وهذا يظهر في كل تفصيلة", "We love what we do and it shows in every detail"), color: "#A87FC4" },
    { icon: <Users className="w-6 h-6" />, title: t("شراكة لا مجرد خدمة", "Partnership, Not Just Service"), desc: t("عميلنا شريكنا — نجاحه هو نجاحنا", "Our client is our partner — their success is our success"), color: "#6B4C8A" },
    { icon: <Globe2 className="w-6 h-6" />, title: t("رؤية عالمية", "Global Vision"), desc: t("نفكر محليًا وننفذ بمعايير عالمية", "We think locally and execute with global standards"), color: "#E8DFC0" },
  ];

  return (
    <div className="pt-24">
      {/* ═══ HERO ═══ */}
      <section className="relative py-16 md:py-28 overflow-hidden" style={{ background: "radial-gradient(ellipse at 30% 40%, #2D1B30 0%, #1A0E1E 60%)" }}>
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(232,223,192,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(232,223,192,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-1/4 start-1/4 w-[500px] h-[500px] bg-[#6B4C8A] opacity-[0.06] rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#E8DFC0]/10 bg-[#E8DFC0]/[0.02] mb-8">
                <span className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                <span className="text-xs tracking-[0.2em] text-[#E8DFC0]/30" style={{ fontFamily: mono }}>
                  {t("منذ ٢٠١٩", "SINCE 2019")}
                </span>
              </motion.div>

              <h1 className="text-[#E8DFC0] mb-6" style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)", lineHeight: 1.15 }}>
                {t("من حلم صغير", "From a Small Dream")}
                <br />
                <span className="bg-gradient-to-l from-[#C9A84C] to-[#E8DFC0] bg-clip-text text-transparent">
                  {t("إلى وكالة تصنع الفرق", "To an Agency Making the Difference")}
                </span>
              </h1>

              <p className="text-[#E8DFC0]/35 text-sm leading-relaxed mb-8 max-w-lg" style={{ fontFamily: font }}>
                {t(
                  "تأسست O.A Group عام ٢٠١٩ وأطلقت أعمالها رسميًا عام ٢٠٢١. حلمنا أن نكون أكثر من مجرد وكالة — أردنا أن نكون الشريك الذي يساعد العلامات التجارية على تحقيق أحلامها. شعارنا: Dream. We are here.",
                  "O.A Group was founded in 2019 and launched officially in 2021. Our dream was to be more than just an agency — to be the partner that helps brands achieve their dreams. Our motto: Dream. We are here."
                )}
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: "2019", label: t("سنة التأسيس", "Year Founded") },
                  { num: "50+", label: t("عميل", "Clients") },
                  { num: "3", label: t("دول", "Countries") },
                ].map((s) => (
                  <div key={s.label} className="p-4 rounded-xl bg-[#E8DFC0]/[0.02] border border-[#E8DFC0]/[0.06] text-center">
                    <div className="text-[#E8DFC0]" style={{ fontFamily: mono, fontWeight: 700, fontSize: "1.5rem" }}>{s.num}</div>
                    <div className="text-[#E8DFC0]/25 text-xs mt-1" style={{ fontFamily: font }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image grid */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
              className="relative hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                    className="rounded-2xl overflow-hidden border border-[#E8DFC0]/5">
                    <img src={img4} alt="" className="w-full h-48 object-cover" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                    className="rounded-2xl overflow-hidden border border-[#E8DFC0]/5">
                    <img src={img23} alt="" className="w-full h-64 object-cover" />
                  </motion.div>
                </div>
                <div className="space-y-4 pt-8">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                    className="rounded-2xl overflow-hidden border border-[#E8DFC0]/5">
                    <img src={imgBliss} alt="" className="w-full h-64 object-cover" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                    className="rounded-2xl overflow-hidden border border-[#E8DFC0]/5">
                    <img src={img5} alt="" className="w-full h-48 object-cover" />
                  </motion.div>
                </div>
              </div>
              {/* Floating badge */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 start-1/2 -translate-x-1/2 z-20 px-5 py-3 rounded-xl bg-[#1A0E1E]/95 backdrop-blur-md border border-[#C9A84C]/20 flex items-center gap-3">
                <Award className="w-5 h-5 text-[#C9A84C]" />
                <span className="text-[#E8DFC0] text-xs" style={{ fontFamily: mono, fontWeight: 700 }}>
                  {t("٥ سنوات خبرة", "5 Years Experience")}
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="py-16 md:py-28 relative" style={{ background: "#1A0E1E" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6B4C8A]/15 to-transparent" />

        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[#6B4C8A]/40 tracking-[0.2em] text-xs mb-4 block" style={{ fontFamily: mono }}>
              {t("رحلتنا", "OUR JOURNEY")}
            </span>
            <h2 className="text-[#E8DFC0]" style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(1.7rem, 4.5vw, 2.2rem)" }}>
              {t("من ٢٠١٩ لحد النهاردة", "From 2019 to Today")}
            </h2>
          </motion.div>

          <div className="relative" ref={timelineRef}>
            {/* Center line */}
            <div className="absolute top-0 bottom-0 start-6 md:start-1/2 w-[2px] md:-translate-x-px overflow-hidden rounded-full">
              {/* Faint track */}
              <div className="absolute inset-0 bg-[#E8DFC0]/[0.06]" />
              {/* Scroll-linked progress fill */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full origin-top rounded-full bg-gradient-to-b from-[#C9A84C] via-[#A87FC4] to-[#6B4C8A] shadow-[0_0_12px_rgba(201,168,76,0.5)]"
                style={{ scaleY: timelineProgress, opacity: fillOpacity }}
              />
            </div>

            {timeline.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-8 mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Node */}
                <div className="absolute start-6 md:start-1/2 -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: `${item.color}40`, background: "#1A0E1E" }}>
                    <div style={{ color: item.color }}>{item.icon}</div>
                  </div>
                </div>

                {/* Content card */}
                <div className={`ms-20 md:ms-0 md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:text-end md:pe-8" : "md:text-start md:ps-8"}`}>
                  <div className="p-6 rounded-2xl bg-[#150D18] border border-[#E8DFC0]/[0.04] hover:border-[#E8DFC0]/10 transition-all duration-500">
                    <span className="text-xs tracking-[0.15em]" style={{ fontFamily: mono, fontWeight: 700, color: item.color }}>{item.year}</span>
                    <h3 className="text-[#E8DFC0] mt-2 mb-2" style={{ fontFamily: font, fontWeight: 800, fontSize: "1.1rem" }}>{item.title}</h3>
                    <p className="text-[#E8DFC0]/30 text-sm leading-relaxed" style={{ fontFamily: font }}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="py-16 md:py-28 relative" style={{ background: "linear-gradient(180deg, #150D18 0%, #1A0E1E 100%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#C9A84C]/40 tracking-[0.2em] text-xs mb-4 block" style={{ fontFamily: mono }}>
              {t("قيمنا", "OUR VALUES")}
            </span>
            <h2 className="text-[#E8DFC0]" style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(1.7rem, 4.5vw, 2.2rem)" }}>
              {t("المبادئ اللي بنمشي عليها", "The Principles We Live By")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group text-center p-8 rounded-2xl bg-[#120A14] border border-[#E8DFC0]/[0.04] hover:border-[#E8DFC0]/12 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${v.color}08, transparent 70%)` }} />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: `${v.color}10`, border: `1px solid ${v.color}20`, color: v.color }}>
                    {v.icon}
                  </div>
                  <h3 className="text-[#E8DFC0] mb-2" style={{ fontFamily: font, fontWeight: 800 }}>{v.title}</h3>
                  <p className="text-[#E8DFC0]/30 text-sm" style={{ fontFamily: font }}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PARTNERS ═══ */}
      <PartnersSection />

      {/* ═══ QUOTE ═══ */}
      <section className="py-16 md:py-24 relative" style={{ background: "radial-gradient(ellipse at center, #2D1B30 0%, #1A0E1E 70%)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="w-16 h-16 rounded-2xl mx-auto mb-8 overflow-hidden bg-[#1A0E1E] p-0.5 border border-[#E8DFC0]/10">
              <img src={logoImg} alt="O.A Group" className="w-full h-full rounded-xl object-cover" />
            </div>
            <Sparkles className="w-6 h-6 text-[#C9A84C]/30 mx-auto mb-6" />
            <blockquote className="text-[#E8DFC0]/60 mb-8" style={{ fontFamily: font, fontWeight: 700, fontSize: "clamp(1.05rem, 3vw, 1.3rem)", lineHeight: 2 }}>
              {t(
                "\"لا نعمل لننتهي — نعمل لنصنع شيئًا يبقى. كل مشروع بالنسبة لنا هو فرصة لنثبت أن الإبداع العربي قادر على منافسة أي أحد في العالم.\"",
                "\"We don't work just to finish — we work to create something that lasts. Every project is an opportunity to prove that Arab creativity can compete with anyone.\""
              )}
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-[#E8DFC0]/10" />
              <p className="text-[#E8DFC0]/25 text-sm" style={{ fontFamily: font }}>
                {t("فريق O.A Group", "The O.A Group Team")}
              </p>
              <div className="h-px w-8 bg-[#E8DFC0]/10" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
