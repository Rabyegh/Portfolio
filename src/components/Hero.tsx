import { useEffect, useState } from "react";
import { BookText, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { socials } from "@/data/socials";
import SocialIcon from "./helpers/SocialIcon";
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/motionVariants";
import pdp from "../../pdp.png";
import { useI18n } from "@/i18n";

const Hero = () => {
  const [labelIdx, setLabelIdx] = useState(0);
  const { t } = useI18n();
  const labels = [t("hero.dataStudent"), t("hero.aiStudent")];

  useEffect(() => {
    const id = setInterval(() => setLabelIdx((i) => (i + 1) % labels.length), 3000);
    return () => clearInterval(id);
  }, [labels.length]);

  return (
    <section className="flex flex-col justify-center pt-32 pb-20 sm:pt-22 sm:pb-12" id="home">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-5 sm:space-y-10"
      >
        <motion.div variants={itemVariants} className="flex items-center mb-8 gap-[14px] sm:gap-[20px]">
          <div className="flex shrink-0 items-center justify-center will-change-[transform,opacity] transform-gpu">
            <img
              src={pdp}
              alt="Mohamed Rabie Ghediri"
              decoding="async"
              className="block h-35 w-35 shrink-0 rounded-full border-2 border-border object-cover object-[center_top] p-1 shadow-sm sm:h-40 sm:w-40"
            />
          </div>
          <div className="flex h-full flex-col justify-center gap-2 sm:gap-3">
            <h1 className="text-2xl font-normal tracking-tight text-foreground sm:text-2xl md:text-3xl">
              Mohamed Rabie Ghediri
            </h1>
            <div className="flex items-start gap-2.5 sm:gap-3">
              {socials.map(({ name, icon, darkIcon, href }) => (
                <a
                  key={name}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="border-0 transition-opacity hover:opacity-80"
                >
                  <SocialIcon icon={icon} darkIcon={darkIcon} alt={name} className="h-6 w-6 rounded p-0.5 sm:h-7 sm:w-7" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-5 sm:space-y-6">
          <h1 className="max-w-full text-[1.7rem] font-normal tracking-tight leading-tight sm:text-[2.05rem] md:text-[2.15rem]">
            <span style={{ display: "inline-grid" }}>
              <span style={{ visibility: "hidden", gridArea: "1/1" }} aria-hidden>
                {labels.reduce((a, b) => (a.length >= b.length ? a : b))}
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={labelIdx}
                  style={{ gridArea: "1/1" }}
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.4 }}
                >
                  {labels[labelIdx]}
                </motion.span>
              </AnimatePresence>
            </span>
            {" - "}
            <span className="text-[0.85em] font-light text-muted-foreground sm:text-[0.90em]">
              {t("hero.tagline")}
            </span>
          </h1>
          <p className="text-base font-light leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap gap-3 pt-2 sm:gap-4">
            <a href="/contact">
              <Button size="lg">
                {t("hero.contact")}
                <ChevronRight strokeWidth={2.25} />
              </Button>
            </a>
            <a href="/cv/Mohamed-Rabie-Ghediri-Data-Cv.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-dashed bg-card">
                {t("hero.dataCv")}
                <BookText />
              </Button>
            </a>
            <a href="/cv/Mohamed-Rabie-Ghediri-AI-CV.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-dashed bg-card">
                {t("hero.aiCv")}
                <BookText />
              </Button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
