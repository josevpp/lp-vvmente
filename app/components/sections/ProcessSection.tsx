"use client";

import { processSteps } from "@/app/data/content";
import { useEffect, useRef } from "react";

export default function ProcessSection() {
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
      id="como-funciona"
      className="py-20 bg-background"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um caminho claro e acolhedor para apoiar o desenvolvimento do seu
            filho
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Linha conectora vertical em mobile, horizontal em desktop */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-primary/20">
              <div className="h-full bg-linear-to-r from-primary via-primary to-primary/30 animate-pulse" />
            </div>

            {/* Steps */}
            <div className="grid md:grid-cols-4 gap-8 relative">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative animate-on-scroll animate-scale-in delay-${
                    index * 100 + 200
                  }`}
                >
                  {/* Número do passo */}
                  <div className="relative mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10 border-4 border-background">
                      {index + 1}
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
                    {/* Ícone */}
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary mx-auto">
                      {step.icon}
                    </div>

                    {/* Título */}
                    <h3 className="text-lg font-bold mb-2 text-center">
                      {step.title}
                    </h3>

                    {/* Descrição */}
                    <p className="text-sm text-foreground/70 text-center leading-relaxed">
                      {step.description}
                    </p>

                    {/* Tempo estimado */}
                    <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        ⏱️ {step.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Garantia abaixo do processo */}
          <div className="mt-12 bg-linear-to-r from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-200 animate-on-scroll animate-slide-up delay-600">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900">
                  Nosso Compromisso com Você
                </h3>
                <p className="text-green-800 leading-relaxed mb-3">
                  Acompanhamento contínuo e personalizado em cada etapa do
                  desenvolvimento. Se você sentir que os objetivos precisam ser
                  revistos, conversaremos abertamente para ajustar o plano de
                  tratamento.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-green-800">
                    <svg
                      className="w-5 h-5 text-green-600"
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
                    Relatórios periódicos de evolução
                  </li>
                  <li className="flex items-center gap-2 text-green-800">
                    <svg
                      className="w-5 h-5 text-green-600"
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
                    Comunicação transparente com a família
                  </li>
                  <li className="flex items-center gap-2 text-green-800">
                    <svg
                      className="w-5 h-5 text-green-600"
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
                    Flexibilidade para ajustar estratégias
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
