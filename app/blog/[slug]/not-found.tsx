import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="grow pt-20 pb-16 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Post não encontrado
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Desculpe, não conseguimos encontrar o artigo que você está
            procurando.
          </p>
          <Link
            href="/#blog"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Ver todos os artigos
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
