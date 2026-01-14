"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);

    // If not on home page, navigate to home with hash
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    // If on home page, scroll to section
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { label: "Início", id: "inicio" },
    { label: "Nossos Diferenciais", id: "beneficios" },
    { label: "Quem Somos", id: "sobre" },
    { label: "Especialidades", id: "especialidades" },
    { label: "Como Funciona", id: "como-funciona" },
    { label: "Blog", id: "blog" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 shadow-md animate-slide-down"
      style={{ backgroundColor: "#fff9e0" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-15 lg:h-20">
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center gap-3 hover:opacity-80 transition-all duration-300"
            aria-label="Voltar para o início da página"
          >
            <div className="h-12 lg:h-16 w-12 lg:w-16 relative overflow-hidden">
              <Image
                src="/images/logo.webp"
                alt="Vivamente Logo"
                width={80}
                height={80}
                quality={85}
                priority
                className="w-full h-full object-cover object-center scale-150"
              />
            </div>
            <span className="font-semibold text-lg hidden sm:block">
              Vivamente
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-md hover:bg-primary/10 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 md:text-sm lg:text-base"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu de navegação"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-slide-down">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-2 hover:bg-primary/10 transition-all duration-300 hover:translate-x-2"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
