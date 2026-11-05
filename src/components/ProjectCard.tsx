import { LuGithub } from "react-icons/lu";
import TechIcon from "./helpers/TechIcon";
import type { Project } from "@/data/projects";
import { useNavigate } from "react-router-dom";
import { useI18n } from "@/i18n";

const frenchProjectText: Record<string, { description: string; categories: Record<string, string> }> = {
  "RegulaRAG - Regulatory Intelligence & Compliance Analysis": {
    description: "Plateforme d'analyse réglementaire basée sur l'IA combinant Hybrid RAG et GraphRAG pour rechercher, relier et interpréter des informations réglementaires complexes.",
    categories: { "AI & LLM": "IA et LLM" },
  },
  "AI Pharmaceutical Product Recognition & Price Comparison": {
    description: "Pipeline de vision par ordinateur qui reconnaît les produits pharmaceutiques à partir d'images et extrait leurs informations pour comparer les produits.",
    categories: { "AI & LLM": "IA et LLM" },
  },
  "Real-Time Flight Delay Prediction System": {
    description: "Pipeline temps réel utilisant Kafka et Spark Structured Streaming pour traiter et analyser plus d'un million de trajets aériens et prédire les retards.",
    categories: { "AI & LLM": "IA et LLM", "Data Engineering": "Ingénierie des données" },
  },
  "AutoMarket Intel - Automotive Market Data Platform": {
    description: "Pipeline d'ingénierie des données qui collecte, transforme et organise plus de 108 000 annonces automobiles dans une plateforme prête pour l'analyse.",
    categories: { "Data Engineering": "Ingénierie des données" },
  },
  "CropWatch - Geospatial Data & AI for Agricultural Monitoring": {
    description: "Plateforme régionale combinant imagerie satellite, précipitations, climat et données pédologiques pour surveiller l'état des cultures céréalières.",
    categories: { "AI & LLM": "IA et LLM", "Data Engineering": "Ingénierie des données" },
  },
};

const ProjectCard = ({ name, imgSrc, category, description, techStack, githubLink }: Project) => {
  const navigate = useNavigate();
  const { language, t } = useI18n();
  const localized = language === "fr" ? frenchProjectText[name] : undefined;
  const slug = `/projects/${name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={() => navigate(slug)}
      onKeyDown={(e) => e.key === "Enter" && navigate(slug)}
      className="group flex flex-col gap-2 bg-card border border-dashed border-border/80 p-1.5 rounded-xl w-full overflow-hidden hover:bg-muted/20 transition-all duration-200 cursor-pointer"
    >
      {imgSrc ? (
        <div className="group/image rounded-lg overflow-hidden border border-border/80 bg-muted/30">
          <img
            src={imgSrc}
            alt={name}
            loading="lazy"
            className="rounded-lg w-full object-cover transition-all duration-500 ease-out group-hover/image:blur-xs"
          />
        </div>
      ) : null}

      <div className="px-2 mt-3">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {category.map((label) => (
            <span key={label} className="rounded-md bg-accent px-2 py-1 text-xs text-accent-foreground">
              {localized?.categories[label] ?? label}
            </span>
          ))}
        </div>
        <div className="text-xl font-light tracking-tight">{name}</div>
        <p className="mt-1 text-sm font-light text-muted-foreground line-clamp-2">{localized?.description ?? description}</p>
      </div>

      <div className="flex items-center gap-4 px-2 mt-4">
        {techStack.slice(0, 8).map((tech) => (
          <TechIcon key={tech.name} item={tech} className="w-5 h-5" showTooltip />
        ))}
        {techStack.length > 8 && (
          <span className="text-sm text-muted-foreground font-light">
            +{techStack.length - 8}
          </span>
        )}
      </div>

      <div className="w-full h-px bg-border mt-2 mb-1" />

      <div className="flex items-center justify-between mt-1 px-2 pb-2">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <LuGithub className="w-4 h-4" />
          <span className="text-[15px] font-extralight">{t("projects.github")}</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
