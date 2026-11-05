import { CalendarDays, GraduationCap } from "lucide-react";
import enetcomLogo from "../../logoenetcom-removebg-preview.png";
import ipeinLogo from "../../logo_ipein-removebg-preview.png";
import lyceeLogo from "../../lycee-technique-medenine-logo-removebg-preview.png";
import { useI18n } from "@/i18n";

const education = [
  {
    title: "Engineering Degree - Data Engineering & Decision Systems (IDSD)",
    institution: "ENET'Com, Sfax",
    dates: "2024 - Present",
    logo: enetcomLogo,
  },
  {
    title: "Engineering Preparatory Cycle - Physics & Technology (PT)",
    institution: "IPEIN, Nabeul",
    dates: "2021 - 2024",
    logo: ipeinLogo,
  },
  {
    title: "Scientific Baccalaureate - Honors: Good",
    institution: "Technical High School of Medenine",
    dates: "2020 - 2021",
    logo: lyceeLogo,
  },
];

const EducationSection = () => {
  const { t, language } = useI18n();
  const localizedEducation = language === "en"
    ? education
    : education.map((item, index) => ({
        ...item,
        title: [
          "Diplôme d'ingénieur - Ingénierie des données et systèmes d'aide à la décision (IDSD)",
          "Cycle préparatoire aux études d'ingénieur - Physique et technologie (PT)",
          "Baccalauréat scientifique - Mention : Bien",
        ][index],
        dates: item.dates.replace("Present", "Présent"),
      }));

  return (
  <section id="education" className="w-full space-y-6">
    <p className="text-2xl font-light tracking-tight sm:text-3xl">{t("education.title")}</p>

    <div className="relative flex flex-col">
      <div className="absolute bottom-8 left-8 top-8 w-px bg-border/80" />

      {localizedEducation.map((item, index) => (
        <article key={item.title} className={`relative flex gap-6 ${index < education.length - 1 ? "pb-10" : ""}`}>
          <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-dashed border-border/80 bg-white p-1.5">
            <img
              src={item.logo}
              alt={`${item.institution} logo`}
              className={`h-full w-full object-contain ${
                item.institution === "IPEIN, Nabeul" ||
                item.institution === "Technical High School of Medenine"
                  ? "scale-125"
                  : ""
              }`}
            />
          </div>
          <div className="min-w-0 flex-1 pt-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-base font-normal tracking-tight text-foreground sm:text-lg">{item.title}</h2>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <GraduationCap className="h-3.5 w-3.5" />
                  {item.institution}
                </p>
              </div>
              <span className="inline-flex w-fit shrink-0 items-center gap-1.5 pt-1 text-xs text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5" />
                {item.dates}
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
  );
};

export default EducationSection;
