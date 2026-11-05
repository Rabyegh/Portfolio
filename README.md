# Mohamed Rabie Ghediri — Portfolio

Personal portfolio for **Mohamed Rabie Ghediri**, a final-year Data Engineering and Decision Systems engineering student interested in data engineering, machine learning, NLP, and generative AI.

The portfolio presents my technical skills, professional experience, education, projects, CVs, and contact links in a responsive editorial-style interface.

## Highlights

- English and French language switching with persisted language preference
- Light, dark, and system theme modes
- Responsive layout for mobile, tablet, and desktop
- Smooth scrolling between homepage sections
- Technologies section with animated and expanded views
- Experience timeline for Yonnov'IA and Otospex Solutions
- Educational path with university and school logos
- Project cards with dedicated detail pages and GitHub links
- Data Engineering and AI CVs available directly from the homepage
- Rotating quote section
- GitHub, LinkedIn, and email contact links
- Vercel serverless API endpoints for GitHub and visitor-related functionality

## Sections

The homepage is organized in this order:

1. Hero
2. Technologies
3. Experience
4. Projects
5. Educational Path
6. Quotes

## Project Routes

- `/` — Portfolio homepage
- `/projects` — All projects
- `/projects/:slug` — Project detail page
- `/contact` — Contact page
- `/blogs` — Blog route
- `/blogs/:slug` — Blog detail page
- `/uses` — Tools and setup route
- `/opensource` — Open-source route
- `/opensource/:slug` — Open-source detail page

## Featured Projects

- **RegulaRAG** — Regulatory intelligence and compliance analysis using Hybrid RAG, GraphRAG, Elasticsearch, pgvector, Neo4j, FastAPI, and React.
- **AI Pharmaceutical Product Recognition & Price Comparison** — Pharmaceutical image recognition and product comparison using YOLOv11, PaddleOCR, LLaMA, Groq, and Elasticsearch.
- **Real-Time Flight Delay Prediction System** — Streaming data and flight delay prediction using Kafka, Spark Structured Streaming, Cassandra, MLflow, and Grafana.
- **AutoMarket Intel** — Automotive market data platform using DuckDB, dbt, Parquet, AWS S3, Terraform, and GitHub Actions.
- **CropWatch** — Geospatial data and AI platform for agricultural monitoring using satellite, climate, rainfall, and soil data.

## Technology Stack

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS v4, shadcn/ui, Radix UI
- **Routing:** React Router
- **Animation:** Framer Motion
- **Smooth scrolling:** Lenis
- **Themes:** next-themes
- **Icons:** Lucide React and React Icons
- **Backend endpoints:** Vercel serverless functions
- **Data and content:** TypeScript data modules in `src/data`

## Local Development

### Prerequisites

- Node.js and npm
- Optional: Vercel CLI for local serverless API endpoints

### Installation

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The frontend is then available at `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## CV Files

The CV files are stored in `public/cv/` so that Vite includes them in production builds:

- [Data Engineering CV](public/cv/Mohamed-Rabie-Ghediri-Data-Cv.pdf)
- [AI Engineering CV](public/cv/Mohamed-Rabie-Ghediri-AI-CV.pdf)

## Project Structure

```text
portfolio/
├── api/                         # Vercel serverless API functions
├── public/
│   ├── cv/                      # Public Data and AI CV files
│   ├── social/                  # Social media icons
│   └── tech/                    # Technology logos
├── src/
│   ├── components/              # Reusable UI and portfolio sections
│   ├── data/                    # Projects, technologies, quotes, and social links
│   ├── pages/                   # Route-level page components
│   ├── providers/               # Theme provider
│   ├── features/                # Feature-specific UI
│   ├── i18n.tsx                 # English/French translations and language state
│   ├── App.tsx                  # Homepage section composition
│   └── main.tsx                 # Application entry point and routing
├── index.html
├── package.json
└── vite.config.ts
```

## Deployment

The project is configured for deployment on Vercel. Build the project with:

```bash
npm run build
```

When deploying, make sure the `public/` directory is included so the CV files and static logos remain available.

## Contact

- GitHub: [github.com/Rabyegh](https://github.com/Rabyegh)
- LinkedIn: [Mohamed Rabie Ghediri](https://www.linkedin.com/in/mohamed-rabie-ghdiri-51ab41329/)
- Email: [rabye.ghd@gmail.com](mailto:rabye.ghd@gmail.com)

