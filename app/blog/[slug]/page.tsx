import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import {
  blogPosts,
  getAllBlogSlugs,
  getBlogPostBySlug,
} from "@/app/data/content";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post não encontrado",
    };
  }

  const url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://vivamente.com.br");

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `${url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.image
        ? [
            {
              url: `${url}${post.image}`,
              alt: post.imageAlt || post.title,
            },
          ]
        : undefined,
      siteName: "Vivamente - Clínica de Desenvolvimento Infantil",
      url: `${url}/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Format date (add timezone to avoid day offset)
  const formattedDate = new Date(post.date + "T00:00:00").toLocaleDateString(
    "pt-BR",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  // Get other posts (excluding current one)
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://lp-vivamente.vercel.app");

  // Structured data for blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image ? `${url}${post.image}` : undefined,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: "Psicóloga Clínica",
      credential: post.authorCRP,
    },
    publisher: {
      "@type": "Organization",
      name: "Vivamente - Clínica de Desenvolvimento Infantil",
      logo: {
        "@type": "ImageObject",
        url: `${url}images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    wordCount: post.content.join(" ").split(/\s+/).length,
    inLanguage: "pt-BR",
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      <main className="grow pt-20 pb-16">
        {/* Hero Section */}
        <article className="bg-muted/30 py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Voltar para o blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full font-medium text-sm">
                {post.category}
              </span>
              <time
                dateTime={post.date}
                className="text-muted-foreground text-sm"
              >
                {formattedDate}
              </time>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              {post.description}
            </p>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{post.author}</span>
              <span>•</span>
              <span>{post.authorCRP}</span>
            </div>
          </div>
        </article>

        {/* Featured Image */}
        {post.image && (
          <div className="container mx-auto px-4 max-w-4xl -mt-8 mb-12">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => {
                // Check if paragraph is a heading
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-primary"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                } else if (paragraph.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="text-xl md:text-2xl font-semibold mt-6 mb-3"
                    >
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                // Check if paragraph contains bold or italic markdown
                else if (paragraph.includes("**") || paragraph.includes("*")) {
                  return (
                    <p
                      key={index}
                      className="mb-4 leading-relaxed text-foreground/90"
                      dangerouslySetInnerHTML={{
                        __html: paragraph
                          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                          .replace(/\*(.*?)\*/g, "<em>$1</em>")
                          .replace(/\n/g, "<br />"),
                      }}
                    />
                  );
                }
                // Regular paragraph
                else {
                  return (
                    <p
                      key={index}
                      className="mb-4 leading-relaxed text-foreground/90"
                    >
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>

            {/* CTA Box */}
            <div className="mt-12 p-6 bg-secondary/10 border-l-4 border-secondary rounded-lg">
              <h3 className="text-xl font-semibold mb-3">
                Precisa de ajuda especializada?
              </h3>
              <p className="mb-4 text-foreground/80">
                Atendemos crianças e famílias de Campina Grande do Sul, Quatro
                Barras e região. Entre em contato para saber mais sobre nossa
                abordagem.
              </p>
              <Link
                href="/#contato"
                className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {otherPosts.length > 0 && (
          <div className="container mx-auto px-4 max-w-6xl mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Outros Artigos
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border group"
                >
                  <div className="aspect-video bg-muted overflow-hidden">
                    {relatedPost.image ? (
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.imageAlt || relatedPost.title}
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
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-semibold mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-foreground/70 line-clamp-3">
                      {relatedPost.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
