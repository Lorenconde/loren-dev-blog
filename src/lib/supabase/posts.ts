
import { createClient } from "@/lib/supabase/server";

interface SupabasePost {
  slug: string;
  title: string;
  description: string;
  published_at: string | null;
  read_time: string;
  color: string;
  content: string[];
  categories:
  | { name: string }
  | { name: string }[]
  | null;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  color: string;
  content: string[];
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .select(`
      slug,
      title,
      description,
      published_at,
      read_time,
      color,
      content,
      categories(name)
    `)
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Erro ao buscar artigos:", error.message);
    throw new Error("Não foi possível carregar os artigos.");
  }

  const posts = (data ?? []) as unknown as SupabasePost[];

  return posts.map((post) => {
    const category = Array.isArray(post.categories)
      ? post.categories[0]?.name
      : post.categories?.name;

    return {
      slug: post.slug,
      title: post.title,
      description: post.description,
      category: category ?? "Sem categoria",
      date: post.published_at ?? "",
      readTime: post.read_time,
      color: post.color,
      content: post.content ?? [],
    };
  });
}

// Busca um artigo específico pelo slug
export async function getPublishedPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .select(`
      slug,
      title,
      description,
      published_at,
      read_time,
      color,
      content,
      categories(name)
    `)
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error) {
    console.error("Erro ao buscar artigo:", error.message);
    throw new Error("Não foi possível carregar o artigo.");
  }

  if (!data) {
    return null;
  }

  const post = data as unknown as SupabasePost;

  const category = Array.isArray(post.categories)
    ? post.categories[0]?.name
    : post.categories?.name;

  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    category: category ?? "Sem categoria",
    date: post.published_at ?? "",
    readTime: post.read_time,
    color: post.color,
    content: post.content ?? [],
  };
}
