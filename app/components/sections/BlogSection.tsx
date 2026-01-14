"use client";

import { blogPosts } from "@/app/data/content";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function BlogSection() {
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
    <section id="blog" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos Artigos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira nosso conteúdo sobre desenvolvimento infantil
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border group cursor-pointer animate-on-scroll animate-scale-in delay-${
                (index % 3) * 100 + 200
              }`}
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium text-center">
                    {post.category}
                  </span>
                  <span>
                    {new Date(post.date + "T00:00:00").toLocaleDateString(
                      "pt-BR",
                      { year: "numeric", month: "short", day: "numeric" }
                    )}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {post.description}
                </p>
                <span
                  className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 group/btn"
                  aria-label={`Ler mais sobre ${post.title}`}
                >
                  Ler mais
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
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

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Em breve, mais conteúdos sobre desenvolvimento infantil!
          </p>
        </div>
      </div>
    </section>
  );
}
