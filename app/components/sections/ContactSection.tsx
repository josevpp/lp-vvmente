"use client";

import { contactInfo } from "@/app/data/content";
import { useEffect, useRef } from "react";
import WhatsAppButton from "../WhatsAppButton";

export default function ContactSection() {
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
    <section id="contato" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dê o Primeiro Passo Para o Pleno Desenvolvimento do Seu Filho
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agende uma triagem sem custo e receba o atendimento imediato da
            nossa equipe
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 animate-on-scroll animate-slide-in-left delay-200">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{info.label}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        <p>{info.value}</p>
                        {info.value2 && <p>{info.value2}</p>}
                      </a>
                    ) : (
                      <>
                        <p className="text-foreground/80">{info.value}</p>
                        {info.value2 && (
                          <p className="text-foreground/80">{info.value2}</p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <WhatsAppButton
                variant="primary"
                text="Falar com Especialista Agora"
              />
            </div>
          </div>

          <div className="animate-on-scroll animate-slide-in-right delay-300">
            <div className="bg-white rounded-xl overflow-hidden border shadow-md h-full min-h-100 hover:shadow-xl transition-shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.419452362306!2d-49.110964499999994!3d-25.357255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dceb4ffc55500f%3A0xbbce36d697da27b3!2sClinica%20Viva%20Mente!5e0!3m2!1spt-BR!2sbr!4v1767898383775!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de localização da Clínica Vivamente - Rua José Simioni, 89, Campina Grande do Sul"
                aria-label="Mapa mostrando a localização da Clínica Vivamente"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
