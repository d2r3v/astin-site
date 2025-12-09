
import { Mail, MapPin, Phone } from "lucide-react";
import { MeshPattern } from "@/components/BackgroundPatterns";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Slate background */}
      <div className="absolute inset-0 bg-slate-50" />

      {/* Mesh grid pattern */}
      <MeshPattern />

      {/* Subtle accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Let's build smarter, faster, and safer systems together.
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                  <a
                    href="mailto:info@astinanalytics.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    info@astinanalytics.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                  <a
                    href="tel:+919310811188"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    +91 93108 11188
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Website
                  </h4>
                  <a
                    href="https://www.astinanalytics.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    www.astinanalytics.com
                  </a>
                </div>
              </div>
            </div>
          </div>




        </div>

      </div>
    </section>
  );
};

export default Contact;
