import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/* Soft light/halo that follows the cursor, with a stronger ripple on click/tap */
export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    // Skip on touch-only / coarse pointers where there's no hovering cursor
    let raf = 0;
    let tx = 0, ty = 0;

    const move = (x: number, y: number) => {
      tx = x; ty = y;
      if (!visible) setVisible(true);
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          if (glowRef.current) {
            glowRef.current.style.transform = `translate3d(${tx - 250}px, ${ty - 250}px, 0)`;
          }
        });
      }
    };

    const onMouseMove = (e: MouseEvent) => move(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) move(t.clientX, t.clientY);
    };
    const onLeave = () => setVisible(false);

    const spawnRipple = (x: number, y: number) => {
      const id = Date.now() + Math.random();
      setRipples((r) => [...r, { id, x, y }]);
      setTimeout(() => setRipples((r) => r.filter((p) => p.id !== id)), 700);
    };
    const onDown = (e: MouseEvent) => { move(e.clientX, e.clientY); spawnRipple(e.clientX, e.clientY); };
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) { move(t.clientX, t.clientY); spawnRipple(t.clientX, t.clientY); }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [visible]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {/* Following halo */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full transition-opacity duration-500"
        style={{
          opacity: visible ? 1 : 0,
          background:
            "radial-gradient(circle, rgba(150,180,255,0.04) 0%, rgba(150,180,255,0.018) 42%, transparent 68%)",
          willChange: "transform",
        }}
      />
      {/* Click / tap ripples */}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.div
            key={r.id}
            initial={{ scale: 0.2, opacity: 0.5 }}
            animate={{ scale: 1.6, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute w-[260px] h-[260px] rounded-full"
            style={{
              left: r.x - 130,
              top: r.y - 130,
              background:
                "radial-gradient(circle, rgba(150,180,255,0.10) 0%, rgba(150,180,255,0.05) 42%, transparent 70%)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
