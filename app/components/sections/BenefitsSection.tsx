"use client";

import { benefits } from "@/app/data/content";
import { useEffect, useRef } from "react";

export default function BenefitsSection() {
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
    <section
      id="beneficios"
      className="py-20 bg-linear-to-br from-primary/5 via-secondary/5 to-background"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Áreas de Foco no Desenvolvimento da Criança
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa abordagem multidisciplinar em Campina Grande do Sul foca no
            suporte integral à criança e no acolhimento da família.
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 ${
                benefit.borderColor
              } group animate-on-scroll animate-slide-in-left delay-${
                (index % 4) * 100 + 200
              }`}
            >
              <div className="flex gap-4">
                {/* Ícone */}
                <div
                  className={`w-14 h-14 rounded-xl ${benefit.iconBg} flex items-center justify-center shrink-0 ${benefit.iconColor} group-hover:scale-110 transition-transform`}
                >
                  {benefit.icon}
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-foreground/70 leading-relaxed mb-3">
                    {benefit.description}
                  </p>

                  {/* Lista de resultados específicos */}
                  <ul className="space-y-2">
                    {benefit.outcomes.map((outcome, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <svg
                          className="w-5 h-5 text-green-500 shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
