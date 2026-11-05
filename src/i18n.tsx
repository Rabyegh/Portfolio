import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "en" | "fr";

type TranslationKey =
  | "nav.technologies"
  | "nav.experience"
  | "nav.projects"
  | "nav.education"
  | "hero.dataStudent"
  | "hero.aiStudent"
  | "hero.tagline"
  | "hero.description"
  | "hero.contact"
  | "hero.dataCv"
  | "hero.aiCv"
  | "skills.title"
  | "skills.inline"
  | "skills.animated"
  | "experience.title"
  | "experience.achievements"
  | "education.title"
  | "projects.title"
  | "projects.viewAll"
  | "projects.github"
  | "footer.availability"
  | "contact.back"
  | "contact.title"
  | "contact.description"
  | "contact.location"
  | "projectsPage.title"
  | "projectsPage.description"
  | "projectDetail.back"
  | "projectDetail.source"
  | "projectDetail.technologies";

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    "nav.technologies": "Technologies",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "hero.dataStudent": "Data Engineering Student",
    "hero.aiStudent": "AI Engineering Student",
    "hero.tagline": "building data pipelines and AI applications.",
    "hero.description": "Final-year Data Engineering and Decision Systems engineering student specializing in data pipelines, distributed processing and cloud platforms, and in machine learning, NLP and generative AI. Looking for a final-year project internship in data engineering or AI engineering.",
    "hero.contact": "Get in Touch",
    "hero.dataCv": "Data CV",
    "hero.aiCv": "AI CV",
    "skills.title": "Technologies",
    "skills.inline": "Show inline",
    "skills.animated": "Show animated rows",
    "experience.title": "Experience",
    "experience.achievements": "Key Achievements & Responsibilities",
    "education.title": "Educational Path",
    "projects.title": "Projects",
    "projects.viewAll": "View all Projects",
    "projects.github": "Github",
    "footer.availability": "Open to a final-year project internship in data engineering or AI engineering.",
    "contact.back": "Back to Home",
    "contact.title": "Let's connect",
    "contact.description": "I'm looking for a final-year project internship (PFE) in data engineering or AI engineering. If you're hiring, or want to talk about one of my projects, send me an email or a message on LinkedIn.",
    "contact.location": "Based in Tunisia.",
    "projectsPage.title": "All Projects",
    "projectsPage.description": "A collection of my recent work, side projects, and experiments. Built from scratch with a focus on clean code and great user experiences.",
    "projectDetail.back": "Back to Projects",
    "projectDetail.source": "View Source",
    "projectDetail.technologies": "Technologies Used",
  },
  fr: {
    "nav.technologies": "Technologies",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.education": "Formation",
    "hero.dataStudent": "Étudiant en ingénierie des données",
    "hero.aiStudent": "Étudiant en ingénierie de l'IA",
    "hero.tagline": "créant des pipelines de données et des applications d'IA.",
    "hero.description": "Étudiant en dernière année du cycle d'ingénieur en systèmes de données et d'aide à la décision, spécialisé dans les pipelines de données, le traitement distribué et les plateformes cloud, ainsi que dans le machine learning, le NLP et l'IA générative. À la recherche d'un projet de fin d'études en ingénierie des données ou en ingénierie de l'IA.",
    "hero.contact": "Me contacter",
    "hero.dataCv": "CV Data",
    "hero.aiCv": "CV IA",
    "skills.title": "Technologies",
    "skills.inline": "Afficher en ligne",
    "skills.animated": "Afficher les lignes animées",
    "experience.title": "Expérience",
    "experience.achievements": "Réalisations et responsabilités",
    "education.title": "Parcours académique",
    "projects.title": "Projets",
    "projects.viewAll": "Voir tous les projets",
    "projects.github": "Github",
    "footer.availability": "À la recherche d'un projet de fin d'études en ingénierie des données ou en ingénierie de l'IA.",
    "contact.back": "Retour à l'accueil",
    "contact.title": "Échangeons",
    "contact.description": "Je recherche un projet de fin d'études en ingénierie des données ou en ingénierie de l'IA. Vous recrutez ou souhaitez échanger sur l'un de mes projets ? Envoyez-moi un e-mail ou un message sur LinkedIn.",
    "contact.location": "Basé en Tunisie.",
    "projectsPage.title": "Tous les projets",
    "projectsPage.description": "Une sélection de mes travaux récents, projets personnels et expérimentations, réalisés avec une attention particulière portée au code propre et à l'expérience utilisateur.",
    "projectDetail.back": "Retour aux projets",
    "projectDetail.source": "Voir le code source",
    "projectDetail.technologies": "Technologies utilisées",
  },
};

interface I18nContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem("portfolio-language");
    return stored === "fr" ? "fr" : "en";
  });

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    localStorage.setItem("portfolio-language", nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t: (key: TranslationKey) => translations[language][key] }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
};
