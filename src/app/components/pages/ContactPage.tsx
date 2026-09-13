import { motion } from "motion/react";
import { useState } from "react";
import { useLang } from "../LanguageContext";
import { Mail, Copy, Check, Phone, User, Send, MessageCircle, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";

export function ContactPage() {
  const { t, lang } = useLang();
  const font = lang === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif";
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sending, setSending] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("info@oagroupofficial.com");
    setCopied(true);
    toast.success(t("تم نسخ البريد الإلكتروني!", "Email copied to clipboard!"));
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error(t("يرجى إدخال الاسم ورقم الهاتف", "Please enter your name and phone number"));
      return;
    }
    setSending(true);

    const subject = t(
      `طلب جديد من الموقع — ${formData.name}`,
      `New Website Inquiry — ${formData.name}`
    );
    const body = t(
      `الاسم: ${formData.name}\nرقم الهاتف: ${formData.phone}\nالبريد الإلكتروني: ${formData.email || "-"}\nالخدمة المطلوبة: ${formData.service || "-"}\n\nالرسالة:\n${formData.message || "-"}`,
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || "-"}\nService: ${formData.service || "-"}\n\nMessage:\n${formData.message || "-"}`
    );
    const mailto = `mailto:info@oagroupofficial.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setTimeout(() => {
      setSending(false);
      toast.success(t("تم فتح برنامج البريد لإرسال رسالتك", "Your email app has opened to send the message"));
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    }, 800);
  };

  const services = lang === "ar"
    ? ["التسويق الرقمي", "الجرافيك والموشن", "البرمجة والتقنية", "خدمة المودريتور", "OA REACH", "أخرى"]
    : ["Digital Marketing", "Graphic & Motion", "Development & Tech", "Moderator Service", "OA REACH", "Other"];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16" style={{ background: "radial-gradient(ellipse at 50% 30%, #2D1B30 0%, #1A0E1E 60%)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-[#E8DFC0] mb-4" style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            {t("تواصل معنا", "Contact Us")}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-[#E8DFC0]/40" style={{ fontFamily: font }}>
            {t("فريقنا في مصر والسعودية جاهز يسمعك ويساعدك تبدأ رحلتك الرقمية", "Our team in Egypt and Saudi Arabia is ready to listen and help you start your digital journey")}
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12" style={{ background: "#150D18" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Email */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="bg-[#1A0E1E] border border-[#E8DFC0]/5 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-[#E8DFC0]/5 flex items-center justify-center text-[#E8DFC0]/40 mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-[#E8DFC0] mb-2 text-sm" style={{ fontFamily: font, fontWeight: 700 }}>{t("البريد الإلكتروني", "Email Address")}</h3>
              <div className="flex items-center justify-center gap-2">
                <a href="mailto:info@oagroupofficial.com"
                  className="text-[#E8DFC0]/50 text-xs hover:text-[#E8DFC0] transition-all hover:drop-shadow-[0_0_10px_rgba(228,223,192,0.3)]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  info@oagroupofficial.com
                </a>
                <button onClick={copyEmail} className="p-1 rounded hover:bg-white/5 text-[#E8DFC0]/20 hover:text-[#E8DFC0]">
                  {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="bg-[#1A0E1E] border border-[#E8DFC0]/5 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]/60 mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-[#E8DFC0] mb-2 text-sm" style={{ fontFamily: font, fontWeight: 700 }}>{t("رقم الهاتف", "Phone Number")}</h3>
              <a href="tel:+201501158007" className="text-[#E8DFC0]/50 text-xs hover:text-[#E8DFC0] transition-all" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                +20 150 115 8007
              </a>
            </motion.div>

            {/* Location */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="bg-[#1A0E1E] border border-[#E8DFC0]/5 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-[#6B4C8A]/10 flex items-center justify-center text-[#A87FC4]/60 mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-[#E8DFC0] mb-2 text-sm" style={{ fontFamily: font, fontWeight: 700 }}>{t("مقراتنا", "Our Locations")}</h3>
              <p className="text-[#E8DFC0]/50 text-xs" style={{ fontFamily: font }}>
                {t("مصر 🇪🇬 · السعودية 🇸🇦", "Egypt 🇪🇬 · Saudi Arabia 🇸🇦")}
              </p>
            </motion.div>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.form initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }} animate={{ opacity: 1, x: 0 }}
              onSubmit={handleSubmit}
              className="bg-[#1A0E1E] border border-[#E8DFC0]/5 rounded-2xl p-8 space-y-5">
              <h3 className="text-[#E8DFC0] mb-6" style={{ fontFamily: font, fontWeight: 800, fontSize: "1.2rem" }}>
                {t("اترك بياناتك وسنتواصل معك", "Leave Your Details and We'll Reach Out")}
              </h3>

              <div className="relative">
                <User className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#E8DFC0]/20" />
                <input type="text" required placeholder={t("الاسم الكامل *", "Full Name *")} value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#150D18] border border-[#E8DFC0]/10 rounded-xl px-10 py-3 text-[#E8DFC0] text-sm placeholder:text-[#E8DFC0]/20 focus:border-[#E8DFC0]/25 focus:outline-none transition-all"
                  style={{ fontFamily: font }} />
              </div>

              <div className="relative">
                <Phone className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#E8DFC0]/20" />
                <input type="tel" required placeholder={t("رقم الهاتف *", "Phone Number *")} value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#150D18] border border-[#E8DFC0]/10 rounded-xl px-10 py-3 text-[#E8DFC0] text-sm placeholder:text-[#E8DFC0]/20 focus:border-[#E8DFC0]/25 focus:outline-none transition-all"
                  style={{ fontFamily: font }} />
              </div>

              <div className="relative">
                <Mail className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#E8DFC0]/20" />
                <input type="email" placeholder={t("البريد الإلكتروني (اختياري)", "Email Address (Optional)")} value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#150D18] border border-[#E8DFC0]/10 rounded-xl px-10 py-3 text-[#E8DFC0] text-sm placeholder:text-[#E8DFC0]/20 focus:border-[#E8DFC0]/25 focus:outline-none transition-all"
                  style={{ fontFamily: font }} />
              </div>

              <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-[#150D18] border border-[#E8DFC0]/10 rounded-xl px-4 py-3 text-[#E8DFC0] text-sm focus:border-[#E8DFC0]/25 focus:outline-none transition-all appearance-none"
                style={{ fontFamily: font }}>
                <option value="" className="bg-[#150D18]">{t("اختر الخدمة المطلوبة", "Select a Service")}</option>
                {services.map((s) => (
                  <option key={s} value={s} className="bg-[#150D18]">{s}</option>
                ))}
              </select>

              <textarea placeholder={t("اكتب رسالتك أو تفاصيل مشروعك هنا...", "Write your message or project details here...")} value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#150D18] border border-[#E8DFC0]/10 rounded-xl px-4 py-3 text-[#E8DFC0] text-sm placeholder:text-[#E8DFC0]/20 focus:border-[#E8DFC0]/25 focus:outline-none transition-all h-28 resize-none"
                style={{ fontFamily: font }} />

              <button type="submit" disabled={sending}
                className="w-full py-3.5 bg-[#E8DFC0] text-[#1A0E1E] rounded-xl flex items-center justify-center gap-2 hover:bg-[#D4C9A8] transition-all disabled:opacity-50"
                style={{ fontFamily: font, fontWeight: 700 }}>
                {sending ? t("جارٍ الإرسال...", "Sending...") : t("إرسال الرسالة", "Send Message")} <Send className="w-4 h-4" />
              </button>
            </motion.form>

            {/* WhatsApp + Quick Actions */}
            <div className="space-y-6">
              {/* WhatsApp Card */}
              <motion.div initial={{ opacity: 0, x: lang === "ar" ? -20 : 20 }} animate={{ opacity: 1, x: 0 }}
                className="bg-[#1A0E1E] border border-[#25D366]/15 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-[#25D366]" />
                </div>
                <h3 className="text-[#E8DFC0] mb-3" style={{ fontFamily: font, fontWeight: 800, fontSize: "1.2rem" }}>
                  {t("تواصل معنا مباشرة عبر واتساب", "Chat With Us Directly on WhatsApp")}
                </h3>
                <p className="text-[#E8DFC0]/30 text-sm mb-6" style={{ fontFamily: font }}>
                  {t("رد فوري من فريقنا المتخصص", "Instant response from our specialized team")}
                </p>
                <a href="https://wa.me/201501158007" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white rounded-xl hover:bg-[#1fba59] transition-all shadow-[0_0_30px_rgba(37,211,102,0.2)]"
                  style={{ fontFamily: font, fontWeight: 700 }}>
                  <MessageCircle className="w-5 h-5" /> {t("ابدأ محادثة الآن", "Start a Chat Now")}
                </a>
                <p className="text-[#E8DFC0]/20 text-xs mt-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>+20 150 115 8007</p>
              </motion.div>

              {/* Email Direct */}
              <motion.div initial={{ opacity: 0, x: lang === "ar" ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}
                className="bg-[#1A0E1E] border border-[#E8DFC0]/5 rounded-2xl p-6 text-center">
                <h3 className="text-[#E8DFC0] mb-4 text-sm" style={{ fontFamily: font, fontWeight: 700 }}>
                  {t("أو راسلنا عبر البريد الإلكتروني", "Or Email Us Directly")}
                </h3>
                <a href="mailto:info@oagroupofficial.com"
                  className="inline-flex items-center gap-2 text-[#E8DFC0]/50 hover:text-[#E8DFC0] transition-all hover:drop-shadow-[0_0_12px_rgba(228,223,192,0.3)] underline decoration-[#E8DFC0]/20 hover:decoration-[#E8DFC0]/50"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem" }}>
                  <Mail className="w-4 h-4" /> info@oagroupofficial.com
                </a>
              </motion.div>

              {/* Working hours */}
              <motion.div initial={{ opacity: 0, x: lang === "ar" ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}
                className="bg-[#1A0E1E] border border-[#E8DFC0]/5 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-[#E8DFC0]/30" />
                  <h3 className="text-[#E8DFC0] text-sm" style={{ fontFamily: font, fontWeight: 700 }}>{t("مواعيد العمل", "Working Hours")}</h3>
                </div>
                <div className="space-y-2 text-sm text-[#E8DFC0]/35" style={{ fontFamily: font }}>
                  <div className="flex justify-between">
                    <span>{t("الأحد — الخميس", "Sunday — Thursday")}</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>10:00 AM — 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("الجمعة والسبت", "Friday & Saturday")}</span>
                    <span className="text-[#E8DFC0]/20">{t("إجازة رسمية", "Weekend Off")}</span>
                  </div>
                </div>
              </motion.div>

              {/* Social */}
              <motion.div initial={{ opacity: 0, x: lang === "ar" ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}
                className="bg-[#1A0E1E] border border-[#E8DFC0]/5 rounded-2xl p-6">
                <h3 className="text-[#E8DFC0] text-sm mb-4" style={{ fontFamily: font, fontWeight: 700 }}>{t("تابعنا على منصات التواصل", "Follow Us on Social Media")}</h3>
                <div className="flex items-center gap-3">
                  {[
                    { icon: <Facebook className="w-4 h-4" />, href: "https://www.facebook.com/oaroup", label: "Facebook" },
                    { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com/oagroupdigital", label: "Instagram" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-[#E8DFC0]/5 border border-[#E8DFC0]/10 flex items-center justify-center text-[#E8DFC0]/40 hover:text-[#E8DFC0] hover:border-[#E8DFC0]/30 transition-all">
                      {s.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
