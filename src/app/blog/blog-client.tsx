
"use client";

import { useMemo, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BlogCard from "@/components/blog-card";
import { Search, BookOpen } from "lucide-react";
import type { BlogPost } from "@/lib/supabase/posts";

interface BlogClientProps {
  posts: BlogPost[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");

  const categories = [
    "Todas",
    ...Array.from(new Set(posts.map((post) => post.category))),
  ];

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        category === "Todas" || post.category === category;

      const searchTerm = search.toLowerCase();

      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm) ||
        post.description.toLowerCase().includes(searchTerm) ||
        post.category.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [posts, search, category]);

  return (
    <main className="min-h-screen bg-[#09090F]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14">
          <div className="mb-4 flex items-center gap-2 text-[#39FF88]">
            <BookOpen size={20} />

            <span className="text-sm font-semibold uppercase tracking-widest">
              Conhecimento compartilhado
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Todos os <span className="text-[#39FF88]">artigos.</span>
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            Explore conteúdos, experiências e descobertas sobre
            desenvolvimento web, programação e tecnologia.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-5 md:flex-row">
          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar artigos..."
              className="w-full rounded-xl border border-white/10 bg-[#151520] py-4 pl-12 pr-4 text-white outline-none transition focus:border-[#39FF88]/50"
            />
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                category === item
                  ? "border-[#39FF88] bg-[#39FF88] text-[#09090F]"
                  : "border-white/10 bg-[#151520] text-gray-400 hover:border-[#39FF88]/50 hover:text-[#39FF88]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <p className="mb-6 text-sm text-gray-500">
          {filteredPosts.length} artigo(s) encontrado(s)
        </p>

        {filteredPosts.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-white/10 bg-[#151520] py-16 text-center">
            <Search
              className="mx-auto mb-4 text-gray-500"
              size={32}
            />

            <h2 className="text-xl font-semibold text-white">
              Nenhum artigo encontrado
            </h2>

            <p className="mt-2 text-gray-400">
              Tente pesquisar por outro termo ou categoria.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
