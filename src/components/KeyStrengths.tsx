import { CheckCircle2 } from "lucide-react";

const KeyStrengths = () => {
  const strengths = [
    {
      title: "AI-First Approach",
      description: "We leverage the latest advancements in artificial intelligence and machine learning to create intelligent, adaptive solutions.",
    },
    {
      title: "Cross-Sector Expertise",
      description: "Deep understanding of Education, Enterprise, and Government needs allows us to deliver targeted, effective solutions.",
    },
    {
      title: "Security & Compliance",
      description: "Built with enterprise-grade security from the ground up, meeting industry standards and regulatory requirements.",
    },
    {
      title: "Scalable Architecture",
      description: "Cloud-native solutions that grow with your organization, from pilot programs to full-scale deployments.",
    },
    {
      title: "Rapid Deployment",
      description: "Streamlined implementation processes that minimize disruption and maximize time-to-value.",
    },
    {
      title: "Continuous Innovation",
      description: "Ongoing research and development ensures our solutions stay ahead of the technological curve.",
    },
    {
      title: "Dedicated Support",
      description: "Expert technical support and consulting services to ensure your success at every stage.",
    },
    {
      title: "Custom Integration",
      description: "Seamless integration with your existing systems and workflows, preserving your current investments.",
    },
  ];

  return (
    <section id="strengths" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Astin Analytics
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our competitive advantages that set us apart in the AI solutions landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-blue-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={24}
                />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">
                    {strength.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyStrengths;
