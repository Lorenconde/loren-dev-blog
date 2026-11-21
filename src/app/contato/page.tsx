
"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MessageCircle, Send, MapPin,} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContatoPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setEnviado(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const telefone = "5500000000000";

    const mensagem = `
Olá! Meu nome é ${form.nome}.
E-mail: ${form.email}
Assunto: ${form.assunto}

Mensagem:
${form.mensagem}
    `;

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank", "noopener,noreferrer");

    setEnviado(true);
    setForm({
      nome: "",
      email: "",
      assunto: "",
      mensagem: "",
    });
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#09090F] px-6 py-20">
        <section className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="mb-5 inline-block rounded-full border border-[#39FF88]/30 bg-[#39FF88]/10 px-4 py-2 text-sm text-[#39FF88]">
              Vamos conversar?
            </span>

            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              Entre em <span className="text-[#39FF88]">contato</span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-400">
              Tem uma ideia, oportunidade ou projeto? Será um prazer conversar
              com você!
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <aside className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-[#151520] p-8">
                <h2 className="mb-6 text-2xl font-semibold text-white">
                  Canais de contato
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 text-[#39FF88]" size={22} />
                    <div>
                      <h3 className="font-semibold text-white">E-mail</h3>
                      <a
                        href="mailto:seuemail@exemplo.com"
                        className="text-sm text-gray-400 transition hover:text-[#39FF88]"
                      >
                        loren.ec.rosa@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 text-[#39FF88]" size={22} />
                    <div>
                      <h3 className="font-semibold text-white">Localização</h3>
                      <p className="text-sm text-gray-400">Pelotas - RS, Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#39FF88]/20 bg-[#39FF88]/5 p-8">
                <MessageCircle className="mb-4 text-[#39FF88]" size={30} />

                <h2 className="mb-3 text-xl font-semibold text-white">
                  Vamos conversar pelo WhatsApp?
                </h2>

                <p className="mb-6 text-sm leading-7 text-gray-400">
                  Entre em contato diretamente para conversar sobre projetos,
                  oportunidades e parcerias.
                </p>

                <a
                  href="https://wa.me/5553992046438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#39FF88] px-6 py-3 text-sm font-semibold text-[#09090F] transition hover:scale-105"
                >
                  Abrir WhatsApp
                  <MessageCircle size={17} />
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#151520] p-8">
                <h2 className="mb-5 text-xl font-semibold text-white">
                  Redes profissionais
                </h2>

                <div className="flex gap-4">
                  <Link
                    href="https://github.com/Lorenconde"
                    target="_blank"
                    aria-label="GitHub"
                    className="rounded-xl border border-white/10 p-4 text-gray-400 transition hover:border-[#39FF88] hover:text-[#39FF88]"
                  >
                    <FaGithub size={23} />
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/loren-eisfeld"
                    target="_blank"
                    aria-label="LinkedIn"
                    className="rounded-xl border border-white/10 p-4 text-gray-400 transition hover:border-[#39FF88] hover:text-[#39FF88]"
                  >
                    <FaLinkedin size={23} />
                  </Link>
                </div>
              </div>
            </aside>

            <div className="rounded-2xl border border-white/10 bg-[#151520] p-8 md:p-10">
              <h2 className="mb-2 text-2xl font-semibold text-white">
                Envie uma mensagem
              </h2>

              <p className="mb-8 text-sm text-gray-400">
                Preencha os campos abaixo para preparar sua mensagem pelo WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="nome"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Nome
                  </label>

                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#09090F] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-[#39FF88]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    E-mail
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seuemail@exemplo.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#09090F] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-[#39FF88]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="assunto"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Assunto
                  </label>

                  <input
                    id="assunto"
                    name="assunto"
                    type="text"
                    value={form.assunto}
                    onChange={handleChange}
                    placeholder="Sobre o que deseja conversar?"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#09090F] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-[#39FF88]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Mensagem
                  </label>

                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder="Escreva sua mensagem..."
                    rows={5}
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#09090F] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-[#39FF88]"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#39FF88] px-7 py-4 font-semibold text-[#09090F] transition hover:scale-[1.02] hover:bg-[#2de879]"
                >
                  Enviar pelo WhatsApp
                  <Send size={18} />
                </button>

                {enviado && (
                  <p className="text-center text-sm text-[#39FF88]">
                    Sua mensagem foi preparada! Finalize o envio pelo WhatsApp.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
