import { BarChart3, Database, Brain, PieChart, Calculator, GitBranch } from "lucide-react";

const expertiseAreas = [
  {
    icon: BarChart3,
    title: "Predictive Modeling",
    description: "Advanced regression analysis, time series forecasting, and machine learning algorithms for predictive analytics.",
    tools: ["Python", "R", "TensorFlow"],
    color: "#1d6fa4",
    glow: "rgba(29,111,164,0.18)"
  },
  {
    icon: Database,
    title: "Biostatistics",
    description: "Clinical trial design, survival analysis, and epidemiological studies with focus on healthcare outcomes.",
    tools: ["SAS", "SPSS", "Stata"],
    color: "#15803d",
    glow: "rgba(21,128,61,0.18)"
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Deep learning, neural networks, and AI-driven statistical analysis for complex pattern recognition.",
    tools: ["PyTorch", "Scikit-learn", "Keras"],
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.18)"
  },
  {
    icon: PieChart,
    title: "Data Visualization",
    description: "Interactive dashboards, statistical graphics, and data storytelling for executive presentations.",
    tools: ["Tableau", "D3.js", "Power BI"],
    color: "#be123c",
    glow: "rgba(190,18,60,0.18)"
  },
  {
    icon: Calculator,
    title: "Experimental Design",
    description: "A/B testing, factorial designs, and statistical power analysis for robust experimental frameworks.",
    tools: ["DOE", "ANOVA", "Minitab"],
    color: "#b45309",
    glow: "rgba(180,83,9,0.18)"
  },
  {
    icon: GitBranch,
    title: "Time Series Analysis",
    description: "Forecasting models, trend analysis, and temporal pattern recognition for sequential data insights.",
    tools: ["ARIMA", "Prophet", "LSTM"],
    color: "#0e7490",
    glow: "rgba(14,116,144,0.18)"
  }
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-portfolio-secondary mb-3">
            Our Capabilities
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-portfolio-primary leading-tight mb-5">
            Research Expertise
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Specialized in advanced statistical methods and computational analytics across multiple domains,
            delivering precise and actionable insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 group"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.03), 0 1px 4px rgba(0,0,0,0.02)" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 8px 30px ${area.glow}, 0 2px 10px rgba(0,0,0,0.04)`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 4px 20px rgba(0,0,0,0.03), 0 1px 4px rgba(0,0,0,0.02)`)}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                  style={{ 
                    backgroundColor: `${area.color}15`,
                    boxShadow: `0 4px 12px ${area.glow}`
                  }}
                >
                  <IconComponent className="h-7 w-7" style={{ color: area.color }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed min-h-[60px]">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex}
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ 
                        backgroundColor: `${area.color}12`,
                        color: area.color,
                        border: `1px solid ${area.color}20`
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
