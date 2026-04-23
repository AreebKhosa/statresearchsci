import { ExternalLink, ArrowLeft, BookOpen, TrendingUp, BarChart3, Leaf, HeartPulse, Globe } from "lucide-react";
import { Link } from "wouter";

const articles = [
  {
    id: 1,
    title: "Application of Principal Component Analysis (PCA) to Medical Data",
    doi: "https://doi.org/10.17485/ijst/2017/v10i20/91294",
    doiLabel: "10.17485/ijst/2017/v10i20/91294",
    category: "Medical Statistics",
    year: "2017",
    categoryColor: "#be123c",
    categoryBg: "rgba(190,18,60,0.08)",
    icon: HeartPulse,
  },
  {
    id: 2,
    title: "Impact Of Foreign Direct Investment On Economic Growth In Pakistan",
    doi: "https://doi.org/10.34218/IJM.12.4.2021.006",
    doiLabel: "10.34218/IJM.12.4.2021.006",
    category: "Financial Econometrics",
    year: "2021",
    categoryColor: "#1d6fa4",
    categoryBg: "rgba(29,111,164,0.08)",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Interdependence between temperature and precipitation: modeling using copula method toward climate protection",
    doi: "https://doi.org/10.1007/s40808-021-01256-8",
    doiLabel: "10.1007/s40808-021-01256-8",
    category: "Climate & Environment",
    year: "2021",
    categoryColor: "#15803d",
    categoryBg: "rgba(21,128,61,0.08)",
    icon: Leaf,
  },
  {
    id: 4,
    title: "Checking the Significance of Correlation Coefficient from the Regression Analysis using Wheat Yield",
    doi: "https://doi.org/10.38211/joarps.2021.2.2.17",
    doiLabel: "10.38211/joarps.2021.2.2.17",
    category: "Agricultural Statistics",
    year: "2021",
    categoryColor: "#b45309",
    categoryBg: "rgba(180,83,9,0.08)",
    icon: BarChart3,
  },
  {
    id: 5,
    title: "Forecasting Techniques for Wheat Production in Sindh Province",
    doi: "https://doi.org/10.38211/joarps.2021.2.1.12",
    doiLabel: "10.38211/joarps.2021.2.1.12",
    category: "Forecasting",
    year: "2021",
    categoryColor: "#7c3aed",
    categoryBg: "rgba(124,58,237,0.08)",
    icon: TrendingUp,
  },
  {
    id: 6,
    title: "Crime Patterns and District Clustering In Hyderabad Division, Sindh Using Hierarchical Cluster Analysis",
    doi: "https://doi.org/10.5281/zenodo.19134461",
    doiLabel: "10.5281/zenodo.19134461",
    category: "Cluster Analysis",
    year: "2024",
    categoryColor: "#0369a1",
    categoryBg: "rgba(3,105,161,0.08)",
    icon: Globe,
  },
  {
    id: 7,
    title: "Econometric analysis of price fluctuations in onion crop using SARIMA model",
    doi: "https://www.assajournal.com/index.php/36/article/view/1212",
    doiLabel: "assajournal.com",
    category: "Time Series",
    year: "2023",
    categoryColor: "#15803d",
    categoryBg: "rgba(21,128,61,0.08)",
    icon: BarChart3,
  },
  {
    id: 8,
    title: "A data driven approach for forecasting the COVID-19 cases in Pakistan",
    doi: "https://doi.org/10.5281/zenodo.17024984",
    doiLabel: "10.5281/zenodo.17024984",
    category: "Public Health",
    year: "2021",
    categoryColor: "#be123c",
    categoryBg: "rgba(190,18,60,0.08)",
    icon: HeartPulse,
  },
  {
    id: 9,
    title: "Modelling The Conditional Co-Movements Of Pakistan And International Stock Markets",
    doi: "https://doi.org/10.18510/hssr.2021.9330",
    doiLabel: "10.18510/hssr.2021.9330",
    category: "Financial Econometrics",
    year: "2021",
    categoryColor: "#1d6fa4",
    categoryBg: "rgba(29,111,164,0.08)",
    icon: TrendingUp,
  },
  {
    id: 10,
    title: "Investment Case & Equity: A Quasi-Experimental Analysis Of Maternal & Child Healthcare Services In Punjab",
    doi: "https://doi.org/10.18510/hssr.2021.9246",
    doiLabel: "10.18510/hssr.2021.9246",
    category: "Public Health",
    year: "2021",
    categoryColor: "#be123c",
    categoryBg: "rgba(190,18,60,0.08)",
    icon: HeartPulse,
  },
  {
    id: 11,
    title: "Testing semi-strong market efficiency for leading altcoins",
    doi: "https://saeb.feaa.uaic.ro/index.php/saeb/article/view/2837",
    doiLabel: "Scientific Annals of Economics and Business",
    category: "Financial Econometrics",
    year: "2025",
    categoryColor: "#1d6fa4",
    categoryBg: "rgba(29,111,164,0.08)",
    icon: TrendingUp,
  },
  {
    id: 12,
    title: "Realized covariance forecasting for environmental data through multivariate GARCH models",
    doi: "https://journals.irapa.org/index.php/BMS/article/view/1102",
    doiLabel: "Bulletin of Multidisciplinary Studies, 2(3)",
    category: "Forecasting",
    year: "2025",
    categoryColor: "#7c3aed",
    categoryBg: "rgba(124,58,237,0.08)",
    icon: BarChart3,
  },
  {
    id: 13,
    title: "Comparing forecasting performance of ARFIMA and HAR-RV models for realized variances using meteorological data",
    doi: "https://assajournal.com/index.php/36/article/view/811",
    doiLabel: "Applied Studies in Agribusiness and Commerce, 4(1)",
    category: "Time Series",
    year: "2025",
    categoryColor: "#15803d",
    categoryBg: "rgba(21,128,61,0.08)",
    icon: TrendingUp,
  },
];

const categories = [...new Set(articles.map(a => a.category))];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#0a192f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors text-sm font-medium mb-8 group">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </a>
          </Link>
          <div className="pt-4 pb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4">
              Publications & Research
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              All Research <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#1d6fa4]">
                Publications
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              A comprehensive collection of peer-reviewed research publications spanning financial econometrics, 
              forecasting, climate modeling, public health, and applied statistics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map(cat => (
                <span
                  key={cat}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-gray-200 border border-white/10"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap gap-8 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1d6fa4]/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-[#1d6fa4]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{articles.length}</p>
                <p className="text-xs text-gray-500 font-medium">Total Publications</p>
              </div>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#15803d]/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-[#15803d]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-xs text-gray-500 font-medium">Published in 2025</p>
              </div>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/10 flex items-center justify-center">
                <Globe className="h-5 w-5 text-[#7c3aed]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{categories.length}</p>
                <p className="text-xs text-gray-500 font-medium">Research Areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => {
            const Icon = article.icon;
            return (
              <a
                key={article.id}
                href={article.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-gray-100 p-6 flex flex-col hover:-translate-y-1 transition-all duration-300"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)")}
              >
                {/* Top row: icon + number */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: article.categoryBg }}
                  >
                    <Icon className="h-5 w-5" style={{ color: article.categoryColor }} />
                  </div>
                  <span className="text-3xl font-black text-gray-100 group-hover:text-gray-200 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: article.categoryBg, color: article.categoryColor }}
                  >
                    {article.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                    {article.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-gray-900 font-bold text-sm leading-snug mb-4 flex-1 group-hover:text-[#1d6fa4] transition-colors">
                  {article.title}
                </h3>

                {/* DOI link */}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100 mt-auto">
                  <ExternalLink className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                  <span className="text-xs text-gray-400 truncate font-medium">
                    {article.doiLabel}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Footer strip */}
      <div className="bg-[#0a192f] text-white py-8 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Statistical Institute of Research and Science. All rights reserved.
          </p>
          <Link href="/">
            <a className="text-sm text-blue-400 hover:text-white transition-colors font-medium flex items-center gap-1.5">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
