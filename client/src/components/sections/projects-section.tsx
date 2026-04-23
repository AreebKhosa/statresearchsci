import { Calendar, TrendingUp, BarChart3, Clock, LineChart, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const featuredProjects = [
  {
    title: "Altcoin Market Efficiency Research (2018–2024)",
    category: "Time Series & Econometrics",
    status: "Completed",
    statusColor: "#15803d",
    statusBg: "rgba(21,128,61,0.1)",
    categoryColor: "#1d6fa4",
    categoryBg: "rgba(29,111,164,0.1)",
    description: "Conducted a comprehensive financial econometrics research project to evaluate the efficiency of the altcoin cryptocurrency market using daily return data from 2018 to 2024. Applied advanced time series models including Auto-Regressive Component GARCH-in-Mean, AR, and MA models to investigate return behavior, volatility clustering, and the influence of regulatory announcements, geopolitical developments, and major international events.\n\nThe analysis revealed significant volatility persistence and evidence of semi-strong market inefficiency, indicating that public information was not always instantly reflected in prices. This project provides valuable insights for hedge funds, traders, crypto investors, and financial researchers seeking alpha generation, timing strategies, portfolio diversification, and risk-adjusted investment decisions.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stats: [
      { icon: Calendar, label: "2018–2024 Data" },
      { icon: TrendingUp, label: "Volatility Forecasting" },
      { icon: Target, label: "Trading Strategy Insights" }
    ],
    services: ["Return Modeling", "Volatility Forecasting", "Event Impact Analysis", "Trading Strategy Insights", "Risk Management Analytics"]
  },
  {
    title: "Multivariate GARCH Forecasting Research",
    category: "Time Series & Econometrics",
    status: "Published",
    statusColor: "#0369a1",
    statusBg: "rgba(3,105,161,0.1)",
    categoryColor: "#7c3aed",
    categoryBg: "rgba(124,58,237,0.1)",
    description: "Completed an advanced multivariate volatility modeling project using high-frequency environmental time series data. Implemented internationally recognized MGARCH models including BEKK and DCC to study dynamic relationships, volatility spillovers, and covariance structures among six atmospheric variables.\n\nUsed rigorous model evaluation metrics such as AIC, BIC, MAE, MSE, and RMSE to compare forecasting performance. Results confirmed that the BEKK (1,1) model delivered the highest predictive accuracy and strongest covariance estimation performance.\n\nThis type of project is highly valuable for researchers, financial analysts, climate scientists, energy forecasting teams, and institutions requiring multivariate risk modeling and dependency forecasting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stats: [
      { icon: LineChart, label: "MGARCH Modeling" },
      { icon: BarChart3, label: "High-Frequency Data" },
      { icon: TrendingUp, label: "Covariance Forecasting" }
    ],
    services: ["Multivariate GARCH Modeling", "Covariance Forecasting", "Dynamic Correlation Analysis", "High-Frequency Data Analysis", "Model Comparison & Validation"]
  },
  {
    title: "Realized Variance Forecasting Research",
    category: "Forecasting & Environmental",
    status: "Peer Reviewed",
    statusColor: "#b45309",
    statusBg: "rgba(180,83,9,0.1)",
    categoryColor: "#15803d",
    categoryBg: "rgba(21,128,61,0.1)",
    description: "Conducted an advanced forecasting comparison project on realized variances using HAR-RV and ARFIMA models for meteorological data from 2019 to 2024. Examined six environmental variables including volatility persistence, long-memory effects, and rolling-window predictive performance.\n\nApplied professional evaluation criteria including AIC, BIC, MAE, MSE, and RMSE. Findings demonstrated that the HAR-RV model outperformed ARFIMA in forecasting short-term and medium-term realized variances.\n\nThis expertise is ideal for weather analytics firms, renewable energy forecasting, wind power systems, environmental agencies, and academic researchers working with volatility-based time series data.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stats: [
      { icon: Clock, label: "Rolling Window Forecasts" },
      { icon: Target, label: "HAR-RV & ARFIMA" },
      { icon: BarChart3, label: "Variance Forecasting" }
    ],
    services: ["Variance Forecasting", "HAR-RV Modeling", "ARFIMA Modeling", "Rolling Window Forecasting", "Environmental Time Series Analytics"]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-portfolio-secondary mb-3">
            Case Studies
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-portfolio-primary leading-tight mb-5">
            Featured Research Projects &amp; Professional Expertise
          </h2>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Explore our advanced univariate and multivariate statistical, econometric, forecasting, environmental, medical, clinical, biostatistical, optimization, predictive, factor analysis, comparative research, machine learning, public health, and urban intelligence services delivered for academic researchers, investors, institutions, businesses, and professional clients worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 group flex flex-col md:flex-row"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)" }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)`)}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 4px 24px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)`)}
            >
              <div className="relative md:w-2/5 overflow-hidden min-h-[300px] md:min-h-full">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent opacity-60"></div>
              </div>
              <div className="p-8 md:p-10 relative md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: project.categoryBg, color: project.categoryColor }}
                  >
                    {project.category}
                  </span>
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: project.statusBg, color: project.statusColor }}
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-portfolio-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <div className="text-sm text-gray-600 mb-6 leading-relaxed space-y-4">
                  {project.description.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Services Included</p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gray-50 border border-gray-100 text-xs font-medium text-gray-700">
                        <span className="w-1 h-1 rounded-full bg-portfolio-secondary"></span>
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-100 mt-auto">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500">
                    {project.stats.map((stat, statIndex) => {
                      const IconComponent = stat.icon;
                      return (
                        <span key={statIndex} className="flex items-center gap-1.5">
                          <IconComponent className="h-4 w-4 text-gray-400" />
                          {stat.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in">
          <Link href="/research">
            <Button className="bg-portfolio-primary hover:bg-portfolio-secondary text-white px-8 py-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-portfolio-primary/20 text-md">
              View All Research Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
