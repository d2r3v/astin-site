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
        "Advanced biometric and AI-powered access management systems that enhance security while streamlining user experience. Perfect for educational institutions and enterprise environments.",
      features: [
        "Facial recognition technology",
        "Real-time monitoring & alerts",
        "Seamless integration with existing systems",
        "Scalable cloud infrastructure",
      ],
      color: "blue",
    },
    {
      icon: Lock,
      title: "Central Authentication Service (CAS)",
      description:
        "Enterprise-grade single sign-on (SSO) solution that simplifies authentication across multiple applications while maintaining the highest security standards.",
      features: [
        "Multi-factor authentication",
        "LDAP & Active Directory integration",
        "Customizable authentication flows",
        "Compliance with industry standards",
      ],
      color: "orange",
    },
    {
      icon: Sparkles,
      title: "Custom AI Solutions",
      description:
        "Tailored artificial intelligence applications designed to solve your unique business challenges, from predictive analytics to natural language processing.",
      features: [
        "Machine learning model development",
        "Data analysis & visualization",
        "Process automation",
        "Ongoing support & optimization",
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
      
      {/* Light accent gradients */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Solutions
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive AI-driven solutions designed to meet the unique needs 
            of modern organizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const iconBgColor = solution.color === "blue" ? "bg-blue-100" : "bg-orange-100";
            const iconColor = solution.color === "blue" ? "text-blue-600" : "text-orange-600";

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
