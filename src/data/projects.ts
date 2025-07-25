// src/data/projects.ts
import folder from '../assets/folder.png';
import folderTree from '../assets/folder-tree.png';
import folderTwo from '../assets/folder-two.jpeg';
import folderFor from '../assets/folder-for.jpeg';
import folderFive from '../assets/folder-five.png';
import folderSix from '../assets/folder-six.jpeg';

export const projects = [
  {
    id: 1,
    name: "Portfólio Personal Trainer",
    description: "Site de portfólio responsivo para personal trainers, com seções para serviços, resultados de alunos, metodologia, depoimentos, FAQ interativo e formulário de contato. Inclui animações de scroll, menu mobile e botões flutuantes para WhatsApp e voltar ao topo.",
    image: folder,
    linkSite: "https://portifoliopersonaltrainer.netlify.app/",
    linkProjeto: "https://github.com/LeandroFerraz31/PORTIFOLIO-PERSONAL-TRAINER",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "Front-end",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    name: "Dashboard de Saúde",
    description: "Aplicação web fullstack para gerenciamento e visualização de dados de saúde de funcionários, com backend em Node.js e Express, banco SQLite, e front-end responsivo com gráficos interativos e exportação para Excel.",
    image: folderTree,
    linkSite: "https://indicadores-8wqo.onrender.com/",
    linkProjeto: "https://github.com/LeandroFerraz31/indicadores",
    tech: ["Node.js", "Express", "SQLite3", "HTML5", "CSS3", "JavaScript", "SheetJS"],
    category: "Fullstack",
    gradient: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    name: "Portifolio 2.0",
    description: "Portfólio pessoal responsivo construído com React e TypeScript, utilizando Vite como ferramenta de build e Tailwind CSS para estilização. Apresenta seções como projetos, habilidades e contato, com animações suaves e design moderno.",
    image: folderTwo,
    linkSite: "https://leandroferraz.netlify.app/",
    linkProjeto: "https://github.com/LeandroFerraz31/Portifolio-2.0",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    category: "Front-end",
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    name: "Delícias da Sara - Site Institucional",
    description: "Site institucional para a marca Delícias da Sara, projetado para apresentar produtos caseiros, depoimentos e facilitar contato. Inclui carrossel de depoimentos, animações de scroll, menu responsivo e formulário com máscara de telefone, tudo em HTML5, CSS3 e JavaScript puro.",
    image: folderFor,
    linkSite: "https://deliciasdasara2020.netlify.app/",
    linkProjeto: "https://github.com/LeandroFerraz31/sweets-page",
    tech: ["HTML5", "CSS3", "JavaScript", "Font Awesome", "Google Fonts"],
    category: "Front-end",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    id: 5,
    name: "Sistema de Controle de Manutenções de Veículos",
    description: "Sistema web fullstack para gerenciar manutenções de frotas de veículos, com cadastro, listagem, edição e exclusão de registros, dashboard com indicadores financeiros, e importação/exportação de dados via Excel, utilizando Python (Flask/Django), HTML, CSS, JavaScript e SQLite/PostgreSQL.",
    image: folderFive,
    linkSite: "https://sistem-manutencao.onrender.com/",
    linkProjeto: "https://github.com/LeandroFerraz31/sistem-manutencao",
    tech: ["Python", "Flask", "Django", "HTML5", "CSS3", "JavaScript", "SQLite", "PostgreSQL", "Pandas", "openpyxl"],
    category: "Fullstack",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    id: 6,
    name: "Higienizadora - Website",
    description: "Site moderno e responsivo para a Higienizadora, especializado em higienização de estofados, colchões e tapetes, com design otimizado para SEO, animações suaves, formulário de contato integrado ao WhatsApp, e menu responsivo, utilizando HTML5, CSS3 e JavaScript puro.",
    image: folderSix,
    linkSite: "https://page-higienizacao.netlify.app/",
    linkProjeto: "https://github.com/LeandroFerraz31/Page-Higenizacao",
    tech: ["HTML5", "CSS3", "JavaScript", "Font Awesome", "Google Fonts"],
    category: "Front-end",
    gradient: "from-yellow-500 to-orange-600"
  },
];