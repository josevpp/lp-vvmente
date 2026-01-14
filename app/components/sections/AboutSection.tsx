"use client";
import Image from "next/image";

import { useEffect, useRef } from "react";

export default function AboutSection() {
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
      id="sobre"
      className="relative py-20 bg-background"
      ref={sectionRef}
    >
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-background/50 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre a Vivamente
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-on-scroll animate-slide-in-left delay-200">
              <p className="text-lg leading-relaxed">
                Somos uma clínica de desenvolvimento infantil em Campina Grande
                do Sul, que oferece cuidados integrados de diversas
                especialidades, como{" "}
                <strong>
                  Psicologia, Fonoaudiologia, Terapia Ocupacional,
                  Psicopedagogia, Neuropsicologia
                </strong>
                , e mais.
              </p>
              <p className="text-lg leading-relaxed">
                Com <strong>mais de 8 anos de experiência</strong> e{" "}
                <strong>300+ crianças atendidas</strong>, nossa missão é{" "}
                <strong>promover a autonomia dos nossos pacientes</strong> em
                suas atividades cotidianas, desenvolvendo habilidades de
                mobilidade, emocionais e sociais.
              </p>

              {/* Estatísticas */}
              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">4</div>
                  <p className="text-sm text-muted-foreground">
                    Salas Equipadas
                  </p>
                </div>
                <div className="text-center border-x">
                  <div className="text-3xl font-bold text-primary mb-1">
                    300+
                  </div>
                  <p className="text-sm text-muted-foreground">Atendimentos</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">8+</div>
                  <p className="text-sm text-muted-foreground">
                    Anos de Experiência
                  </p>
                </div>
              </div>

              <a
                target="_blank"
                href="https://maps.app.goo.gl/YwivxWW26S8s8HUS8"
                className="bg-white p-6 rounded-xl border shadow-md hover:shadow-xl transition-shadow duration-300 block"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/logo.webp"
                    alt="Vivamente Logo"
                    width={64}
                    height={64}
                    className="h-16 w-auto"
                    loading="lazy"
                    quality={85}
                  />
                  <div>
                    <h3 className="font-semibold text-xl">Vivamente</h3>
                    <p className="text-muted-foreground">
                      Clínica de Desenvolvimento Infantil
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        5.0/5.0
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="space-y-12">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl aspect-square overflow-hidden hover:scale-105 transition-transform duration-300 animate-on-scroll animate-scale-in delay-300">
                  <Image
                    src="/images/equipe.webp"
                    alt="Foto da Equipe Vivamente"
                    width={300}
                    height={300}
                    quality={85}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </div>
                <div className="rounded-xl aspect-square overflow-hidden hover:scale-105 transition-transform duration-300 animate-on-scroll animate-scale-in delay-400">
                  <Image
                    src="/images/instalacoes.webp"
                    alt="Instalações da Clínica Vivamente"
                    width={300}
                    height={300}
                    quality={85}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </div>
                <div className="rounded-xl aspect-square overflow-hidden hover:scale-105 transition-transform duration-300 animate-on-scroll animate-scale-in delay-500">
                  <Image
                    src="/images/terapia.webp"
                    alt="Materiais de Terapia"
                    width={300}
                    height={300}
                    quality={85}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </div>
                <div className="rounded-xl aspect-square overflow-hidden hover:scale-105 transition-transform duration-300 animate-on-scroll animate-scale-in delay-600">
                  <Image
                    src="/images/atendimento.webp"
                    alt="Espaço de Atendimento"
                    width={300}
                    height={300}
                    quality={85}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </div>
              </div>

              {/* Responsável Técnica */}
              <div className="animate-on-scroll animate-slide-up delay-700">
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                      <svg
                        className="w-6 h-6"
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
                      <p className="text-muted-foreground mb-1">
                        Responsável Técnica
                      </p>
                      <p className="text-lg font-semibold">
                        Renata Albuquerque do Prado
                      </p>
                      <p className="text-primary font-medium">CRP: 08/43466</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
