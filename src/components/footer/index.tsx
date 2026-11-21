
import Link from "next/link";
import { Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#09090F]">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <Link href="/" className="flex items-center gap-2">
            <Code2 className="text-[#39FF88]" size={24} />

            <span className="text-lg font-bold text-white">
              Loren<span className="text-[#39FF88]">.dev</span>
            </span>
          </Link>

          <p className="text-center text-sm text-gray-500">
            Desenvolvido com criatividade, código e café.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Lorenconde"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-gray-400 transition hover:text-[#39FF88]" />
            </a>

            <a
              href="https://www.linkedin.com/in/loren-eisfeld"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-gray-400 transition hover:text-[#39FF88]" />
            </a>
          </div>

        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-gray-600">
          © 2026 Loren.dev — Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
