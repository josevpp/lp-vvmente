"use client";

import { specialties } from "@/app/data/content";
import { useEffect, useRef } from "react";

export default function SpecialtiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="especialidades" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossas Especialidades Integradas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuidado multidisciplinar para o desenvolvimento completo do seu
            filho
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border group animate-on-scroll animate-scale-in delay-${
                (index % 6) * 100 + 100
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary text-primary group-hover:text-white transition-colors">
                {specialty.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{specialty.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
