
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";



const categoryColors: Record<string, string> = {
  React: "from-blue-600/40 to-purple-600/40",
  TypeScript: "from-blue-500/40 to-cyan-500/40",
  "Next.js": "from-purple-600/40 to-pink-600/40",
};


export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  color: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const cardColor =
  categoryColors[post.category] ??
  "from-purple-600/40 to-pink-600/40";
  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-[#151520] transition duration-300 hover:-translate-y-1 hover:border-[#39FF88]/40">

     <div className={`relative flex h-48 items-center justify-center overflow-hidden bg-linear-to-br ${post.color}`}>
        <span className="text-6xl font-bold text-white/20 transition duration-300 group-hover:scale-110">
          {post.category}
        </span>

        <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs text-white backdrop-blur">
          {post.category}
        </span>
      </div>

      <div className="p-6">

        <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-2">
            <CalendarDays size={14} />
            {post.date}
          </span>

          <span className="flex items-center gap-2">
            <Clock3 size={14} />
            {post.readTime}
          </span>
        </div>

        <h3 className="mb-3 text-xl font-semibold text-white transition group-hover:text-[#39FF88]">
          {post.title}
        </h3>

        <p className="mb-6 line-clamp-3 text-sm leading-7 text-gray-400">
          {post.description}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#39FF88] transition hover:gap-3"
        >
          Ler artigo
          <ArrowUpRight size={17} />
        </Link>

      </div>
    </article>
  );
};

export default BlogCard;
