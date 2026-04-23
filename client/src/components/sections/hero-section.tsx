import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3 } from "lucide-react";
import heroimage from "../hero-removebg-preview.png"; 

export default function HeroSection() {
  return (
    <section id="home" className="relative text-white py-16 lg:py-32 overflow-hidden bg-[#0a192f]">
      {/* Premium ambient background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1d6fa4]/40 via-[#0a192f] to-[#0a192f]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0a192f] to-transparent"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdHRlcm4gaWQ9InNtYWxsR3JpZCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMTAgMEwwIDBMMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI3NtYWxsR3JpZCkiLz48cGF0aCBkPSJNNDAgMEwwIDBMMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <div className="fade-in max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1d6fa4]/20 border border-[#1d6fa4]/30 text-blue-200 text-xs font-semibold uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(29,111,164,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Statistical Research Institute
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight text-white">
              Transforming Data into <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#1d6fa4] drop-shadow-sm">
                Insights
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-10 text-gray-300 leading-relaxed font-light">
              Premier research institute with an expert team specializing in advanced analytics, 
              machine learning, and evidence-based statistical solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-[#0a192f] hover:bg-gray-100 h-14 px-8 rounded-xl font-bold text-base transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Explore Services
              </Button>
              <Button 
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline" 
                className="border-white/40 text-white hover:text-white hover:bg-white/10 hover:border-white/60 h-14 px-8 rounded-xl font-bold text-base transition-all duration-300 backdrop-blur-sm"
              >
                View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm font-medium text-gray-400">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-400" />
                <span>Advanced Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Machine Learning</span>
              </div>
            </div>
          </div>
          
          <div className="fade-in lg:pl-8 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1d6fa4]/20 to-transparent rounded-full blur-[100px] -z-10"></div>
            <img 
              src={heroimage}
              alt="Professional researcher at work" 
              className="relative w-full h-auto max-w-lg mx-auto drop-shadow-2xl z-10 hover:scale-[1.02] transition-transform duration-700 ease-out" 
              style={{ filter: "drop-shadow(0 25px 35px rgba(0,0,0,0.5))" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
