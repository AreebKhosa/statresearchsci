import { useState } from "react";
import {
  BarChart3, TrendingUp, Brain, HeartPulse, Leaf,
  FlaskConical, Database, GraduationCap, Globe, MapPin,
  Users, ShieldCheck, ArrowRight,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const serviceCategories = [
  {
    id: "statistical",
    icon: BarChart3,
    label: "Statistical Analysis",
    short: "Stats",
    color: "#1d6fa4",
    glow: "rgba(29,111,164,0.15)",
    items: [
      "Univariate Analysis", "Multivariate Analysis",
      "Descriptive & Inferential Statistics", "Hypothesis Testing",
      "Regression Analysis", "ANOVA / MANOVA",
      "Non-Parametric Testing", "Comparative Statistical Studies",
      "Factor Analysis & Dimension Reduction", "Statistical Report Writing",
    ],
  },
  {
    id: "econometrics",
    icon: TrendingUp,
    label: "Econometrics & Finance",
    short: "Finance",
    color: "#0369a1",
    glow: "rgba(3,105,161,0.15)",
    items: [
      "Econometric Modeling", "Time Series Forecasting",
      "ARIMA / SARIMA / VAR Models", "GARCH / MGARCH Volatility Modeling",
      "Market Efficiency Analysis", "Cryptocurrency & Stock Analytics",
      "Portfolio Risk Modeling", "Financial Forecasting Solutions",
    ],
  },
  {
    id: "ml",
    icon: Brain,
    label: "Machine Learning & AI",
    short: "ML / AI",
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.15)",
    items: [
      "Predictive Modeling", "Classification & Regression Models",
      "Random Forest / XGBoost", "Deep Learning (CNN, LSTM, ANN)",
      "AI-Based Forecasting Systems", "Recommendation Models",
      "Business Prediction Solutions", "Intelligent Automation Systems",
    ],
  },
  {
    id: "biostat",
    icon: HeartPulse,
    label: "Biostatistics & Medical",
    short: "Medical",
    color: "#be123c",
    glow: "rgba(190,18,60,0.15)",
    items: [
      "Biostatistics Analysis", "Clinical Trial Data Analysis",
      "Public Health Analytics", "Medical Statistics",
      "Epidemiological Studies", "Survival Analysis",
      "Healthcare Predictive Modeling", "Thesis & Publication Support",
    ],
  },
  {
    id: "environment",
    icon: Leaf,
    label: "Environmental & Energy",
    short: "Energy",
    color: "#15803d",
    glow: "rgba(21,128,61,0.15)",
    items: [
      "Environmental Statistics", "Air Quality Analysis",
      "Pollution Forecasting", "Meteorological Data Modeling",
      "Climate Trend Analysis", "Wind Energy Forecasting",
      "Sustainability Research Analytics",
    ],
  },
  {
    id: "optimization",
    icon: FlaskConical,
    label: "Optimization & DOE",
    short: "DOE",
    color: "#b45309",
    glow: "rgba(180,83,9,0.15)",
    items: [
      "Optimization Modeling", "Response Surface Methodology (RSM)",
      "Design of Experiments (DOE)", "Process Improvement Analytics",
      "Industrial Quality Solutions", "Simulation & Efficiency Modeling",
    ],
  },
  {
    id: "datasci",
    icon: Database,
    label: "Data Science & BI",
    short: "Data / BI",
    color: "#0e7490",
    glow: "rgba(14,116,144,0.15)",
    items: [
      "Data Cleaning & Preprocessing", "Exploratory Data Analysis (EDA)",
      "Dashboard Development", "Power BI Reporting",
      "Excel Automation & Analytics", "KPI Monitoring Systems",
      "Data Visualization Solutions",
    ],
  },
  {
    id: "academic",
    icon: GraduationCap,
    label: "Academic & Research",
    short: "Academic",
    color: "#4338ca",
    glow: "rgba(67,56,202,0.15)",
    items: [
      "Thesis Data Analysis", "MPhil / PhD Statistical Consulting",
      "Research Paper Write-up Support", "LaTeX Formatting & Referencing",
      "Plagiarism Guidance", "Journal Submission Support",
      "Research Posters & Presentations",
    ],
  },
  {
    id: "scraping",
    icon: Globe,
    label: "Web Scraping & Data",
    short: "Scraping",
    color: "#0f766e",
    glow: "rgba(15,118,110,0.15)",
    items: [
      "Automated Web Data Collection", "Custom Scraping Scripts",
      "Data Cleaning & Structuring", "Market Research Data Extraction",
      "Ready-to-Use Datasets", "API Data Collection Solutions",
    ],
  },
  {
    id: "gis",
    icon: MapPin,
    label: "GIS & Urban Intelligence",
    short: "GIS",
    color: "#92400e",
    glow: "rgba(146,64,14,0.15)",
    items: [
      "Spatial Data Analysis", "GeoMapping & Visualization",
      "Smart City Planning Models", "Civic Facility Prediction",
      "Demographic Mapping", "ArcGIS-Based Projects",
      "Location Intelligence Solutions",
    ],
  },
];

const whoWeServe = [
  "Academic Researchers", "MPhil / PhD Scholars",
  "Investors & Financial Analysts", "Healthcare Institutions",
  "Government & Public Sector Organizations", "Businesses & Startups",
  "Industrial & Manufacturing Firms", "Independent Professional Clients",
];

const whyChooseUs = [
  "Research-Level Accuracy", "Advanced Statistical Methods",
  "AI + Statistics Combined Solutions", "Publication-Ready Results",
  "Business-Focused Insights", "Confidential & Professional Service",
  "End-to-End Analytical Support",
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesSection() {
  const [activeId, setActiveId] = useState("statistical");
  const active = serviceCategories.find((s) => s.id === activeId)!;
  const ActiveIcon = active.icon;

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mb-16 fade-in">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-portfolio-secondary mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-portfolio-primary leading-tight mb-5">
            Our Services
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Research-grade, result-driven solutions across statistics, data science,
            machine learning, and intelligent decision systems — for researchers,
            institutions, startups, and professionals worldwide.
          </p>
        </div>

        {/* ── Main Layout: Sidebar + Panel ── */}
        <div
          className="flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden mb-16 fade-in"
          style={{ boxShadow: `0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)` }}
        >
          {/* Sidebar – desktop */}
          <nav className="hidden md:flex flex-col w-64 flex-shrink-0 bg-gray-50 border-r border-gray-100">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className="group flex items-center gap-3 px-5 py-3.5 text-left transition-all duration-200 border-l-[3px]"
                  style={{
                    borderLeftColor: isActive ? cat.color : "transparent",
                    backgroundColor: isActive ? "#ffffff" : "transparent",
                    boxShadow: isActive ? "inset 0 0 0 0 transparent, 2px 0 8px rgba(0,0,0,0.04)" : "none",
                  }}
                >
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{
                      backgroundColor: isActive ? `${cat.color}18` : "transparent",
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
          <div className="md:hidden flex overflow-x-auto gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100 w-full">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 border transition-all duration-200"
                  style={isActive
                    ? { backgroundColor: cat.color, borderColor: cat.color, color: "#fff", boxShadow: `0 2px 12px ${cat.glow}` }
                    : { backgroundColor: "#fff", color: "#6b7280", borderColor: "#e5e7eb" }
                  }
                >
                  <Icon className="h-3 w-3" />
                  {cat.short}
                </button>
              );
            })}
          </div>

          {/* Content Panel */}
          <div className="flex-1 bg-white p-8 sm:p-10">
            {/* Panel header */}
            <div className="flex items-start gap-4 mb-8 pb-6 border-b border-gray-100">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: `${active.color}12`,
                  boxShadow: `0 4px 16px ${active.glow}`,
                }}
              >
                <ActiveIcon className="h-6 w-6" style={{ color: active.color }} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{active.label}</h3>
                <p className="text-sm text-gray-400 mt-0.5">{active.items.length} specialised services</p>
              </div>
            </div>

            {/* Service items */}
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {active.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-default">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200 group-hover:scale-150"
                    style={{ backgroundColor: active.color }}
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-150">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Who We Serve & Why Choose Us ── */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 fade-in">

          {/* Who We Serve */}
          <div
            className="p-8 rounded-2xl bg-white border border-gray-100"
            style={{ boxShadow: "0 4px 24px rgba(29,111,164,0.08), 0 1px 4px rgba(0,0,0,0.05)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, hsl(210,50%,23%), hsl(207,90%,40%))",
                  boxShadow: "0 4px 14px rgba(29,111,164,0.30)",
                }}
              >
                <Users className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Who We Serve</h3>
            </div>
            <ul className="space-y-2.5">
              {whoWeServe.map((item, i) => (
                <li key={i} className="flex items-center gap-3 group">
                  <ArrowRight className="h-3.5 w-3.5 text-gray-300 flex-shrink-0 group-hover:text-portfolio-secondary transition-colors duration-150" />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-150">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose Us */}
          <div
            className="p-8 rounded-2xl bg-white border border-gray-100"
            style={{ boxShadow: "0 4px 24px rgba(21,128,61,0.08), 0 1px 4px rgba(0,0,0,0.05)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, hsl(149,57%,30%), hsl(149,57%,45%))",
                  boxShadow: "0 4px 14px rgba(21,128,61,0.30)",
                }}
              >
                <ShieldCheck className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Why Choose Our Expertise</h3>
            </div>
            <ul className="space-y-2.5">
              {whyChooseUs.map((item, i) => (
                <li key={i} className="flex items-center gap-3 group">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-150"
                    style={{ backgroundColor: "#15803d" }}
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-150">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-8 rounded-2xl border border-gray-100 fade-in"
          style={{
            background: "linear-gradient(135deg, hsl(210,50%,23%) 0%, hsl(207,90%,32%) 100%)",
            boxShadow: "0 8px 40px rgba(29,111,164,0.25), 0 2px 8px rgba(0,0,0,0.10)",
          }}
        >
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-200 mb-1">
              Let's collaborate
            </p>
            <h3 className="text-xl font-bold text-white">Ready to start your project?</h3>
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
