import { useState } from "react";
import { Code2, FlaskConical, BarChart2, TrendingUp, Layers, BookOpen, ArrowRight } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const toolCategories = [
  {
    id: "programming",
    icon: Code2,
    label: "Programming Languages",
    short: "Languages",
    color: "#1d6fa4",
    glow: "rgba(29,111,164,0.18)",
    tools: [
      { name: "Python",  desc: "Data science, automation, ML, forecasting & web development" },
      { name: "R",       desc: "Advanced statistics, econometrics, visualization & research analytics" },
      { name: "MATLAB",  desc: "Mathematical modeling, simulation & engineering analysis" },
      { name: "SQL",     desc: "Database management, querying & reporting automation" },
    ],
  },
  {
    id: "research",
    icon: BookOpen,
    label: "Research & Documentation",
    short: "Research",
    color: "#15803d",
    glow: "rgba(21,128,61,0.18)",
    tools: [
      { name: "LaTeX",                desc: "Thesis writing, journal papers & technical documentation" },
      { name: "Microsoft Word",       desc: "Reports, documentation & professional formatting" },
      { name: "Microsoft PowerPoint", desc: "Professional presentations, animations & visual storytelling" },
      { name: "Adobe Acrobat",        desc: "PDF editing, conversion & document management" },
    ],
  },
  {
    id: "bi",
    icon: BarChart2,
    label: "Data & Business Intelligence",
    short: "BI Tools",
    color: "#be123c",
    glow: "rgba(190,18,60,0.18)",
    tools: [
      { name: "Microsoft Excel", desc: "Data cleaning, formulas, dashboards & analytics" },
      { name: "Power BI",        desc: "Interactive dashboards, KPIs & executive reporting" },
      { name: "SPSS",            desc: "Hypothesis testing, surveys & academic research" },
      { name: "Minitab",         desc: "Quality control, Six Sigma & industrial analytics" },
      { name: "Tableau",         desc: "Advanced dashboards and business insights" },
    ],
  },
  {
    id: "econometrics",
    icon: TrendingUp,
    label: "Econometrics & Forecasting",
    short: "Econometrics",
    color: "#b45309",
    glow: "rgba(180,83,9,0.18)",
    tools: [
      { name: "EViews",        desc: "Time series modeling, regression, ARIMA & forecasting" },
      { name: "Design-Expert", desc: "Optimization, DOE & response surface methodology" },
      { name: "OriginPro",     desc: "Publication-quality charts & scientific analysis" },
    ],
  },
  {
    id: "environments",
    icon: Layers,
    label: "Development Environments",
    short: "Environments",
    color: "#4338ca",
    glow: "rgba(67,56,202,0.18)",
    tools: [
      { name: "Jupyter Notebook",   desc: "Reproducible analysis, coding & ML experimentation" },
      { name: "Visual Studio Code", desc: "Programming, debugging & application development" },
      { name: "Anaconda",           desc: "Package management & data science environment setup" },
    ],
  },
  {
    id: "python",
    icon: FlaskConical,
    label: "Python Libraries & AI",
    short: "Python / AI",
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.18)",
    tools: [
      { name: "Pandas",        desc: "Data cleaning, transformation & structured data analysis" },
      { name: "NumPy",         desc: "Numerical computing, arrays & matrix operations" },
      { name: "Scikit-learn",  desc: "Machine learning models, preprocessing & evaluation" },
      { name: "TensorFlow",    desc: "Deep learning, neural networks & AI model development" },
      { name: "Keras",         desc: "User-friendly deep learning framework for rapid prototyping" },
      { name: "Matplotlib",    desc: "Professional charts, graphs & visualization" },
      { name: "Seaborn",       desc: "Statistical graphics & enhanced visualization design" },
      { name: "Statsmodels",   desc: "Econometrics, regression & time series analysis" },
      { name: "SciPy",         desc: "Scientific computing, optimization & mathematics" },
      { name: "BeautifulSoup", desc: "Web scraping & HTML data extraction" },
      { name: "Selenium",      desc: "Automated browsing & dynamic website scraping" },
      { name: "Requests",      desc: "API access & web data collection" },
      { name: "Scrapy",        desc: "Large-scale professional web scraping framework" },
    ],
  },
  {
    id: "r",
    icon: Code2,
    label: "R Packages & Libraries",
    short: "R Packages",
    color: "#0e7490",
    glow: "rgba(14,116,144,0.18)",
    tools: [
      { name: "dplyr",         desc: "Data wrangling & transformation in R" },
      { name: "ggplot2",       desc: "Advanced statistical graphics in R" },
      { name: "TSA",           desc: "Time series analysis in R" },
      { name: "forecast",      desc: "Forecasting models & prediction in R" },
      { name: "tseries",       desc: "Stationarity testing & financial time series tools" },
      { name: "caret",         desc: "Machine learning workflow & model training in R" },
      { name: "shiny",         desc: "Interactive dashboards & R web applications" },
      { name: "mgarch / BEKK", desc: "Multivariate GARCH & volatility modeling in R" },
    ],
  },
];

const stats = [
  { value: "4+",  label: "Languages",          color: "#1d6fa4", glow: "rgba(29,111,164,0.15)" },
  { value: "13+", label: "Python Libraries",    color: "#7c3aed", glow: "rgba(124,58,237,0.15)" },
  { value: "8+",  label: "R Packages",          color: "#0e7490", glow: "rgba(14,116,144,0.15)" },
  { value: "15+", label: "BI & Research Tools", color: "#be123c", glow: "rgba(190,18,60,0.15)" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ToolsSection() {
  const [activeTab, setActiveTab] = useState("programming");
  const active = toolCategories.find((c) => c.id === activeTab)!;
  const ActiveIcon = active.icon;

  return (
    <section id="tools" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mb-16 fade-in">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-portfolio-secondary mb-3">
            Technical Stack
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-portfolio-primary leading-tight mb-5">
            Software &amp; Tools
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            A comprehensive toolkit spanning programming, analytics, research, and AI —
            all applied to deliver rigorous, publication-ready results.
          </p>
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 fade-in">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-xl px-6 py-5 text-center border border-gray-100 transition-transform duration-200 hover:-translate-y-1"
              style={{ boxShadow: `0 4px 20px ${s.glow}, 0 1px 4px rgba(0,0,0,0.05)` }}
            >
              <p className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</p>
              <p className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Main layout: Sidebar + Panel ── */}
        <div
          className="flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden mb-10 fade-in"
          style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)" }}
        >
          {/* Sidebar – desktop */}
          <nav className="hidden md:flex flex-col w-60 flex-shrink-0 bg-white border-r border-gray-100">
            {toolCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === activeTab;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className="group flex items-center gap-3 px-5 py-3.5 text-left transition-all duration-200 border-l-[3px]"
                  style={{
                    borderLeftColor: isActive ? cat.color : "transparent",
                    backgroundColor: isActive ? "#f9fafb" : "transparent",
                  }}
                >
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{
                      backgroundColor: isActive ? `${cat.color}15` : "transparent",
                      boxShadow: isActive ? `0 2px 8px ${cat.glow}` : "none",
                    }}
                  >
                    <Icon
                      className="h-3.5 w-3.5 transition-colors duration-200"
                      style={{ color: isActive ? cat.color : "#9ca3af" }}
                    />
                  </span>
                  <span
                    className="text-sm font-medium transition-colors duration-200"
                    style={{ color: isActive ? "#111827" : "#6b7280" }}
                  >
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Mobile tab strip */}
          <div className="md:hidden flex overflow-x-auto gap-2 px-4 py-3 bg-white border-b border-gray-100 w-full">
            {toolCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === activeTab;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 border transition-all duration-200"
                  style={isActive
                    ? { backgroundColor: cat.color, borderColor: cat.color, color: "#fff", boxShadow: `0 2px 10px ${cat.glow}` }
                    : { backgroundColor: "#fff", color: "#6b7280", borderColor: "#e5e7eb" }
                  }
                >
                  <Icon className="h-3 w-3" />
                  {cat.short}
                </button>
              );
            })}
          </div>

          {/* Content panel */}
          <div className="flex-1 bg-gray-50 p-8 sm:p-10">
            {/* Panel header */}
            <div className="flex items-start gap-4 mb-8 pb-6 border-b border-gray-200">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: `${active.color}12`,
                  boxShadow: `0 4px 18px ${active.glow}`,
                }}
              >
                <ActiveIcon className="h-6 w-6" style={{ color: active.color }} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{active.label}</h3>
                <p className="text-sm text-gray-400 mt-0.5">{active.tools.length} tools &amp; technologies</p>
              </div>
            </div>

            {/* Tools grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {active.tools.map((tool, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl px-5 py-4 border border-gray-100 transition-all duration-200 hover:-translate-y-0.5 group cursor-default"
                  style={{ boxShadow: `0 2px 12px rgba(0,0,0,0.05)` }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 6px 24px ${active.glow}, 0 2px 8px rgba(0,0,0,0.06)`)}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 2px 12px rgba(0,0,0,0.05)`)}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: active.color }}
                    />
                    <p className="text-sm font-semibold text-gray-800">{tool.name}</p>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed pl-3.5">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-8 rounded-2xl fade-in"
          style={{
            background: "linear-gradient(135deg, hsl(210,50%,23%) 0%, hsl(207,90%,32%) 100%)",
            boxShadow: "0 8px 40px rgba(29,111,164,0.25), 0 2px 8px rgba(0,0,0,0.10)",
          }}
        >
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-200 mb-1">
              Need a custom solution?
            </p>
            <h3 className="text-xl font-bold text-white">Tell us about your project</h3>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 bg-white text-portfolio-primary px-7 py-3 rounded-xl text-sm font-bold hover:bg-blue-50 transition-all duration-200 whitespace-nowrap"
            style={{ boxShadow: "0 4px 16px rgba(255,255,255,0.20)" }}
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
