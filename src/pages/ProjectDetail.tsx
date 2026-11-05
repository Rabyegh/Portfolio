import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ChevronLeft } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import TechIcon from "@/components/helpers/TechIcon";
import { useNavigate, useParams } from "react-router-dom";
import { FadeIn } from "@/components/helpers/FadeIn";

import NotFound from "./NotFound";
import { useI18n } from "@/i18n";

const frenchProjectDetails: Record<string, { name: string; description: string }> = {
  "RegulaRAG - Regulatory Intelligence & Compliance Analysis": {
    name: "RegulaRAG - Intelligence réglementaire et analyse de conformité",
    description: "Plateforme d'analyse réglementaire basée sur l'IA combinant Hybrid RAG et GraphRAG pour rechercher, relier et interpréter des informations réglementaires complexes. Elasticsearch et pgvector assurent la recherche hybride, tandis que Neo4j représente les relations entre les entités et les exigences réglementaires. Le backend et l'application sont développés avec FastAPI et React.",
  },
  "AI Pharmaceutical Product Recognition & Price Comparison": {
    name: "Reconnaissance de produits pharmaceutiques et comparaison des prix par IA",
    description: "Pipeline de vision par ordinateur qui reconnaît les produits pharmaceutiques à partir d'images avec YOLOv11 et extrait leurs informations avec PaddleOCR. LLaMA 3.3 via Groq traite les informations extraites pour comparer les produits, avec Elasticsearch pour la recherche.",
  },
  "Real-Time Flight Delay Prediction System": {
    name: "Système de prédiction des retards de vols en temps réel",
    description: "Pipeline temps réel utilisant Kafka et Spark Structured Streaming pour traiter et analyser plus d'un million de trajets aériens. Cassandra assure le stockage, MLflow le suivi des modèles et des expériences, Grafana la supervision, avec un composant prédictif dédié aux retards.",
  },
  "AutoMarket Intel - Automotive Market Data Platform": {
    name: "AutoMarket Intel - Plateforme de données du marché automobile",
    description: "Pipeline d'ingénierie des données qui collecte, transforme et organise plus de 108 000 annonces automobiles dans une plateforme prête pour l'analyse. DuckDB et dbt assurent les transformations et la validation, Parquet et AWS S3 le stockage, tandis que Terraform et GitHub Actions automatisent l'infrastructure et la CI/CD.",
  },
  "CropWatch - Geospatial Data & AI for Agricultural Monitoring": {
    name: "CropWatch - Données géospatiales et IA pour le suivi agricole",
    description: "Plateforme régionale combinant imagerie satellite, précipitations, climat et données pédologiques pour surveiller l'état des cultures céréalières. La partie données couvre l'ingestion, le traitement raster, l'alignement spatial et temporel ainsi que les formats prêts pour l'analyse. La partie IA utilise le machine learning géospatial pour identifier les signes de stress hydrique et estimer le risque de dégradation de la végétation à 14 jours, avec une couche RAG explicable prévue.",
  },
};

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { language, t } = useI18n();
  const project = projects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug,
  );

  if (!project) {
    return <NotFound />;
  }

  const localizedProject = language === "fr" ? frenchProjectDetails[project.name] : undefined;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col px-6 pt-6 pb-8 sm:pt-12 sm:pb-24 space-y-6">
      <FadeIn yOffset={10} duration={0.4}>
        <button
          onClick={() => navigate("/projects")}
          className="flex w-fit items-center gap-3 text-md font-light tracking-tight text-muted-foreground cursor-pointer duration-200 hover:text-foreground"
        >
          <ChevronLeft size={20} strokeWidth={2.25} /> {t("projectDetail.back")}
        </button>
      </FadeIn>
      <div className="flex flex-col gap-6">
        <FadeIn delay={0.1}>
          <h1 className="text-2xl font-light tracking-tight sm:text-4xl">
            {localizedProject?.name ?? project.name}
          </h1>
          <p className="mt-4 text-lg font-light text-muted-foreground sm:text-xl">
            {localizedProject?.description ?? project.description}
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                className="border border-border border-dashed"
                size="lg"
              >
                <LuGithub className="w-4 h-4" />
                {t("projectDetail.source")}
              </Button>
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          {project.imgSrc ? (
            <img
              className="rounded-lg border border-border border-dashed"
              src={project.imgSrc}
              alt={project.name}
              loading="lazy"
            />
          ) : null}
        </FadeIn>
        <FadeIn delay={0.25}>
          <h2 className="mb-4 text-xl font-light tracking-tight sm:text-2xl">
            {t("projectDetail.technologies")}
          </h2>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech.name}
                className="bg-card ml-1 inline-flex items-center gap-1.5 rounded-md border border-dashed px-1 py-1.5 text-xs text-foreground sm:px-3.5 sm:text-sm"
              >
                <TechIcon item={tech} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                {tech.name}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </main>
  );
};

export default ProjectDetail;
