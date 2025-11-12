import { NodeLinkPattern } from "@/components/BackgroundPatterns";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Node-link geometric pattern */}
      <NodeLinkPattern />
      
      {/* Very subtle gradient accents */}
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-orange-50/30 rounded-full blur-3xl" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Astin Analytics
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="prose prose-lg mx-auto text-center">
          <p className="text-xl text-slate-700 leading-relaxed mb-6">
            Astin Analytics is a forward-thinking startup specializing in AI-driven solutions 
            that empower organizations to operate more efficiently, securely, and intelligently.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our mission is to bridge the gap between cutting-edge artificial intelligence and 
            real-world applications in Education, Enterprise, and Government sectors. We combine 
            technical excellence with deep domain expertise to deliver solutions that not only 
            meet today's challenges but anticipate tomorrow's opportunities.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-700 leading-relaxed">
              To democratize access to advanced AI technology and transform how organizations 
              operate, making them more efficient, secure, and innovative.
            </p>
          </div>
          <div className="bg-orange-50 rounded-lg p-8 border border-orange-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-700 leading-relaxed">
              To be the trusted partner for organizations worldwide seeking intelligent, 
              scalable, and future-proof AI solutions that drive meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
