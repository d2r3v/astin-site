import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            <Sparkles size={16} />
            AI-Driven Solutions for Modern Organizations
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Transforming{" "}
            <span className="text-blue-600">Education</span>,{" "}
            <span className="text-orange-600">Enterprise</span>, and{" "}
            <span className="text-blue-600">Government</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
            Astin Analytics delivers cutting-edge AI solutions that streamline operations, 
            enhance security, and drive innovation across sectors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group"
            >
              Get in Touch
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("solutions")}
            >
              See Our Solutions
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-4 font-medium">Trusted by organizations worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 text-slate-400">
              <div className="text-sm font-semibold">Education Sector</div>
              <div className="text-sm font-semibold">Enterprise Solutions</div>
              <div className="text-sm font-semibold">Government Agencies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
