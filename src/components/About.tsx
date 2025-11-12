import { NodeLinkPattern } from "@/components/BackgroundPatterns";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Node-link geometric pattern */}
      <NodeLinkPattern />
      
      {/* Very subtle gradient accents with new color palette */}
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <p className="text-xl text-slate-700 leading-relaxed">
            Astin Analytics is a technology startup delivering smart, AI-driven solutions that 
            optimize operations and enhance efficiency across the education, enterprise, and 
            government sectors.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Founded by professionals with over 30 years of leadership in IT and telecommunications 
            — and more than 5 years of dedicated AI solution development — we combine proven 
            expertise with a deep focus on innovation and reliability.
          </p>
        </div>

        {/* Mission & Vision - Two Cards */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                To empower organizations by eliminating operational inefficiencies through 
                intelligent, adaptive AI technologies — so they can focus on what truly matters: 
                <span className="font-semibold text-slate-900"> security, learning, governance, and innovation.</span>
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                To become the trusted partner for AI-driven operational excellence, setting new 
                standards in accuracy, reliability, and security across education, enterprise, 
                and government sectors worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
