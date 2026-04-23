import { Mail, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Prof. Dr. Naeem Qureshi",
    role: "Chairman",
    specialty: "Financial Econometrics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    email: "isrs.researchsci@gmail.com",
    description: "A distinguished academician and researcher with extensive expertise in advanced statistical and econometric modeling."
  },
  {
    name: "Abdul Majid",
    role: "Founder & Managing Director",
    specialty: "Applied Statistics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    email: "isrs.researchsci@gmail.com",
    description: "A skilled statistician with strong expertise in research analytics, statistical modeling, and data-driven problem solving."
  },
  {
    name: "Moiz Baig",
    role: "Accounts & Finance Manager",
    specialty: "Data Management & Analytics",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    email: "isrs.researchsci@gmail.com",
    description: "A dedicated data professional with strong expertise in data management, analytics, and business intelligence solutions."
  },
  {
    name: "Areeb Khoso",
    role: "Media Manager & Statistical Analyst",
    specialty: "Data Collection & Analysis",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    email: "isrs.researchsci@gmail.com",
    description: "A versatile professional combining media management with statistical analysis, skilled in systematic data collection, processing, and deriving actionable insights."
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="pt-12 md:pt-16 pb-0 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 fade-in">
          <h2 className="text-4xl font-bold text-portfolio-primary mb-4">Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our world-class team of statistical researchers and data scientists driving innovation in research methodology
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-4">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in overflow-hidden"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-portfolio-primary mb-2">{member.name}</h3>
                <div className="text-portfolio-secondary font-semibold mb-1">{member.role}</div>
                <div className="text-sm text-portfolio-accent mb-3">{member.specialty}</div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                <div className="flex items-center space-x-3">
                  <a 
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 bg-portfolio-secondary/10 rounded-full flex items-center justify-center hover:bg-portfolio-secondary/20 transition-colors duration-200"
                  >
                    <Mail className="h-4 w-4 text-portfolio-secondary" />
                  </a>
                  <a 
                    href="#"
                    className="w-8 h-8 bg-portfolio-secondary/10 rounded-full flex items-center justify-center hover:bg-portfolio-secondary/20 transition-colors duration-200"
                  >
                    <Linkedin className="h-4 w-4 text-portfolio-secondary" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
