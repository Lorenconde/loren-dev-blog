
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  GraduationCap,
  Lightbulb,
  Target,
  Rocket,
} from "lucide-react";

import Header from "@/components/header";
import Footer from "@/components/footer";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git e GitHub",
  "Tailwind CSS",
  "Figma",
  "WordPress",
];

const values = [
  {
    icon: Lightbulb,
    title: "Aprendizado contínuo",
    description:
      "Acredito que a tecnologia está sempre evoluindo e que aprender constantemente faz parte da jornada de desenvolvimento.",
  },
  {
    icon: Target,
    title: "Foco em soluções",
    description:
      "Gosto de transformar ideias e desafios em soluções digitais funcionais, organizadas e intuitivas.",
  },
  {
    icon: Rocket,
    title: "Evolução profissional",
    description:
      "Busco desenvolver projetos práticos, aprimorar minhas habilidades e acompanhar as boas práticas do desenvolvimento web.",
  },
];

export default function SobrePage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#09090F] px-6 py-20">
        <section className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <span className="mb-5 inline-block rounded-full border border-[#39FF88]/30 bg-[#39FF88]/10 px-4 py-2 text-sm text-[#39FF88]">
              Conheça minha trajetória
            </span>

            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              Sobre <span className="text-[#39FF88]">mim</span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-400">
              Tecnologia, criatividade e aprendizado contínuo fazem parte da
              minha jornada no desenvolvimento web.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-white/10 bg-[#151520] p-8">
              <div className="mb-6 flex items-center gap-3">
                <Code2 className="text-[#39FF88]" size={28} />
                <h2 className="text-2xl font-semibold text-white">
                  Minha história
                </h2>
              </div>

              <div className="space-y-5 text-base leading-8 text-gray-400">
                <p>
                  Sou desenvolvedora Front-End, formada em Tecnologia em
                  Sistemas para Internet e técnica em Manutenção e Suporte em
                  Informática.
                </p>

                <p>
                  Minha trajetória profissional me proporcionou experiências
                  importantes em diferentes áreas. Com o passar do tempo,
                  decidi direcionar minha carreira para a tecnologia, uma área
                  que desperta meu interesse desde a adolescência.
                </p>

                <p>
                  Tenho me dedicado ao desenvolvimento web, criando projetos
                  práticos e aprimorando meus conhecimentos em HTML, CSS,
                  JavaScript, React, TypeScript e Next.js.
                </p>

                <p>
                  Meu objetivo é continuar evoluindo como desenvolvedora,
                  construindo aplicações modernas, acessíveis e funcionais.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-white/10 bg-[#151520] p-8">
                <GraduationCap className="mb-4 text-[#39FF88]" size={30} />
                <h2 className="mb-3 text-xl font-semibold text-white">
                  Formação
                </h2>
                <p className="text-sm leading-7 text-gray-400">
                  Tecnologia em Sistemas para Internet
                </p>
                <p className="text-sm text-gray-500">
                  Unicesumar
                </p>
                <div className="my-5 border-t border-white/10" />
                <p className="text-sm leading-7 text-gray-400">
                  Técnico em Manutenção e Suporte em Informática
                </p>
                <p className="text-sm text-gray-500">
                  Escola Estadual João XXIII
                </p>
              </div>

              <div className="rounded-2xl border border-[#39FF88]/20 bg-[#39FF88]/5 p-8">
                <h2 className="mb-3 text-xl font-semibold text-white">
                  Meu objetivo
                </h2>
                <p className="text-sm leading-7 text-gray-400">
                  Desenvolver soluções digitais, participar de projetos
                  desafiadores e crescer profissionalmente na área de
                  desenvolvimento de software.
                </p>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="mb-8 text-center text-3xl font-bold text-white">
              Tecnologias e ferramentas
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-[#151520] px-5 py-3 text-sm text-gray-300 transition hover:border-[#39FF88]/50 hover:text-[#39FF88]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-20 grid gap-6 md:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#151520] p-7 transition hover:-translate-y-1 hover:border-[#39FF88]/40"
                >
                  <Icon className="mb-5 text-[#39FF88]" size={30} />
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </section>

          <div className="mt-20 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Vamos conversar?
            </h2>

            <p className="mb-8 text-gray-400">
              Estou aberta a oportunidades, conexões e novos projetos.
            </p>

            <Link
              href="/contato"
              className="inline-flex items-center gap-2 rounded-full bg-[#39FF88] px-7 py-3 font-semibold text-[#09090F] transition hover:scale-105"
            >
              Entre em contato
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
