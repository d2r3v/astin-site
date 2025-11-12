import { CheckCircle2 } from "lucide-react";
import { WaveTop } from "@/components/BackgroundPatterns";

const KeyStrengths = () => {
  const strengths = [
    {
      title: "99.9% Face-Recognition Accuracy",
      description: "Industry-leading precision ensures reliable identification in real-world conditions.",
    },
    {
      title: "Adaptive, Self-Learning AI Engine",
      description: "Continuously improves performance through machine learning, adapting to your environment.",
    },
    {
      title: "Proven High-Security Deployments",
      description: "Successfully implemented in sensitive environments requiring the highest security standards.",
    },
    {
      title: "Modular, Scalable Systems",
      description: "Flexible architecture designed for education, corporates, and government — scales with your needs.",
    },
    {
      title: "End-to-End Support",
      description: "Complete lifecycle management: deployment, training, and ongoing troubleshooting support.",
    },
    {
      title: "Battle-Tested Leadership",
      description: "Backed by 30+ years of IT and telecom expertise combined with specialized AI innovation.",
    },
  ];

  return (
    <section id="strengths" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Clean white background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Wave accent at top */}
      <WaveTop />
      
      {/* Minimal gradient accents with new color palette */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Sets Us Apart
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Proven expertise meets cutting-edge AI innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border-2 border-slate-200 hover:border-primary hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
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
