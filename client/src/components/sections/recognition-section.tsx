export default function RecognitionSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0a192f] text-white relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[500px] h-[500px] rounded-full bg-[#1d6fa4] opacity-[0.07] blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] rounded-full bg-[#15803d] opacity-[0.05] blur-[100px] pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-300 mb-3">
            Global Impact
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
            Recognition &amp; Reach
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Published research, awards, and professional recognition in the statistical and data science community worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div 
            className="text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 fade-in group"
          >
            <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#1d6fa4] to-blue-400 mb-3 group-hover:scale-105 transition-transform duration-300">
              45+
            </div>
            <div className="text-sm font-bold tracking-wider uppercase text-gray-200 mb-2">Publications</div>
            <div className="text-xs text-gray-400 leading-relaxed max-w-[200px] mx-auto">Peer-reviewed articles in top journals</div>
          </div>

          <div 
            className="text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 fade-in group"
          >
            <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#15803d] to-green-400 mb-3 group-hover:scale-105 transition-transform duration-300">
              2.5k
            </div>
            <div className="text-sm font-bold tracking-wider uppercase text-gray-200 mb-2">Citations</div>
            <div className="text-xs text-gray-400 leading-relaxed max-w-[200px] mx-auto">Research impact across disciplines</div>
          </div>

          <div 
            className="text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 fade-in group"
          >
            <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#7c3aed] to-purple-400 mb-3 group-hover:scale-105 transition-transform duration-300">
              8
            </div>
            <div className="text-sm font-bold tracking-wider uppercase text-gray-200 mb-2">Awards</div>
            <div className="text-xs text-gray-400 leading-relaxed max-w-[200px] mx-auto">Professional excellence recognition</div>
          </div>

          <div 
            className="text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 fade-in group"
          >
            <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#b45309] to-amber-400 mb-3 group-hover:scale-105 transition-transform duration-300">
              15
            </div>
            <div className="text-sm font-bold tracking-wider uppercase text-gray-200 mb-2">Keynote Talks</div>
            <div className="text-xs text-gray-400 leading-relaxed max-w-[200px] mx-auto">International conference presentations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
