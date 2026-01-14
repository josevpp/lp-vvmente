import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutSection from "./components/sections/AboutSection";
import BenefitsSection from "./components/sections/BenefitsSection";
import BlogSection from "./components/sections/BlogSection";
import ContactSection from "./components/sections/ContactSection";
import CTABanner from "./components/sections/CTABanner";
import FAQSection from "./components/sections/FAQSection";
import HeroSection from "./components/sections/HeroSection";
import ProcessSection from "./components/sections/ProcessSection";
import SpecialtiesSection from "./components/sections/SpecialtiesSection";
import { faqs, structuredData } from "./data/content";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://lp-vivamente.vercel.app");

export const metadata: Metadata = {
  title: "Vivamente - Clínica de Desenvolvimento Infantil",
  description:
    "Clínica especializada em desenvolvimento infantil com psicologia, fonoaudiologia, terapia ocupacional, psicopedagogia e neuropsicologia. Agende uma triagem sem custo.",
  keywords: [
    "desenvolvimento infantil",
    "psicologia infantil",
    "fonoaudiologia",
    "terapia ocupacional",
    "psicopedagogia",
    "neuropsicologia",
    "clínica infantil Curitiba",
    "Campina Grande do Sul",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Vivamente",
    title: "Vivamente - Clínica de Desenvolvimento Infantil",
    description:
      "Clínica especializada em desenvolvimento infantil com equipe multidisciplinar. Agende uma triagem sem custo.",
    images: [
      {
        url: `${siteUrl}/images/logo.png`,
        width: 1200,
        height: 630,
        alt: "Vivamente - Clínica de Desenvolvimento Infantil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivamente - Clínica de Desenvolvimento Infantil",
    description:
      "Clínica especializada em desenvolvimento infantil. Agende uma triagem sem custo.",
    images: [`${siteUrl}/images/logo.png`],
  },
};

export default function Home() {
  // FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <Header />

      <main>
        <HeroSection />
        <BenefitsSection />
        <AboutSection />
        <SpecialtiesSection />
        <CTABanner />
        <ProcessSection />
        <FAQSection />
        <ContactSection />
        <BlogSection />
      </main>

      <Footer />
    </div>
  );
}
