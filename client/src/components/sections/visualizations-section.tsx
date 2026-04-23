import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, ScatterChart, Scatter } from 'recharts';
import { BarChart3, Database, Users } from "lucide-react";

const outcomeData = [
  { month: 'Jan', recoveryRate: 78, confidenceInterval: 73 },
  { month: 'Feb', recoveryRate: 82, confidenceInterval: 77 },
  { month: 'Mar', recoveryRate: 85, confidenceInterval: 80 },
  { month: 'Apr', recoveryRate: 88, confidenceInterval: 83 },
  { month: 'May', recoveryRate: 91, confidenceInterval: 86 },
  { month: 'Jun', recoveryRate: 89, confidenceInterval: 84 },
  { month: 'Jul', recoveryRate: 94, confidenceInterval: 89 },
  { month: 'Aug', recoveryRate: 96, confidenceInterval: 91 },
  { month: 'Sep', recoveryRate: 93, confidenceInterval: 88 },
  { month: 'Oct', recoveryRate: 97, confidenceInterval: 92 },
  { month: 'Nov', recoveryRate: 95, confidenceInterval: 90 },
  { month: 'Dec', recoveryRate: 98, confidenceInterval: 93 }
];

const riskData = [
  { category: 'Very Low', probability: 15 },
  { category: 'Low', probability: 35 },
  { category: 'Medium', probability: 30 },
  { category: 'High', probability: 15 },
  { category: 'Very High', probability: 5 }
];


export default function VisualizationsSection() {
  return (
    <section id="visualizations" className="py-16 md:py-20 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-portfolio-secondary mb-3">
            Analytics &amp; Dashboards
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-portfolio-primary leading-tight mb-5">
            Interactive Visualizations
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Explore interactive charts and visualizations that demonstrate my analytical capabilities and data storytelling expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-10">
          <div 
            className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 fade-in"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.04), 0 2px 10px rgba(0,0,0,0.02)" }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-8">Patient Outcome Trends</h3>
            <div className="h-80 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={outcomeData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                  <YAxis domain={[70, 100]} axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dx={-10} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} iconType="circle" />
                  <Line 
                    type="monotone" 
                    dataKey="recoveryRate" 
                    stroke="#1d6fa4" 
                    strokeWidth={3}
                    dot={{ stroke: '#1d6fa4', strokeWidth: 2, r: 4, fill: '#fff' }}
                    activeDot={{ r: 6, fill: '#1d6fa4', stroke: '#fff', strokeWidth: 2 }}
                    name="Recovery Rate %" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="confidenceInterval" 
                    stroke="#b45309" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                    name="Confidence Interval" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-5 mt-2">
              Statistical analysis showing improvement in patient outcomes over 24-month study period with 95% confidence intervals.
            </p>
          </div>

          <div 
            className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 fade-in"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.04), 0 2px 10px rgba(0,0,0,0.02)" }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-8">Risk Distribution Analysis</h3>
            <div className="h-80 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={riskData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                  <XAxis dataKey="category" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                    cursor={{ fill: 'rgba(21,128,61,0.05)' }}
                  />
                  <Bar dataKey="probability" fill="#15803d" radius={[6, 6, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-5 mt-2">
              Probability distribution of financial risk factors using Bayesian inference and Monte Carlo simulation methods.
            </p>
          </div>
        </div>



        <div className="grid sm:grid-cols-3 gap-6 lg:gap-10">
          <div 
            className="text-center p-8 bg-white rounded-2xl border border-gray-100 fade-in transition-all duration-300 hover:-translate-y-1"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.03), 0 1px 4px rgba(0,0,0,0.02)" }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "rgba(29,111,164,0.1)", boxShadow: "0 4px 12px rgba(29,111,164,0.15)" }}>
              <BarChart3 className="h-8 w-8" style={{ color: "#1d6fa4" }} />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">50+ Visualizations</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Interactive charts and dashboards created for research publications and presentations</p>
          </div>
          <div 
            className="text-center p-8 bg-white rounded-2xl border border-gray-100 fade-in transition-all duration-300 hover:-translate-y-1"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.03), 0 1px 4px rgba(0,0,0,0.02)" }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "rgba(21,128,61,0.1)", boxShadow: "0 4px 12px rgba(21,128,61,0.15)" }}>
              <Database className="h-8 w-8" style={{ color: "#15803d" }} />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">1TB+ Data Analyzed</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Large-scale datasets processed and visualized across multiple research domains</p>
          </div>
          <div 
            className="text-center p-8 bg-white rounded-2xl border border-gray-100 fade-in transition-all duration-300 hover:-translate-y-1"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.03), 0 1px 4px rgba(0,0,0,0.02)" }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "rgba(124,58,237,0.1)", boxShadow: "0 4px 12px rgba(124,58,237,0.15)" }}>
              <Users className="h-8 w-8" style={{ color: "#7c3aed" }} />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">25+ Collaborations</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Cross-disciplinary partnerships with researchers, institutions, and industry leaders</p>
          </div>
        </div>
      </div>
    </section>
  );
}
