export interface TechItem {
  name: string;
  icon: string;
  darkIcon?: string;
}

const simpleIcon = (slug: string, dark = false) =>
  `https://cdn.simpleicons.org/${slug}${dark ? "/white" : ""}`;

const iconify = (name: string) => `https://api.iconify.design/${name}.svg`;

const dataEngineering: TechItem[] = [
  { name: "Python", icon: simpleIcon("python") },
  { name: "SQL", icon: "database" },
  { name: "Apache Kafka", icon: simpleIcon("apachekafka"), darkIcon: simpleIcon("apachekafka", true) },
  { name: "Apache Spark", icon: simpleIcon("apachespark") },
  { name: "Apache Airflow", icon: simpleIcon("apacheairflow") },
  { name: "dbt", icon: iconify("logos/dbt") },
  { name: "DuckDB", icon: simpleIcon("duckdb") },
  { name: "Snowflake", icon: simpleIcon("snowflake") },
  { name: "Parquet", icon: simpleIcon("apacheparquet") },
];

const aiSkills: TechItem[] = [
  { name: "PyTorch", icon: simpleIcon("pytorch") },
  { name: "TensorFlow", icon: simpleIcon("tensorflow") },
  { name: "scikit-learn", icon: simpleIcon("scikitlearn") },
  { name: "MLflow", icon: simpleIcon("mlflow") },
  { name: "Hugging Face", icon: simpleIcon("huggingface") },
  { name: "LangChain", icon: simpleIcon("langchain"), darkIcon: simpleIcon("langchain", true) },
  { name: "LangGraph", icon: simpleIcon("langgraph"), darkIcon: simpleIcon("langgraph", true) },
  { name: "Elasticsearch", icon: simpleIcon("elasticsearch") },
  { name: "Neo4j", icon: simpleIcon("neo4j") },
  { name: "Qdrant", icon: simpleIcon("qdrant") },
];

const platformSkills: TechItem[] = [
  { name: "PostgreSQL", icon: "/tech/postgre.svg" },
  { name: "MongoDB", icon: simpleIcon("mongodb") },
  { name: "Cassandra", icon: simpleIcon("apachecassandra") },
  { name: "AWS S3", icon: iconify("logos/aws-s3") },
  { name: "Docker", icon: "/tech/docker.svg" },
  { name: "Kubernetes", icon: simpleIcon("kubernetes") },
  { name: "Terraform", icon: simpleIcon("terraform") },
  { name: "GitHub Actions", icon: simpleIcon("githubactions") },
  { name: "Git", icon: "/tech/git.svg" },
  { name: "GitHub", icon: "/social/github.svg", darkIcon: "/social/github-dark.svg" },
  { name: "FastAPI", icon: simpleIcon("fastapi") },
  { name: "React", icon: "/tech/react.svg" },
  { name: "Power BI", icon: iconify("devicon/powerbi") },
  { name: "Grafana", icon: simpleIcon("grafana") },
];

export const skills: TechItem[] = [...dataEngineering, ...aiSkills, ...platformSkills];

export const frontendSkills: TechItem[] = [
  { name: "React", icon: "/tech/react.svg" },
  { name: "TypeScript", icon: "/tech/typescript.svg" },
  { name: "JavaScript", icon: "/tech/js.svg" },
  { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg" },
  {
    name: "shadcn/ui",
    icon: "/tech/shadcn-ui-light.svg",
    darkIcon: "/tech/shadcn-ui-dark.svg",
  },
  { name: "Vite", icon: "/tech/vite.svg" },
  { name: "HTML5", icon: "/tech/html5.svg" },
  {
    name: "CSS",
    icon: "/tech/css3.svg",
    darkIcon: "/tech/css3-dark.svg",
  },
];

export const backendSkills: TechItem[] = [
  { name: "Java", icon: "/tech/java.svg" },
  { name: "Spring Boot", icon: "/tech/springboot.svg" },
  { name: "MySQL", icon: "/tech/mysql.svg" },
  { name: "Supabase", icon: "/tech/supabase.svg" },
  { name: "PostgreSQL", icon: "/tech/postgre.svg" },
  { name: "Redis", icon: "/tech/redis.svg" },
];

export const toolsSkills: TechItem[] = [
  { name: "Git", icon: "/tech/git.svg" },
  {
    name: "GitHub",
    icon: "/social/github.svg",
    darkIcon: "/social/github-dark.svg",
  },
  { name: "Maven", icon: "/tech/apachemaven.svg" },
  { name: "Gradle", icon: "/tech/gradle.svg" },
  { name: "Vercel", icon: "/tech/vercel-light.svg", darkIcon: "/tech/vercel-dark.svg" },
  { name: "Netlify", icon: "/tech/netlify.svg" },
  {
    name: "Bun",
    icon: "/tech/bun.svg",
    darkIcon: "/tech/bun-dark.svg",
  },
  { name: "Docker", icon: "/tech/docker.svg" },
  { name: "NPM", icon: "/tech/npm.svg" },
];

export const skillRows: { direction: "left" | "right"; category: string; items: TechItem[] }[] = [
  {
    direction: "left",
    category: "Data Engineering",
    items: dataEngineering,
  },
  {
    direction: "right",
    category: "AI, Machine Learning and Retrieval",
    items: aiSkills,
  },
  {
    direction: "left",
    category: "Databases, Cloud and Tools",
    items: platformSkills,
  },
];

export const projectTech = {
  rust: { name: "Rust", icon: "/tech/rust.svg" },
  react: { name: "React", icon: "/tech/react.svg" },
  javascript: { name: "JavaScript", icon: "/tech/js.svg" },
  typescript: { name: "TypeScript", icon: "/tech/typescript.svg" },
  tailwindcss: { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg" },
  vite: { name: "Vite", icon: "/tech/vite.svg" },
  motion: { name: "Framer Motion", icon: "/tech/motion.svg" },
  springboot: { name: "Spring Boot", icon: "/tech/springboot.svg" },
  radixui: {
    name: "Radix UI",
    icon: "/tech/radixui.svg",
    darkIcon: "/tech/radixui-dark.svg",
  },
  shadcnui: {
    name: "shadcn/ui",
    icon: "/tech/shadcn-ui-light.svg",
    darkIcon: "/tech/shadcn-ui-dark.svg",
  },
  gtk4: { name: "GTK4", icon: "/tech/gtk4.svg" },
  libadwaita: { name: "libadwaita", icon: "/tech/libadwaita.svg" },
  sqlite: { name: "SQLite", icon: "/tech/sqlite.svg" },
  supabase: { name: "Supabase", icon: "/tech/supabase.svg" },
  postgresql: { name: "PostgreSQL", icon: "/tech/postgre.svg" },
  redis: { name: "Redis", icon: "/tech/redis.svg" },
  jwt: {
    name: "JWT",
    icon: "/tech/jwt-light.svg",
    darkIcon: "/tech/jwt-dark.svg",
  },
  monaco: { name: "Monaco Editor", icon: "/tech/monaco.svg" },
  nodejs: {
    name: "Node.js",
    icon: "/tech/nodejs-light.svg",
    darkIcon: "/tech/nodejs-dark.svg",
  },
  ink: {
    name: "Ink",
    icon: "/tech/ink-light.svg",
    darkIcon: "/tech/ink-dark.svg",
  },
  commander: {
    name: "Commander.js",
    icon: "/tech/commander-light.svg",
    darkIcon: "/tech/commander-dark.svg",
  },
  execa: {
    name: "Execa",
    icon: "/tech/execa-light.svg",
    darkIcon: "/tech/execa-dark.svg",
  },
  docker: { name: "Docker", icon: "/tech/docker.svg" },
  go: { name: "Go", icon: "/tech/go.svg" },
  webassembly: { name: "WebAssembly", icon: "/tech/webassembly.svg" },
  cloudflare: { name: "Cloudflare Workers", icon: "/tech/cloudflare.svg" },
  framermotion: { name: "Framer Motion", icon: "/tech/motion.svg" },
  astro: {
    name: "Astro",
    icon: "/tech/astro-light.svg",
    darkIcon: "/tech/astro-dark.svg",
  },
  webcodecs: {
    name: "WebCodecs",
    icon: "/tech/webcodecs-light.svg",
    darkIcon: "/tech/webcodecs-dark.svg",
  },
} as const;
