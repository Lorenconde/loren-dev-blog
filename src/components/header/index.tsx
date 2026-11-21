"use client";

import { useState } from "react";
import Link from "next/link";
import { Code2,  Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Início" },
    { href: "/blog", label: "Blog" },
    { href: "/sobre", label: "Sobre" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090F]/90 backdrop-blur-xl">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link href="/" className="flex items-center gap-2">
          <Code2 className="text-[#39FF88]" size={28} />
          <span className="text-xl font-bold text-white">
            Loren<span className="text-[#39FF88]">.dev</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 transition hover:text-[#39FF88]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a href="https://github.com/Lorenconde" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub className="text-gray-400 hover:text-[#39FF88]" size={20} />
          </a>

          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-gray-400 hover:text-[#39FF88]" size={20} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className="text-white md:hidden"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {menuOpen && (
          <div className="absolute left-0 top-full flex w-full flex-col gap-5 border-b border-white/10 bg-[#09090F] px-6 py-6 md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-300 transition hover:text-[#39FF88]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

      </nav>
    </header>
  );
};

export default Header;
