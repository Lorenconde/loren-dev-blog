
import { Suspense } from "react";
import BlogClient from "./blog-client";
import { getPublishedPosts } from "@/lib/supabase/posts";

async function BlogContent() {
  const posts = await getPublishedPosts();

  return <BlogClient posts={posts} />;
}

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#09090F] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-gray-400">
              Carregando artigos...
            </p>
          </div>
        </main>
      }
    >
      <BlogContent />
    </Suspense>
  );
}
