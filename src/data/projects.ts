import type { TechItem } from "@/data/tech";

export interface Project {
  name: string;
  category: string[];
  imgSrc?: string;
  description: string;
  techStack: TechItem[];
  liveLink?: string;
  githubLink: string;
  about: string;
  features: string[];
}

const simpleIcon = (name: string, slug: string): TechItem => ({
  name,
  icon: `https://cdn.simpleicons.org/${slug}`,
});

const tech = {
  react: { name: "React", icon: "/tech/react.svg" },
  python: simpleIcon("Python", "python"),
  kafka: simpleIcon("Kafka", "apachekafka"),
  spark: simpleIcon("Spark", "apachespark"),
  cassandra: simpleIcon("Cassandra", "apachecassandra"),
  mlflow: simpleIcon("MLflow", "mlflow"),
  fastapi: simpleIcon("FastAPI", "fastapi"),
  grafana: simpleIcon("Grafana", "grafana"),
  elasticsearch: simpleIcon("Elasticsearch", "elasticsearch"),
  neo4j: simpleIcon("Neo4j", "neo4j"),
  hybridRag: { name: "Hybrid RAG", icon: "https://api.iconify.design/mdi/magnify-scan.svg" },
  graphRag: { name: "GraphRAG", icon: "https://api.iconify.design/mdi/graph-outline.svg" },
  pgvector: { name: "pgvector", icon: "/tech/postgre.svg" },
  dbt: { name: "dbt", icon: "https://api.iconify.design/logos/dbt.svg" },
  duckdb: simpleIcon("DuckDB", "duckdb"),
  s3: { name: "AWS S3", icon: "https://api.iconify.design/logos/aws-s3.svg" },
  snowflake: simpleIcon("Snowflake", "snowflake"),
  parquet: simpleIcon("Parquet", "apacheparquet"),
  terraform: simpleIcon("Terraform", "terraform"),
  actions: simpleIcon("GitHub Actions", "githubactions"),
  qdrant: simpleIcon("Qdrant", "qdrant"),
  langgraph: simpleIcon("LangGraph", "langgraph"),
  yolo: simpleIcon("YOLOv11", "yolo"),
  paddleocr: simpleIcon("PaddleOCR", "paddlepaddle"),
  llama: simpleIcon("LLaMA 3.3", "meta"),
  groq: simpleIcon("Groq", "groq"),
  vue: simpleIcon("Vue", "vuedotjs"),
  dagster: simpleIcon("Dagster", "dagster"),
  minio: simpleIcon("MinIO", "minio"),
  rasterio: { name: "Rasterio", icon: "https://api.iconify.design/mdi/map-outline.svg" },
  xarray: { name: "Xarray", icon: "https://api.iconify.design/mdi/chart-bell-curve-cumulative.svg" },
  geopandas: { name: "GeoPandas", icon: "https://api.iconify.design/mdi/map-marker-multiple-outline.svg" },
  postgis: { name: "PostGIS", icon: "/tech/postgre.svg" },
  sentinel: { name: "Sentinel-2", icon: "https://api.iconify.design/mdi/satellite-variant.svg" },
  chirps: { name: "CHIRPS", icon: "https://api.iconify.design/mdi/weather-rainy.svg" },
  era5: { name: "ERA5-Land", icon: "https://api.iconify.design/mdi/weather-partly-cloudy.svg" },
  soilGrids: { name: "SoilGrids", icon: "https://api.iconify.design/mdi/terrain.svg" },
  lightgbm: simpleIcon("LightGBM", "lightgbm"),
};

export const projects: Project[] = [
  {
    name: "RegulaRAG - Regulatory Intelligence & Compliance Analysis",
    category: ["AI & LLM"],
    description:
      "AI-powered regulatory analysis platform combining Hybrid RAG and GraphRAG to retrieve, connect and interpret complex regulatory information. Elasticsearch and pgvector handle hybrid retrieval, and Neo4j represents relationships between regulatory entities and requirements. Backend and application built with FastAPI and React.",
    about: "",
    features: [],
    techStack: [
      tech.hybridRag,
      tech.graphRag,
      tech.elasticsearch,
      tech.pgvector,
      tech.neo4j,
      tech.fastapi,
      tech.react,
    ],
    githubLink: "https://github.com/Rabyegh/RegulaRAG",
  },
  {
    name: "AI Pharmaceutical Product Recognition & Price Comparison",
    category: ["AI & LLM"],
    description:
      "Computer vision pipeline that recognizes pharmaceutical products from images with YOLOv11 and extracts product information with PaddleOCR. LLaMA 3.3 through Groq processes the extracted information for product comparison, with Elasticsearch for retrieval.",
    about: "",
    features: [],
    techStack: [
      tech.yolo,
      tech.paddleocr,
      tech.llama,
      tech.groq,
      tech.elasticsearch,
      tech.fastapi,
      tech.vue,
    ],
    githubLink:
      "https://github.com/Rabyegh/AI-Powered-Pharmaceutical-Product-Recognition-Price-Comparison-Platform",
  },
  {
    name: "Real-Time Flight Delay Prediction System",
    category: ["Data Engineering", "AI & LLM"],
    description:
      "Real-time pipeline using Kafka and Spark Structured Streaming to process and analyze 1M+ flight records. Cassandra for storage, MLflow for model tracking and experiments, Grafana dashboards for monitoring, and a predictive component for delays.",
    about: "",
    features: [],
    techStack: [
      tech.kafka,
      tech.spark,
      tech.cassandra,
      tech.mlflow,
      tech.fastapi,
      tech.grafana,
      tech.python,
    ],
    githubLink: "https://github.com/Rabyegh/Real-Time-Flight-Delay-Prediction-System",
  },
  {
    name: "AutoMarket Intel - Automotive Market Data Platform",
    category: ["Data Engineering"],
    description:
      "Data engineering pipeline that collects, transforms and organizes 108K+ automotive listings into an analytics-ready platform. DuckDB and dbt handle transformations and validation, Parquet and AWS S3 handle storage, and Terraform with GitHub Actions automate the infrastructure and CI/CD.",
    about: "",
    features: [],
    techStack: [
      tech.python,
      tech.duckdb,
      tech.dbt,
      tech.s3,
      tech.snowflake,
      tech.parquet,
      tech.terraform,
      tech.actions,
    ],
    githubLink: "https://github.com/Rabyegh/AutoMarket-Intel",
  },
  {
    name: "CropWatch - Geospatial Data & AI for Agricultural Monitoring",
    category: ["Data Engineering", "AI & LLM"],
    description:
      "Regional platform combining satellite imagery, rainfall, climate and soil data to monitor cereal vegetation conditions. The data side covers ingestion, raster processing, spatial and temporal alignment, and analytics-ready formats. The AI side covers geospatial machine learning to identify drought-stress patterns and estimate the risk of vegetation deterioration over a 14-day horizon, with a planned explainable RAG layer.",
    about: "",
    features: [],
    techStack: [
      tech.python,
      tech.dagster,
      tech.minio,
      tech.rasterio,
      tech.xarray,
      tech.geopandas,
      tech.postgis,
      tech.parquet,
      tech.sentinel,
      tech.chirps,
      tech.era5,
      tech.soilGrids,
      tech.lightgbm,
      tech.mlflow,
      tech.qdrant,
      tech.langgraph,
      tech.fastapi,
    ],
    githubLink: "https://github.com/Rabyegh/CropWatch-Tunisia-",
  },
];
