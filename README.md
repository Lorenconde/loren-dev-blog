# Loren.dev Blog

Um blog pessoal desenvolvido com **Next.js, React, TypeScript e Supabase**, criado como projeto prático durante a imersão da DIO.

O projeto tem como objetivo compartilhar conhecimentos, experiências e conteúdos sobre desenvolvimento web, programação e tecnologia, utilizando uma aplicação moderna, dinâmica e integrada a um banco de dados na nuvem.

## Sobre o projeto

O Loren.dev Blog foi desenvolvido para colocar em prática conceitos importantes do ecossistema React e Next.js, incluindo sistema de rotas, componentes reutilizáveis, renderização no servidor, integração com serviços externos e organização de código.

A aplicação utiliza o Supabase para armazenar e disponibilizar os artigos publicados, permitindo que o conteúdo seja carregado dinamicamente.

## Funcionalidades

- Página inicial com apresentação do blog e artigos.
- Listagem dinâmica de artigos.
- Integração com banco de dados Supabase.
- Página individual para cada artigo, utilizando rotas dinâmicas.
- Pesquisa de artigos por título, descrição ou categoria.
- Filtro de artigos por categoria.
- Exibição de informações como categoria, data de publicação e tempo de leitura.
- Páginas institucionais Sobre e Contato.
- Componentes reutilizáveis e estrutura organizada.

## Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| Next.js | Framework React e sistema de rotas |
| React | Construção da interface |
| TypeScript | Tipagem estática |
| Tailwind CSS | Estilização da aplicação |
| Supabase | Banco de dados e integração em nuvem |
| @supabase/ssr | Integração do Supabase com renderização no servidor |
| Lucide React | Ícones da interface |
| Git e GitHub | Versionamento do código |

## Estrutura do projeto

```text
loren-dev-blog/
├── public/
│   ├── images/
│   └── icons/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── test-posts/
│   │   │   └── test-supabase/
│   │   ├── blog/
│   │   │   ├── [slug]/
│   │   │   ├── blog-client.tsx
│   │   │   └── page.tsx
│   │   ├── contato/
│   │   ├── sobre/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   ├── blog-card/
│   │   ├── hero/
│   │   ├── search/
│   │   └── theme-toggle/
│   └── lib/
│       ├── supabase/
│       │   ├── client.ts
│       │   ├── server.ts
│       │   └── posts.ts
│       └── posts.ts
├── .env.local
├── package.json
└── README.md
```

## Como executar o projeto

### 1. Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/)
- npm
- Git

### 2. Clonar o repositório

```bash
git clone https://github.com/Lorenconde/loren-dev-blog.git
```

### 3. Acessar a pasta do projeto

```bash
cd loren-dev-blog
```

### 4. Instalar as dependências

```bash
npm install
```

### 5. Configurar as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sua_chave_publicavel
```

Substitua os valores pelos dados do seu projeto no painel do Supabase.

**Importante:** nunca publique chaves privadas ou credenciais no GitHub. O arquivo `.env.local` deve permanecer fora do versionamento.

### 6. Executar a aplicação

```bash
npm run dev
```

Acesse no navegador:

```text
http://localhost:3000
```

## Banco de dados — Supabase

O Supabase é utilizado para armazenar os artigos e categorias do blog.

As principais tabelas utilizadas são:

- `posts`: armazena os artigos, descrições, conteúdo, datas, categorias e status de publicação.
- `categories`: armazena as categorias dos artigos.

A aplicação consulta os artigos publicados e apresenta os dados dinamicamente na interface.

## Aprendizados

Durante o desenvolvimento deste projeto, foram praticados conceitos como:

- Desenvolvimento de aplicações com Next.js.
- Organização de projetos com React e TypeScript.
- Criação de rotas estáticas e dinâmicas.
- Componentização e reutilização de código.
- Busca e filtragem de dados.
- Integração com banco de dados em nuvem.
- Consultas ao Supabase.
- Renderização de conteúdo no servidor.
- Configuração de variáveis de ambiente.
- Versionamento utilizando Git e GitHub.

## Projeto desenvolvido para a DIO

Este projeto foi desenvolvido como desafio prático da trilha React da Digital Innovation One (DIO), com base na proposta de criação de um blog pessoal utilizando Next.js e integração com um serviço em nuvem.

Repositório de referência do desafio:

[Trilha React — Desafio 5 | Digital Innovation One](https://github.com/digitalinnovationone/trilha-react-desafio-5)

## Desenvolvedora

**Loren Conde**

Desenvolvedora Front-End em constante evolução, apaixonada por tecnologia, desenvolvimento web e criação de soluções digitais.

- GitHub: [@Lorenconde](https://github.com/Lorenconde)
- LinkedIn: [Loren Conde](https://www.linkedin.com/in/loren-eisfeld-conde-rosa/)

---

Desenvolvido com dedicação por **Loren.dev** 💚

*Transformando conhecimento em projetos e ideias em soluções digitais.*