export interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  color: string;
  content: string[];
}

export const posts: Post[] = [
  {
    slug: "primeiros-passos-com-react",
    title: "Primeiros passos com React",
    description:
      "Conheça os fundamentos do React, componentes, propriedades e estado.",
    category: "React",
    date: "2026-11-17",
    readTime: "5 min",
    color: "from-blue-600/40 to-purple-600/40",
    content: [
      "React é uma biblioteca JavaScript utilizada para criar interfaces de usuário.",
      "Sua estrutura baseada em componentes permite organizar a aplicação em partes reutilizáveis.",
      "Com propriedades e estado, podemos construir interfaces dinâmicas e interativas."
    ]
  },
  {
    slug: "por-que-utilizar-typescript",
    title: "Por que utilizar TypeScript?",
    description:
      "Entenda como a tipagem estática ajuda a desenvolver aplicações mais organizadas.",
    category: "TypeScript",
    date: "2026-11-17",
    readTime: "7 min",
    color: "from-blue-500/40 to-cyan-500/40",
    content: [
      "TypeScript adiciona um sistema de tipos ao JavaScript.",
      "A tipagem ajuda a identificar erros durante o desenvolvimento.",
      "Interfaces, types e recursos de tipagem facilitam a organização e manutenção do código."
    ]
  },
  {
    slug: "conhecendo-nextjs",
    title: "Conhecendo o Next.js",
    description:
      "Descubra os principais recursos do Next.js e suas vantagens no desenvolvimento web.",
    category: "Next.js",
    date: "2026-11-17",
    readTime: "8 min",
    color: "from-purple-600/40 to-pink-600/40",
    content: [
      "Next.js é um framework React para desenvolvimento de aplicações web.",
      "Ele oferece recursos de roteamento, renderização e organização de aplicações.",
      "Com o App Router, podemos estruturar páginas e layouts de forma intuitiva."
    ]
  }
];