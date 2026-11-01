import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/201501158007"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      title="WhatsApp"
      className="group fixed bottom-5 left-5 z-50 flex h-13 w-13 items-center justify-center rounded-full border border-[#E8DFC0]/25 bg-[#1A0E1E]/95 text-[#E8DFC0] shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#E8DFC0]/55 hover:bg-[#6B4C8A]"
    >
      <MessageCircle className="h-7 w-7 transition-transform duration-300 group-hover:scale-105" strokeWidth={2} />
      <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-[#1A0E1E] bg-[#E8DFC0]" />
    </a>
  );
}
