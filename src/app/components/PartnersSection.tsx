import { motion } from "motion/react";
import { useLang } from "./LanguageContext";
import odooLogo from "../../imports/image-3.png";

const partners = [
  {
    name: "Meta",
    color: "#0866FF",
    path: "M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.157-2.602zm-10.201.553c1.267 0 2.474.878 3.376 2.032-.719.99-1.438 2.09-2.147 3.301l-.816 1.396c-1.13 1.943-1.535 2.556-2.031 3.147-.688.819-1.176 1.028-1.756 1.028-.531 0-1.023-.229-1.35-.855-.259-.492-.375-1.11-.375-1.804 0-2.049.591-4.29 1.68-6.017.775-1.227 1.72-2.028 2.94-2.028z",
  },
  {
    name: "TikTok",
    color: "#FE2C55",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
  {
    name: "Odoo",
    color: "#714B67",
    img: odooLogo,
  },
  {
    name: "Snapchat",
    color: "#F7D000",
    path: "M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.225-.061.524.12.868l.015.015c.06.12 1.526 2.97 4.291 3.405.225.036.39.234.375.464 0 .06-.015.12-.03.18-.075.24-.42.42-1.023.6-.735.225-1.53.359-2.325.404-.09.014-.18.014-.269.014-.42 0-.855-.039-1.32-.089-.42-.045-.78-.081-1.11-.081-.899 0-1.62.42-2.399.899-.79.484-1.68 1.034-2.94 1.034-.15 0-.284-.014-.418-.029h-.06c-1.26 0-2.145-.55-2.94-1.034-.78-.479-1.5-.9-2.399-.9-.33 0-.72.036-1.11.081-.464.05-.899.09-1.319.09-.09 0-.18 0-.269-.015-.795-.045-1.59-.18-2.325-.404-.603-.18-.948-.36-1.023-.6-.015-.06-.03-.12-.03-.18-.014-.23.15-.428.375-.464 2.766-.435 4.231-3.285 4.291-3.405l.015-.015c.18-.344.21-.643.12-.868-.194-.45-.883-.675-1.333-.81-.135-.044-.255-.09-.344-.119-.823-.329-1.228-.719-1.213-1.168 0-.359.284-.689.734-.838.15-.061.327-.09.509-.09.12 0 .299.016.464.104.374.181.733.285 1.033.301.198 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847C7.859 1.069 11.216.793 12.206.793z",
  },
];

export function PartnersSection() {
  const { t, lang } = useLang();
  const font = lang === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif";

  return (
    <section className="py-24 relative" style={{ background: "#150D18" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6B4C8A]/20 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-[#C9A84C]/40 tracking-[0.2em] text-xs mb-4 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {t("شركاء رسميون", "OFFICIAL PARTNERS")}
          </span>
          <h2 className="text-[#E8DFC0] mb-3" style={{ fontFamily: font, fontWeight: 900, fontSize: "2rem" }}>
            {t("شركاؤنا المعتمدون", "Our Certified Partners")}
          </h2>
          <p className="text-[#E8DFC0]/30 text-sm max-w-xl mx-auto" style={{ fontFamily: font }}>
            {t("نعمل كشركاء رسميين مع أكبر المنصات لنقدّم لعملائنا أفضل النتائج", "We work as official partners with the biggest platforms to deliver the best results for our clients")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {partners.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-center justify-center gap-4 py-10 rounded-2xl bg-gradient-to-b from-[#1A0E1E] to-[#150D18] border border-[#E8DFC0]/[0.06] hover:border-[#E8DFC0]/15 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 overflow-hidden"
                style={{ background: `${p.color}14` }}>
                {p.img ? (
                  <img src={p.img} alt={`${p.name} logo`} className="w-10 h-10 object-contain" />
                ) : (
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill={p.color}>
                    <path d={p.path} />
                  </svg>
                )}
              </div>
              <div className="text-center">
                <span className="block text-[#E8DFC0]/85 text-base leading-tight" style={{ fontFamily: font, fontWeight: 800 }}>{p.name}</span>
                <span className="block text-[#E8DFC0]/25 text-[0.65rem] tracking-[0.15em] mt-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{t("شريك معتمد", "CERTIFIED PARTNER")}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
