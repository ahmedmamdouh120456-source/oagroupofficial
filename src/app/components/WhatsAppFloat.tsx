import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a href="https://wa.me/201501158007" target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform">
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
    </a>
  );
}
