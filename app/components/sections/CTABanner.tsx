"use client";

import WhatsAppButton from "../WhatsAppButton";

export default function CTABanner() {
  return (
    <section className="py-12 bg-linear-to-r from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm mb-4 animate-pulse">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">
              Horários Disponíveis • Agende Hoje
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Dê o Primeiro Passo Para Apoiar o Desenvolvimento do Seu Filho
          </h2>
          <p className="text-lg mb-6 text-white/90">
            Triagem sem custo • Atendimento imediato no
            WhatsApp
          </p>

          <WhatsAppButton
            variant="secondary"
            text="Quero Agendar Minha Triagem Sem Custo"
            className="cursor-pointer"
          />

          <div className="mt-6 flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Sem compromisso
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Resposta em minutos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
