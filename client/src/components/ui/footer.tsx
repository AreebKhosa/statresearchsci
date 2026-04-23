import { Linkedin, Twitter } from "lucide-react";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";
import { Download, ArrowRight } from "lucide-react";
import logo from "../logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="md:col-span-5 lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                <img 
                  src={logo} 
                  alt="SIRS Logo" 
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold leading-tight text-gray-100">
                Statistical Institute<br />
                <span className="text-[#1d6fa4]">of Research and Science</span>
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Premier research institute dedicated to advancing statistical science, 
              machine learning, and evidence-based decision making globally.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1d6fa4] hover:border-[#1d6fa4] transition-all duration-300">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1d6fa4] hover:border-[#1d6fa4] transition-all duration-300">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1d6fa4] hover:border-[#1d6fa4] transition-all duration-300">
                <SiGooglescholar className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1d6fa4] hover:border-[#1d6fa4] transition-all duration-300">
                <SiResearchgate className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-100 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Home
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Capabilities
                </a>
              </li>
              <li>
                <a href="#tools" className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Tech Stack
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-100 mb-6">Latest Publication</h4>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
              <p className="text-gray-200 text-sm font-medium mb-3 leading-snug">
                "Advanced Bayesian Methods for Healthcare Analytics"
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Journal of Stat. Med.</span>
                <button className="text-blue-400 hover:text-white text-sm font-bold transition-colors flex items-center gap-1.5">
                  <Download className="h-4 w-4" /> PDF
                </button>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} Statistical Institute of Research and Science. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-medium text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
