import { FadeIn } from "@/components/helpers/FadeIn";
import { socials } from "@/data/socials";
import { useTheme } from "next-themes";
import { ArrowUpRight, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useI18n } from "@/i18n";

const Contact = () => {
  const { resolvedTheme } = useTheme();
  const navigate = useNavigate();
  const { t } = useI18n();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col px-6 pb-8 pt-6 sm:pt-12 sm:pb-24 space-y-8">
      <FadeIn yOffset={10} duration={0.4}>
        <button
          onClick={() => navigate("/")}
          className="flex w-fit items-center gap-3 text-md font-light tracking-tight text-muted-foreground cursor-pointer duration-200 hover:text-foreground"
        >
          <ChevronLeft size={20} strokeWidth={2.25} /> {t("contact.back")}
        </button>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-4">
        {/* Left Side: Matter */}
        <div className="flex flex-col gap-10 justify-center">
          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-light tracking-tight sm:text-4xl">
              {t("contact.title")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {t("contact.description")}
            </p>
            <p className="text-sm text-muted-foreground">{t("contact.location")}</p>
          </FadeIn>
        </div>

        {/* Right Side: Links */}
        <div className="flex flex-col gap-3 justify-center">
          {socials.map((social, index) => (
            <FadeIn key={social.name} delay={0.2 + index * 0.05}>
              <a
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  social.href.startsWith("mailto") ? undefined : "noreferrer"
                }
                className="group flex items-center justify-between rounded-xl border border-dashed border-border/80 bg-card p-4 transition-all hover:border-foreground/30 hover:bg-muted/20"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={
                      resolvedTheme === "dark" && social.darkIcon
                        ? social.darkIcon
                        : social.icon
                    }
                    alt={social.name}
                    className="h-6 w-6 rounded-sm object-contain"
                  />
                  <span className="flex flex-col">
                    <span className="text-base font-light tracking-tight">{social.name}</span>
                    <span className="text-sm text-muted-foreground">{social.detail}</span>
                  </span>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Contact;
