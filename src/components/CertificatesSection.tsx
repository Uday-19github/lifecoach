import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Award, Eye, X } from "lucide-react";

import certDiabetes from "@/assets/cert-diabetes-educator.jpeg";
import certMoneyReiki from "@/assets/cert-money-reiki.jpeg";
import certLamaFera from "@/assets/cert-lama-fera.jpeg";
import certYogaTeacher from "@/assets/cert-yoga-teacher.jpeg";
import certMassage from "@/assets/cert-massage-therapist.jpeg";
import certYogaNaturopathy from "@/assets/cert-yoga-naturopathy.jpeg";
import certReikiMaster from "@/assets/cert-reiki-master.jpeg";

const certificates = [
  { title: "Diabetes Educator", issuer: "National Diabetes Educator Program (NDEP)", image: certDiabetes },
  { title: "Money Reiki Advance Healing", issuer: "Astro Sansaar by Gitika", image: certMoneyReiki },
  { title: "Lama Fera (Basic to Grandmaster)", issuer: "Angel Blessing's Foundation", image: certLamaFera },
  { title: "Yoga Teacher Training", issuer: "Integrated Fitness & Sports Institute (IFSI)", image: certYogaTeacher },
  { title: "Massage Therapist", issuer: "Integrated Fitness & Sports Institute (IFSI)", image: certMassage },
  { title: "Yoga & Naturotherapy", issuer: "Maharashtra State Board of Skill Development", image: certYogaNaturopathy },
  { title: "Reiki Master - Teacher", issuer: "Dr. Mikao Usui's Reiki System", image: certReikiMaster },
];

const CertificatesSection = () => {
  const [selected, setSelected] = useState<typeof certificates[0] | null>(null);

  return (
    <>
      <section id="certificates" className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-narrow mx-auto px-6 lg:px-8">

          {/* Section Heading */}
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase font-sans">
                Certificates
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                Certifications &{" "}
                <span className="text-primary">Qualifications</span>
              </h2>

              <p className="text-muted-foreground text-base leading-relaxed">
                Professionally certified across clinical nutrition, yoga,
                energy healing, and holistic wellness practices.
              </p>
            </div>
          </ScrollReveal>

          {/* Certificates Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {certificates.map((cert, i) => (
              <ScrollReveal key={cert.title} delay={i * 100}>
                <div className="group bg-white rounded-3xl p-8 border border-primary/10 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">

                  {/* Top Info */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
                      <Award
                        size={22}
                        className="text-primary group-hover:text-white transition-colors"
                      />
                    </div>

                    <div>
                      <h3 className="font-serif font-semibold text-lg text-foreground leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* View Button */}
                  <button
                    onClick={() => setSelected(cert)}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity border-t border-border/50 pt-5"
                  >
                    <Eye size={18} />
                    View Certificate
                  </button>

                </div>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-border">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {selected.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {selected.issuer}
                </p>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="w-10 h-10 rounded-full hover:bg-primary/10 flex items-center justify-center transition-colors"
              >
                <X size={22} className="text-foreground" />
              </button>
            </div>

            {/* Image */}
            <div className="overflow-auto max-h-[calc(92vh-96px)] p-8 flex justify-center bg-background">
              <img
                src={selected.image}
                alt={`${selected.title} Certificate`}
                className="max-w-full h-auto rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default CertificatesSection;
