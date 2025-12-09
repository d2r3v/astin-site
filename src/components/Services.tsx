import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Lock, Sparkles } from "lucide-react";
import { DotsPattern } from "@/components/BackgroundPatterns";

const Services = () => {
  const solutions = [
    {
      icon: Shield,
      title: "Smart Access Control",
      description:
        "Contactless, face-recognition entry and visitor management designed for secure, high-traffic environments. Real-time monitoring and automated reporting ensure reliability at scale.",
      features: [
        "Contactless face-recognition entry",
        "Real-time monitoring & reporting",
        "Visitor management system",
        "High-traffic environment optimized",
      ],
      color: "blue",
    },
    {
      icon: Lock,
      title: "Classroom Attendance System (CAS)",
      description:
        "Instant, secure facial-recognition attendance built for schools, universities, and examination centers. Seamlessly integrates with HRMS or custom systems through robust APIs.",
      features: [
        "Instant facial-recognition attendance",
        "Built for educational institutions",
        "HRMS integration via APIs",
        "Examination center ready",
      ],
      color: "red",
    },
    {
      icon: Sparkles,
      title: "Custom AI Solutions",
      description:
        "Dedicated development teams design and implement tailored platforms that eliminate operational bottlenecks — delivering adaptable, data-driven intelligence for every organization.",
      features: [
        "Tailored platform development",
        "Eliminates operational bottlenecks",
        "Adaptable, data-driven intelligence",
        "Dedicated development teams",
      ],
      color: "blue",
    },
  ];

  return (
    <section id="solutions" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle slate background */}
      <div className="absolute inset-0 bg-slate-50" />

      {/* Dots pattern */}
      <div className="absolute inset-0 text-slate-400">
        <DotsPattern />
      </div>

      {/* Light accent gradients with new color palette */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Core Solutions
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Intelligent systems that optimize operations and enhance security
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const iconBgColor = solution.color === "blue" ? "bg-blue-100" : "bg-red-100";
            const iconColor = solution.color === "blue" ? "text-primary" : "text-secondary";

            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-slate-200"
              >
                <CardHeader>
                  <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`${iconColor}`} size={24} />
                  </div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base pt-2">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`${iconColor} mr-2 mt-1`}>✓</span>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
