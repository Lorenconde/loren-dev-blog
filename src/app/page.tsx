

import { Suspense } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import BlogCard from "@/components/blog-card";
import Footer from "@/components/footer";
import { getPublishedPosts } from "@/lib/supabase/posts";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

// Componente responsável por buscar os artigos
async function LatestPosts() {
  const posts = await getPublishedPosts();

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="mb-4 flex items-center gap-2 text-[#39FF88]">
            <BookOpen size={19} />

            <span className="text-sm font-semibold uppercase tracking-widest">
              Conhecimento compartilhado
            </span>
          </div>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Últimos <span className="text-[#39FF88]">artigos.</span>
          </h2>

          <p className="mt-4 text-gray-400">
            Conteúdos, experiências e descobertas sobre tecnologia.
          </p>
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#39FF88] transition hover:gap-3"
        >
          Ver todos os artigos
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 3).map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="py-12 text-center text-gray-400">
          Nenhum artigo publicado no momento.
        </p>
      )}
    </section>
  );
}

// Página inicial
const Home = () => {
  return (
    <main className="min-h-screen bg-[#09090F]">
      <Header />

      <Hero />

      <Suspense
        fallback={
          <section className="mx-auto max-w-7xl px-6 py-24">
            <p className="text-center text-gray-400">
              Carregando artigos...
            </p>
          </section>
        }
      >
        <LatestPosts />
      </Suspense>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-950/60 to-[#151520] p-8 md:p-12">
          <div className="relative z-10 max-w-2xl">
            <span className="text-sm font-semibold text-[#39FF88]">
              SOBRE O PROJETO
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white">
              Tecnologia é evolução constante.
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Este espaço nasceu da vontade de aprender, compartilhar
              experiências e acompanhar a evolução do desenvolvimento web.
              Aqui, cada projeto representa uma nova oportunidade de crescer.
            </p>

            <Link
              href="/sobre"
              className="mt-7 inline-flex items-center gap-2 rounded-lg border border-[#39FF88]/40 px-5 py-3 text-sm font-semibold text-[#39FF88] transition hover:bg-[#39FF88] hover:text-[#09090F]"
            >
              Conheça minha trajetória
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
