import { motion, AnimatePresence } from "motion/react";
import { useLang } from "../LanguageContext";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight, ExternalLink, Maximize2 } from "lucide-react";
import { useState } from "react";

import img1 from "../../../imports/1.jpg";
import img2 from "../../../imports/2.jpg";
import img3 from "../../../imports/3.jpg";
import img4 from "../../../imports/4.jpg";
import img5 from "../../../imports/5.jpg";
import img13 from "../../../imports/13.jpg";
import img23 from "../../../imports/23.jpg";
import img27 from "../../../imports/27.jpg";
import img29 from "../../../imports/29.jpg";
import imgBliss from "../../../imports/20167976c21deaa876ca0488a6a9fafe.jpg";
import imgG3a1 from "../../../imports/6.jpg";
import imgG3a2 from "../../../imports/1-1.png";
import imgG3a3 from "../../../imports/2-2.jpg";
import imgMishkah from "../../../imports/your_knowledge_path.jpg";

const projects = [
  { img: imgMishkah, title: { ar: "مشكاة — طريق المعرفة", en: "Mishkah — Knowledge Path" }, cat: { ar: "جرافيك", en: "Graphic" }, desc: { ar: "تصميم إبداعي مفاهيمي لجامعة مشكاة — رحلتك التعليمية تبدأ من هنا", en: "Conceptual creative design for Mishkah University — your knowledge path starts here" }, color: "#1E5E4E" },
  { img: imgG3a1, title: { ar: "دي بير — 1K Plastic Primer", en: "DeBeer — 1K Plastic Primer" }, cat: { ar: "جرافيك", en: "Graphic" }, desc: { ar: "تصميم إعلاني لمنتج برايمر البلاستيك من دي بير بعلامة G3A", en: "Product ad design for DeBeer's plastic primer, G3A branding" }, color: "#052a5e" },
  { img: imgG3a3, title: { ar: "دي بير — Berobase", en: "DeBeer — Berobase" }, cat: { ar: "جرافيك", en: "Graphic" }, desc: { ar: "تصميم سوشيال ميديا لبويات دي بير — جودة لا تُضاهى ولمعان يدوم", en: "Social media design for DeBeer paints — unmatched quality, lasting shine" }, color: "#C9A84C" },
  { img: imgG3a2, title: { ar: "دي بير — HS Clear Coat", en: "DeBeer — HS Clear Coat" }, cat: { ar: "جرافيك", en: "Graphic" }, desc: { ar: "تصميم إعلاني للمعان الكريستالي واللمسة المثالية لطلاء السيارات", en: "Ad design for crystal-clear shine and the perfect car finish" }, color: "#6B4C8A" },
  { img: img4, title: { ar: "المتحدة للأخشاب", en: "Al-Motaheda Wood" }, cat: { ar: "جرافيك", en: "Graphic" }, desc: { ar: "تصميم إبداعي بعلامة اللانهاية يعكس جودة الخشب الطبيعي", en: "Creative infinity symbol design reflecting natural wood quality" }, color: "#C9A84C" },
  { img: img13, title: { ar: "المتحدة للأخشاب — UV", en: "Al-Motaheda — UV" }, cat: { ar: "جرافيك", en: "Graphic" }, desc: { ar: "تصميم UV مرمر يجمع بين الفخامة والعصرية", en: "UV marble design combining luxury and modernity" }, color: "#A87FC4" },
  { img: img23, title: { ar: "المتحدة — مطابخ", en: "Al-Motaheda — Kitchens" }, cat: { ar: "جرافيك", en: "Graphic" }, desc: { ar: "تصميم احترافي لعرض حلول المطابخ العصرية", en: "Professional design showcasing modern kitchen solutions" }, color: "#E8DFC0" },
  { img: img27, title: { ar: "المتحدة — ألواح خشب", en: "Al-Motaheda — Wood Panels" }, cat: { ar: "تصوير", en: "Photography" }, desc: { ar: "تصوير منتجات ألواح الخشب بجودة عالية", en: "High-quality wood panel product photography" }, color: "#6B4C8A" },
  { img: img1, title: { ar: "Kaaveri Coffee", en: "Kaaveri Coffee" }, cat: { ar: "جرافيك", en: "Graphic" }, desc: { ar: "تصميم سوشيال ميديا إبداعي ليوم الدراجات", en: "Creative social media design for Bicycle Day" }, color: "#C9A84C" },
  { img: img3, title: { ar: "Life Juice", en: "Life Juice" }, cat: { ar: "جرافيك", en: "Graphic" }, desc: { ar: "تصميم إعلاني مبتكر مع عناصر بصرية مميزة", en: "Innovative ad design with unique visual elements" }, color: "#A87FC4" },
  { img: imgBliss, title: { ar: "Bliss Juice", en: "Bliss Juice" }, cat: { ar: "جرافيك", en: "Graphic" }, desc: { ar: "تصميم إبداعي يعكس الانتعاش والطبيعة", en: "Creative design reflecting freshness and nature" }, color: "#E8DFC0" },
  { img: img29, title: { ar: "Coconut Water", en: "Coconut Water" }, cat: { ar: "جرافيك", en: "Graphic" }, desc: { ar: "تصميم منتج بأسلوب بصري جذاب ومختلف", en: "Product design with an attractive and unique visual style" }, color: "#6B4C8A" },
  { img: img2, title: { ar: "SSF Mannarkkad", en: "SSF Mannarkkad" }, cat: { ar: "جرافيك", en: "Graphic" }, desc: { ar: "تصميم عد تنازلي لحملة تشويقية", en: "Countdown design for a teaser campaign" }, color: "#C9A84C" },
  { img: img5, title: { ar: "EcoGreen", en: "EcoGreen" }, cat: { ar: "جرافيك", en: "Graphic" }, desc: { ar: "تصميم بيئي يعكس الاستدامة والطبيعة الخضراء", en: "Environmental design reflecting sustainability and green nature" }, color: "#A87FC4" },
];

const cats = {
  ar: ["الكل", "جرافيك", "تصوير"],
  en: ["All", "Graphic", "Photography"],
};

export function WorksPage() {
  const { t, lang } = useLang();
  const font = lang === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif";
  const Arrow = lang === "ar" ? ChevronLeft : ChevronRight;
  const allLabel = lang === "ar" ? "الكل" : "All";
  const [filter, setFilter] = useState(allLabel);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const catList = lang === "ar" ? cats.ar : cats.en;

  const filtered = filter === allLabel
    ? projects
    : projects.filter((p) => (lang === "ar" ? p.cat.ar : p.cat.en) === filter);

  return (
    <div className="pt-24">
      <section className="py-20 min-h-screen" style={{ background: "radial-gradient(ellipse at 50% 20%, #2D1B30 0%, #1A0E1E 60%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-[#6B4C8A]/40 tracking-[0.2em] text-xs mb-4 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {lang === "ar" ? "معرض أعمالنا" : "PORTFOLIO"}
            </span>
            <h1 className="text-[#E8DFC0] mb-4" style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              {t("أعمالنا الحقيقية", "Our Real Work")}
            </h1>
            <p className="text-[#E8DFC0]/30 max-w-lg mx-auto text-sm" style={{ fontFamily: font }}>
              {t("تصميمات حقيقية لعملاء حقيقيين — كل مشروع هنا اتعمل بإيدينا", "Real designs for real clients — every project here was crafted by our hands")}
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-14">
            {catList.map((c) => (
              <motion.button key={c} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-xl text-sm transition-all duration-300 ${
                  filter === c
                    ? "bg-gradient-to-r from-[#E8DFC0] to-[#C9A84C] text-[#1A0E1E] shadow-[0_0_20px_rgba(232,223,192,0.1)]"
                    : "bg-[#E8DFC0]/[0.03] text-[#E8DFC0]/35 border border-[#E8DFC0]/8 hover:border-[#E8DFC0]/15"
                }`}
                style={{ fontFamily: font, fontWeight: filter === c ? 700 : 400 }}>
                {c}
              </motion.button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div key={`${lang}-${filter}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="break-inside-avoid group relative rounded-2xl overflow-hidden border border-[#E8DFC0]/[0.04] hover:border-[#E8DFC0]/15 transition-all duration-500 cursor-pointer bg-[#120A14]"
                  onClick={() => setLightbox(i)}>
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img src={p.img} alt={lang === "ar" ? p.title.ar : p.title.en}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E1E] via-[#1A0E1E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                      <div className="w-full">
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-3 py-1 rounded-full text-[10px] tracking-wide backdrop-blur-md"
                            style={{ background: `${p.color}20`, color: p.color, border: `1px solid ${p.color}30`, fontFamily: "'JetBrains Mono', monospace" }}>
                            {lang === "ar" ? p.cat.ar : p.cat.en}
                          </span>
                          <Maximize2 className="w-4 h-4 text-[#E8DFC0]/50" />
                        </div>
                        <h3 className="text-[#E8DFC0] mb-1" style={{ fontFamily: font, fontWeight: 700, fontSize: "1rem" }}>
                          {lang === "ar" ? p.title.ar : p.title.en}
                        </h3>
                        <p className="text-[#E8DFC0]/40 text-xs leading-relaxed" style={{ fontFamily: font }}>
                          {lang === "ar" ? p.desc.ar : p.desc.en}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mt-20 p-14 rounded-3xl bg-gradient-to-b from-[#150D18] to-[#120A14] border border-[#E8DFC0]/[0.04] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#6B4C8A] rounded-full blur-[100px]" />
            </div>
            <div className="relative z-10">
              <h3 className="text-[#E8DFC0] mb-3" style={{ fontFamily: font, fontWeight: 800, fontSize: "1.5rem" }}>
                {t("عايز تصميمات زي دي لبراندك؟", "Want Designs Like These for Your Brand?")}
              </h3>
              <p className="text-[#E8DFC0]/30 text-sm mb-8 max-w-md mx-auto" style={{ fontFamily: font }}>
                {t("كل تصميم عندنا بيبدأ من فهم عميق للبراند. تواصل معنا ونبدأ نشتغل.", "Every design starts from deep brand understanding. Contact us and let's get started.")}
              </p>
              <Link to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#E8DFC0] to-[#C9A84C] text-[#1A0E1E] rounded-xl hover:shadow-[0_0_30px_rgba(232,223,192,0.15)] transition-all duration-500"
                style={{ fontFamily: font, fontWeight: 700 }}>
                {t("تواصل معنا الآن", "Contact Us Now")}
                <Arrow className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}>
            <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
              className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-[#E8DFC0]" style={{ fontFamily: font, fontWeight: 700 }}>
                    {lang === "ar" ? filtered[lightbox]?.title.ar : filtered[lightbox]?.title.en}
                  </h3>
                  <p className="text-[#E8DFC0]/30 text-xs" style={{ fontFamily: font }}>
                    {lang === "ar" ? filtered[lightbox]?.desc.ar : filtered[lightbox]?.desc.en}
                  </p>
                </div>
                <button onClick={() => setLightbox(null)} className="text-white/50 hover:text-white px-3 py-1 rounded-lg border border-white/10 text-sm">
                  {t("إغلاق", "Close")} ✕
                </button>
              </div>
              <img src={filtered[lightbox]?.img} alt="" className="w-full rounded-2xl border border-white/5" />
              {/* Navigation */}
              <div className="flex justify-center gap-3 mt-4">
                <button onClick={() => setLightbox(Math.max(0, lightbox - 1))}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-white/30 text-sm flex items-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {lightbox + 1} / {filtered.length}
                </span>
                <button onClick={() => setLightbox(Math.min(filtered.length - 1, lightbox + 1))}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
