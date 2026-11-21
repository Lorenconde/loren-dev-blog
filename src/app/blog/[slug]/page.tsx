
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getPublishedPostBySlug } from "@/lib/supabase/posts";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#09090F] px-6 py-16">
        <article className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="mb-10 inline-flex items-center gap-2 text-[#A1A1AA] transition hover:text-[#39FF88]"
          >
            <ArrowLeft size={18} />
            Voltar para o blog
          </Link>

          <div className="mb-6">
            <span className="rounded-full border border-[#39FF88]/30 bg-[#39FF88]/10 px-4 py-1 text-sm text-[#39FF88]">
              {post.category}
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            {post.title}
          </h1>

          <p className="mb-8 text-xl leading-relaxed text-[#A1A1AA]">
            {post.description}
          </p>

          <div className="mb-12 flex flex-wrap gap-6 border-b border-white/10 pb-6 text-sm text-[#A1A1AA]">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </span>

            <span className="flex items-center gap-2">
              <Clock size={16} />
              {post.readTime} de leitura
            </span>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#D4D4D8]">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#39FF88] transition hover:text-white"
            >
              <ArrowLeft size={18} />
              Ver outros artigos
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
