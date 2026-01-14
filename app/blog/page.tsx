import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { blogPosts } from "@/app/data/content";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://lp-vivamente.vercel.app");

export const metadata: Metadata = {
  title: "Blog - Artigos sobre Desenvolvimento Infantil",
  description:
    "Artigos e conteúdos sobre psicologia infantil, autismo, TDAH, ludoterapia e desenvolvimento emocional em Campina Grande do Sul.",
  keywords: [
    "blog psicologia infantil",
    "artigos desenvolvimento infantil",
    "autismo",
    "TDAH",
    "ludoterapia",
    "Campina Grande do Sul",
  ],
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

export default function BlogPage() {
  // Group posts by category
  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category))
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="grow pt-20 pb-16">
        {/* Hero Section */}
        <div className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog Vivamente
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Artigos e conteúdos sobre desenvolvimento infantil, psicologia,
              educação e muito mais
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-6" />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="container mx-auto px-4 max-w-6xl mt-12">
          {/* All Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border group"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <svg
                        className="w-16 h-16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-sm">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {post.category}
                    </span>
                    <time
                      dateTime={post.date}
                      className="text-muted-foreground"
                    >
                      {new Date(post.date).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-foreground/70 leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <span className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 group/btn">
                    Ler mais
                    <svg
                      className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Categories Filter (for future use) */}
          <div className="mt-16 text-center">
            <h3 className="text-lg font-semibold mb-4">Categorias</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-muted text-foreground rounded-full text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-secondary/10 border-l-4 border-secondary rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-3">
              Precisa de Orientação Profissional?
            </h3>
            <p className="mb-6 text-foreground/80 max-w-2xl mx-auto">
              Atendemos crianças e famílias de Campina Grande do Sul, Quatro
              Barras e região. Agende uma triagem gratuita e conheça nosso
              trabalho.
            </p>
            <Link
              href="/#contato"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg"
            >
              Agendar Triagem Sem Custo
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
