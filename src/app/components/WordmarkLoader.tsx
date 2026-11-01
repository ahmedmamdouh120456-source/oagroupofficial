import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

const WORDMARK = "OAGROUP";

export function WordmarkLoader() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  const finish = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(finish, reduceMotion ? 300 : 2000);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [finish, reduceMotion, visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-label="OAGROUP is loading"
          onClick={finish}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: reduceMotion ? 1 : 1.025 }}
          transition={{ duration: reduceMotion ? 0.1 : 0.18, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] cursor-pointer overflow-hidden bg-[#120A14] text-[#E8DFC0]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle at 50% 50%, rgba(107,76,138,0.12), transparent 52%)" }}
          />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-5">
            <div className="pb-3" dir="ltr">
              <div className="flex items-center justify-center">
                {WORDMARK.split("").map((letter, index) => (
                  <span key={`${letter}-${index}`} className="inline-block">
                    <motion.span
                      initial={reduceMotion ? false : { y: "90%", opacity: 0, scale: 0.72 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: "-110%", opacity: 0 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.32,
                        delay: reduceMotion ? 0 : 0.04 + index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="inline-block text-[clamp(3.4rem,13.5vw,12rem)] font-black leading-none"
                      style={{
                        fontFamily: "Impact, 'Arial Black', sans-serif",
                        fontWeight: 900,
                        letterSpacing: "-0.06em",
                        willChange: "transform, opacity",
                      }}
                    >
                      {letter}
                    </motion.span>
                  </span>
                ))}
              </div>
            </div>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 28, scaleX: 1.02, letterSpacing: "0.27em" }}
              animate={{ opacity: 1, y: 0, scaleX: 1.07, letterSpacing: "0.24em" }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: reduceMotion ? 0 : 0.25, delay: reduceMotion ? 0 : 1.02, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 text-center text-[0.68rem] font-medium tracking-[0.24em] text-[#E8DFC0]/55 sm:text-xs"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                transformOrigin: "center",
                willChange: "transform, opacity",
              }}
              dir="ltr"
            >
              DREAM. WE ARE HERE.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
