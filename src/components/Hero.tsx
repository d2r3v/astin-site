import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
<<<<<<< HEAD
  const paths = Array.from({ length: 36 }, (_, i) => ({
=======
  const paths = Array.from({ length: 20 }, (_, i) => ({
>>>>>>> 7ddf14f8dad63161bab4b83a5b954c46faa56699
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
      } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
      } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
      } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-blue-600 dark:text-blue-400"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.15 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.4 }}
            animate={{
              pathLength: 1,
              opacity: [0.4, 0.8, 0.4],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center justify-center bg-slate-50">

      {/* Background Gradients/Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-orange-50/50 blur-3xl" />
      </div>

      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-60">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/50 backdrop-blur-sm text-primary rounded-full text-sm font-medium border border-primary/20 shadow-sm"
          >
            <Sparkles size={16} />
            Intelligent, Adaptive Systems
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Smarter Operations.{" "}
            <span className="text-primary block sm:inline">Trusted AI.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-4xl mx-auto"
          >
            We build intelligent, adaptive systems that help institutions, enterprises,
            and government agencies run safer and more efficiently.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("solutions")}
              className="group text-lg h-12 px-8"
            >
              See Our Work
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="text-lg h-12 px-8 bg-white/50 backdrop-blur-sm hover:bg-white/80"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
