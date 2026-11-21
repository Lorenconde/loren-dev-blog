
import Link from "next/link";
import { ArrowRight, Code2, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Efeitos de iluminação */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-green-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">

        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#39FF88]/30 bg-[#39FF88]/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#39FF88]" />

            <span className="text-xs font-medium text-[#39FF88]">
              Explorando o universo da tecnologia
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Código, criatividade e{" "}
            <span className="text-[#39FF88]">
              inovação.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 md:text-lg">
            Um espaço para compartilhar conhecimentos,
            experiências e descobertas sobre desenvolvimento
            web, programação e tecnologia.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg bg-[#39FF88] px-6 py-3 font-semibold text-[#09090F] transition hover:bg-[#2de879]"
            >
              Explorar artigos
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/sobre"
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-[#A855F7] hover:text-[#A855F7]"
            >
              Sobre mim
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {["React", "Next.js", "TypeScript", "JavaScript"].map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Ilustração de código */}
        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-[#151520] p-6 shadow-2xl shadow-purple-950/20">

            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Terminal size={15} />
                developer.tsx
              </div>
            </div>

            <div className="space-y-5 font-mono text-sm leading-7">
              <p className="text-purple-400">
                const developer = {"{"}
              </p>

              <p className="pl-5 text-gray-300">
                name: <span className="text-[#39FF88]">"Loren Conde"</span>,
              </p>

              <p className="pl-5 text-gray-300">
                role: <span className="text-[#39FF88]">"Front-End Developer"</span>,
              </p>

              <p className="pl-5 text-gray-300">
                passion: <span className="text-[#39FF88]">"Technology"</span>,
              </p>

              <p className="pl-5 text-gray-300">
                skills: [
              </p>

              <p className="pl-10 text-purple-400">
                "React", "Next.js",
              </p>

              <p className="pl-10 text-purple-400">
                "TypeScript", "CSS"
              </p>

              <p className="pl-5 text-gray-300">],</p>

              <p className="text-purple-400">{"}"}</p>

              <p className="mt-8 flex items-center gap-2 text-[#39FF88]">
                <Code2 size={17} />
                Building something great...
                <span className="animate-pulse">_</span>
              </p>
            </div>
          </div>

          <div className="absolute -bottom-5 -right-4 -z-10 h-full w-full rounded-2xl border border-purple-500/30" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
