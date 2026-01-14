import Image from "next/image";
import WhatsAppButton from "../WhatsAppButton";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center md:pt-20"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.webp"
          alt="Doutora atendendo uma criança na clínica"
          fill
          className="object-cover object-right md:object-center md:opacity-50 opacity-30"
          priority
          quality={85}
          sizes="100vw"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-r from-secondary/30 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-b from-transparent to-background" />
      </div>

      <div className="container mx-auto xl:px-10 z-10">
        <div className="grid lg:grid-cols-3 gap-4 items-center">
          <div className="space-y-4 xs:space-x-6 mx-auto lg:col-span-2 text-center px-[5vh] md:px-0 mt-[10vh] md:mt-0">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs md:text-sm mb-2 mt-2 md:mt-6 shadow-md">
              <svg
                className="w-4 h-4 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold text-foreground">
                Mais de 300 crianças atendidas
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-slide-in-left">
              Apoio Especializado para o Pleno Desenvolvimento e Bem-Estar do
              Seu Filho
            </h1>
            <p className="text-md lg:px-24 font-semibold md:text-xl text-teal-800 animate-slide-in-left delay-200">
              Promovemos autonomia e saúde emocional para crianças através de um
              atendimento multidisciplinar e acolhedor na{" "}
              <strong>Clínica Vivamente</strong>, em Campina Grande do Sul - PR.
              Equipe qualificada e pronta para ajudar sua família.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-foreground/80 animate-slide-in-left delay-300">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Triagem Sem Custo
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Sem Compromisso
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Resposta Imediata
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col items-center justify-center max-w-lg mx-auto animate-slide-in-right delay-300 hover:scale-105 transition-transform duration-300">
            <h2 className="text-lg md:text-2xl font-bold mb-2 text-center text-primary">
              ✨ Triagem Sem Custo
            </h2>
            <p className="text-xs md:text-base text-gray-600 mb-4 text-center">
              Sem compromisso • Atendimento Imediato
            </p>
            <WhatsAppButton
              variant="primary"
              text="Falar com a Clínica no WhatsApp"
              className="text-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
