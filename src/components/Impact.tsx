import { TrendingUp, Shield, CheckCircle2 } from "lucide-react";

const Impact = () => {
  const impacts = [
    {
      icon: Shield,
      title: "Reduced Impersonation to Near Zero",
      description: "Advanced face-recognition technology virtually eliminates identity fraud",
      color: "blue",
    },
    {
      icon: TrendingUp,
      title: "Increased Operational Efficiency by 40%+",
      description: "Automated systems dramatically reduce manual processes and human error",
      color: "red",
    },
    {
      icon: CheckCircle2,
      title: "Improved Compliance Standards",
      description: "Meet institutional and government regulations with confidence",
      color: "blue",
    },
  ];

  return (
    <section id="impact" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with new color palette */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white" />
      
      {/* Subtle accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Proven Impact
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real results from real implementations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            const iconBgColor = impact.color === "blue" ? "bg-blue-100" : "bg-red-100";
            const iconColor = impact.color === "blue" ? "text-primary" : "text-secondary";

            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 ${iconBgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`${iconColor}`} size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {impact.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {impact.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;
