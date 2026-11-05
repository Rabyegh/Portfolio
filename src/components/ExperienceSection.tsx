import { CalendarDays, CheckCircle2, MapPin, BriefcaseBusiness, ArrowUpRight } from "lucide-react";
import TechIcon from "./helpers/TechIcon";
import type { TechItem } from "@/data/tech";
import yonnoviaLogo from "../../logo-yonnovia-removebg-preview.png";
import otospexLogo from "../../otospex-logo-removebg-preview.png";
import { useI18n } from "@/i18n";

const experienceTech: Record<string, TechItem> = {
  Python: { name: "Python", icon: "https://cdn.simpleicons.org/python" },
  FastAPI: { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi" },
  React: { name: "React", icon: "/tech/react.svg" },
  TypeScript: { name: "TypeScript", icon: "/tech/typescript.svg" },
  PostgreSQL: { name: "PostgreSQL", icon: "/tech/postgre.svg" },
  "Sentence Transformers": {
    name: "Sentence Transformers",
    icon: "https://cdn.simpleicons.org/huggingface",
  },
  Statsmodels: { name: "Statsmodels", icon: "https://api.iconify.design/mdi/chart-line.svg" },
  SQL: { name: "SQL", icon: "database" },
  Airflow: { name: "Airflow", icon: "https://cdn.simpleicons.org/apacheairflow" },
  dbt: { name: "dbt", icon: "https://api.iconify.design/logos/dbt.svg" },
  Docker: { name: "Docker", icon: "/tech/docker.svg" },
  "Power BI": { name: "Power BI", icon: "https://api.iconify.design/devicon/powerbi.svg" },
};

const experiences = [
  {
    company: "Yonnov'IA",
    href: "https://yonnovia.fr/",
    logo: yonnoviaLogo,
    role: "AI / Data Science Intern",
    location: "Marseille, France",
    dates: "June - August 2026",
    responsibilities: [
      "Built an end-to-end platform for scientific-domain discovery, historical publication analysis and trend forecasting through 2030, supporting OpenAlex and local CSV datasets.",
      "Implemented E5 semantic discovery to construct research families and identify terminology variants from publication data.",
      "Developed a forecasting engine comparing Naive, Linear, Holt, ETS and ARIMA models with rolling-origin backtesting for automatic model selection.",
    ],
    technologies: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Sentence Transformers", "Statsmodels"],
  },
  {
    company: "Otospex Solutions",
    href: "https://otospexsolutions.com/",
    logo: otospexLogo,
    role: "Data Engineering Intern",
    location: "Djerba, Tunisia",
    dates: "June - August 2025",
    responsibilities: [
      "Built an Airflow ELT pipeline loading multi-source vehicle data into a PostgreSQL warehouse.",
      "Built incremental dbt Bronze, Silver and Gold layers for clean, standardized star-schema data.",
      "Implemented automated data quality checks for completeness, validity, uniqueness and consistency on vehicle listings.",
    ],
    technologies: ["Python", "SQL", "Airflow", "dbt", "PostgreSQL", "Docker", "Power BI"],
  },
];

const ExperienceSection = () => {
  const { t, language } = useI18n();
  const localizedExperiences = experiences.map((experience) => {
    if (language === "en") return experience;
    return experience.company === "Yonnov'IA"
      ? {
          ...experience,
          role: "Stagiaire en IA / Data Science",
          dates: "Juin - Août 2026",
          responsibilities: [
            "Développement d'une plateforme de bout en bout pour l'exploration de domaines scientifiques, l'analyse de publications historiques et la prévision des tendances jusqu'en 2030, avec OpenAlex et des données CSV locales.",
            "Mise en œuvre d'une recherche sémantique E5 pour construire des familles de recherche et identifier les variantes terminologiques.",
            "Développement d'un moteur de prévision comparant les modèles Naive, Linéaire, Holt, ETS et ARIMA avec backtesting à origine glissante pour sélectionner automatiquement le modèle.",
          ],
        }
      : {
          ...experience,
          role: "Stagiaire en ingénierie des données",
          dates: "Juin - Août 2025",
          responsibilities: [
            "Développement d'un pipeline ELT Airflow chargeant des données automobiles multi-sources dans un entrepôt PostgreSQL.",
            "Création de couches Bronze, Silver et Gold incrémentales avec dbt pour obtenir des données propres et standardisées en schéma en étoile.",
            "Mise en place de contrôles automatisés de qualité des données pour vérifier la complétude, la validité, l'unicité et la cohérence des annonces.",
          ],
        };
  });

  return (
    <section id="experience" className="w-full space-y-6">
      <p className="text-2xl font-light tracking-tight sm:text-3xl">{t("experience.title")}</p>

      <div className="relative space-y-8 pl-7 sm:pl-10">
        <div className="absolute bottom-8 left-1.5 top-8 w-px bg-border/80 sm:left-2" />

        {localizedExperiences.map((experience) => (
          <article key={experience.company} className="relative">
            <div className="absolute -left-[1.65rem] top-8 z-10 h-3 w-3 rounded-full border-2 border-background bg-foreground sm:-left-[2.1rem]" />

            <div className="rounded-xl border border-dashed border-border/80 bg-card p-4 sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-dashed border-border/80 bg-white p-1">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className={`h-full w-full object-contain ${experience.company === "Otospex Solutions" ? "scale-150" : ""}`}
                    />
                  </div>
                  <div className="min-w-0">
                    <a
                      href={experience.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-lg font-normal tracking-tight text-foreground hover:text-muted-foreground"
                    >
                      {experience.company}
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                    <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <BriefcaseBusiness className="h-3.5 w-3.5" />
                      {experience.role}
                    </p>
                    <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {experience.location}
                    </p>
                  </div>
                </div>

                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-dashed border-border/80 px-2.5 py-1 text-xs text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {experience.dates}
                </span>
              </div>

              <div className="mt-5">
                <h2 className="text-sm font-normal text-foreground">{t("experience.achievements")}</h2>
                <div className="mt-2 h-px w-9 bg-foreground" />
                <ul className="mt-4 space-y-3">
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-2.5 text-sm leading-6 text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-foreground" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {experience.technologies.map((technology) => (
                  <span key={technology} className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-muted/30 px-2.5 py-1 text-xs text-muted-foreground">
                    <TechIcon item={experienceTech[technology]} className="h-3.5 w-3.5" />
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
