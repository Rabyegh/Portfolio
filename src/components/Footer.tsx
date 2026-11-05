import { Mail } from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { useI18n } from "@/i18n";

const Footer = () => {
  const { t } = useI18n();
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-6 sm:pb-8">
      <footer className="flex flex-row items-start justify-between gap-6 border-t border-dashed border-border/80 pt-4 text-sm">
        <div className="flex flex-col gap-3">
          <p className="max-w-sm text-sm font-light leading-5 text-muted-foreground">
            {t("footer.availability")}
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Rabyegh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-border/80 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <LuGithub className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-rabie-ghdiri-51ab41329/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-border/80 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <LuLinkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:rabye.ghd@gmail.com"
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-border/80 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
        <p className="shrink-0 text-sm font-light tracking-tight text-muted-foreground">
          © 2026 Mohamed Rabie Ghediri
        </p>
      </footer>
    </div>
  );
};

export default Footer;
