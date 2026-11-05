import { quotes } from "@/data/quote";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/i18n";

const QuoteSection = () => {
  const [index, setIndex] = useState(0);
  const { language } = useI18n();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = language === "fr"
    ? [
        { text: "Absorbé par une seule feuille, vous ne verrez pas l'arbre.", author: "" },
        { text: "Absorbé par un seul arbre, vous ne verrez pas toute la forêt.", author: "" },
        { text: "Ne vous attachez pas à un seul détail.", author: "" },
        { text: "Voyez toute chose dans son ensemble... sans effort.", author: "" },
        { text: "C'est cela, vraiment « voir ».", author: "Takuan Sōhō" },
      ][index]
    : quotes[index];

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Lora:ital@0;1&display=swap');`}</style>

      {/* Separator */}
      <div className="flex items-center justify-center gap-3 px-6 mt-8">
        <span className="flex-1 h-px bg-border/60" />
        <span className="text-muted-foreground text-base leading-none translate-y-">
          &#9672;
        </span>
        <span className="flex-1 h-px bg-border/60" />
      </div>

      <section className="flex flex-col pt-12 px-6 gap-2 items-center">
        {/* Quote Container */}
        <div className="w-full max-w-xl mx-auto min-h-24 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full pb-6"
            >
              <p
                className="text-muted-foreground italic text-base md:text-lg text-center"
                style={{ fontFamily: "'Lora', serif" }}
              >
                "{current.text}"
              </p>
              {current.author && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute bottom-0 right-0 text-muted-foreground italic text-base"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  — {current.author}
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default QuoteSection;
