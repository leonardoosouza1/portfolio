export type DetailedProject = {
  id: number
  title: string
  company: string
  period: {
    start: string
    end: string
    additional?: {
      label: string
      start: string
      end: string
    }
  }
  description: string
  responsibilities: string[]
  technologies: string[]
  skills: string[]
  image?: string
}

// Atualizar a lista de projetos adicionando os novos projetos fornecidos
export const detailedProjects: DetailedProject[] = [
  {
    id: 1,
    title: "Webjasper",
    company: "Plathanus",
    period: {
      start: "junho/2023",
      end: "dezembro/2023",
      additional: {
        label: "Suporte e manutenção",
        start: "janeiro/2024",
        end: "agosto/2024",
      },
    },
    description:
      "Implantei uma plataforma de monitoramento em tempo real para redes de supermercados, composta por um agente (robot) on‑site e um painel administrativo web. A solução captura métricas de conexão, volumes de dados transferidos, tipos de informação coletada, além de gerar relatórios de erro e alertas automáticos via SMS e e‑mail.",
    responsibilities: [
      "Projetei e implementei API RESTful em NestJS, garantindo alta disponibilidade e segurança na troca de mensagens com agentes.",
      "Desenvolvi o painel em Next.js + Chakra UI, com dashboards interativos que exibem estatísticas de uso e logs de eventos.",
      "Coordenei a lógica de Jobs assíncronos (Node Cron e Worker Threads), para automatizar coleta de dados e disparo de alertas.",
      "Configurei pipelines CI/CD com GitHub Actions, além de orquestração em Docker e proxy reverso em Nginx, assegurando deploys consistentes e rollback rápido.",
      "Integrei PrismaORM e Jest para modelagem de dados e testes automatizados, aumentando a confiabilidade do sistema.",
      "Preparei relatórios analíticos no Metabase, permitindo ao time de operações tomar decisões baseadas em dados.",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "Chakra UI",
      "Axios",
      "useContext",
      "NestJS",
      "PrismaORM",
      "Jest",
      "Node Cron",
      "Worker Threads",
      "Docker",
      "Nginx",
      "GitHub Actions",
      "Metabase",
    ],
    skills: [
      "Desenvolvimento de API",
      "Arquitetura de microserviços",
      "Dashboard Analytics",
      "Automação de tarefas",
      "Testes unitários e de integração",
      "DevOps & CI/CD",
      "Containerização",
      "Monitoramento de sistemas",
    ],
    image: "/placeholder.svg?height=450&width=800",
  },
  {
    id: 2,
    title: "ApexHub – Plataforma de Eventos Esportivos",
    company: "Plathanus",
    period: {
      start: "novembro/2023",
      end: "fevereiro/2024",
      additional: {
        label: "Suporte e evolução",
        start: "fevereiro/2024",
        end: "agosto/2024",
      },
    },
    description:
      "Atuei como full‑stack na criação de um marketplace de ingressos e serviços para eventos esportivos. Desde o site institucional até painéis administrativos para clientes e empresas, evoluí o MVP inicial para uma solução escalável, cuidando também da infraestrutura e automação de deploy.",
    responsibilities: [
      "Desenvolvi front‑end em Next.js + Tailwind, com páginas de vendas e checkout otimizadas para conversão.",
      "Modelei e implementei backend em Django, integrando Celery para processamento assíncrono de notificações e relatórios de vendas.",
      "Criei painel administrativo customizado em React, oferecendo controle completo de cadastros, eventos e relatórios financeiros via API Pagar.me.",
      "Gerenciei pipelines CI/CD e infraestrutura cloud, garantindo zero downtime em lançamentos de novas versões.",
      "Assumi autonomia completa pós‑lançamento, executando bugfixes, pequenas evoluções e ajustes de performance.",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "useContext",
      "Python",
      "Django",
      "Celery",
      "Pagar.me API",
      "CI/CD",
    ],
    skills: [
      "Desenvolvimento Full‑Stack",
      "Design de UX/UI para e‑commerce",
      "Processamento assíncrono",
      "Integração de pagamentos",
      "Infraestrutura & Deploy",
      "Otimização de performance",
    ],
    image: "/placeholder.svg?height=450&width=800",
  },
  {
    id: 3,
    title: "Mingoo – Plataforma de Reservas de Passeios Turísticos",
    company: "Plathanus",
    period: {
      start: "junho/2024",
      end: "outubro/2024",
      additional: {
        label: "Suporte contínuo",
        start: "outubro/2024",
        end: "atualmente",
      },
    },
    description:
      "Participei da criação de uma plataforma web e app móvel para reserva online de passeios turísticos guiados. Estruturei API e painel administrativo, além de implementar páginas estáticas e dinâmicas que integram conteúdo rico com recursos de booking em tempo real.",
    responsibilities: [
      "Desenvolvi endpoints em NestJS + PrismaORM para cadastros de guias, passeios e reservas, com controle de disponibilidade e pagamentos.",
      "Implementei o painel em Next.js + Material‑UI, permitindo gestão de roteiros, agendas e relatórios de faturamento.",
      "Estruturei jobs periódicos (Node Cron) e workers para envio de confirmações e lembretes automáticos, reduzindo faltas em 30%.",
      "Configurei ambientes Docker com Nginx e pipelines GitHub Actions, assegurando escalabilidade e rollback seguro.",
      "Elaborei dashboards no Metabase, acompanhando métricas de vendas, cancelamentos e rating de guias.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Material‑UI",
      "useContext",
      "NestJS",
      "PrismaORM",
      "Jest",
      "Node Cron",
      "Worker Threads",
      "Docker",
      "Nginx",
      "GitHub Actions",
      "Metabase",
    ],
    skills: [
      "APIs RESTful",
      "Gerenciamento de reservas",
      "Automação de notificações",
      "Testes automatizados",
      "DevOps & Containers",
      "Análise de dados",
    ],
    image: "/placeholder.svg?height=450&width=800",
  },
  {
    id: 4,
    title: "House Cell",
    company: "Freelance",
    period: {
      start: "maio/2020",
      end: "junho/2020",
    },
    description:
      "Desenvolvi um e‑commerce simples onde o cliente monta o carrinho de compras e, ao finalizar, inicia automaticamente uma conversa no WhatsApp com o lojista para concluir a venda.",
    responsibilities: [
      "Estruturei SPA em React com styled‑components, garantindo UI responsiva e modular.",
      "Implementei backend em Express + Mongoose, criando endpoints para CRUD de produtos e gerenciamento de carrinho.",
      "Integrei API do WhatsApp para disparo automático de mensagem com detalhes do pedido.",
    ],
    technologies: ["React", "Styled‑components", "Express", "Mongoose", "WhatsApp API"],
    skills: ["Desenvolvimento de SPA", "Integração de APIs", "Modelagem de dados NoSQL"],
    image: "/placeholder.svg?height=450&width=800",
  },
  {
    id: 5,
    title: "Finance",
    company: "Freelance",
    period: {
      start: "janeiro/2024",
      end: "junho/2024",
    },
    description:
      'Atuei na criação de um portal unificado ("hub") para centralizar todos os serviços Finance, com forte integração aos ecossistemas Microsoft Teams e PowerBI, proporcionando ao usuário um único ponto de acesso para chat, reuniões, calendário e relatórios financeiros.',
    responsibilities: [
      "Implementei front‑end em React + Redux + Ant Design, consumindo MSAL para autenticação Azure AD.",
      "Desenvolvi integrações com Microsoft Graph API: chat, criação/edição/deleção de reuniões e exibição de calendário.",
      "Exibi dashboards PowerBI embedados, permitindo navegação e visualização de relatórios interativos.",
      "Estruturei backend em NestJS + TypeORM, definindo modelos de dados e rotas seguras; cobri funcionalidades com Jest.",
    ],
    technologies: ["JavaScript", "React", "Redux", "Ant Design", "React MSAL", "NestJS", "TypeORM", "Jest"],
    skills: ["SSO & OAuth2", "Graph API", "PowerBI Embedding", "Desenvolvimento de portais", "Testes automatizados"],
    image: "/placeholder.svg?height=450&width=800",
  },
  {
    id: 6,
    title: "Centerlight",
    company: "Plathanus",
    period: {
      start: "dezembro/2024",
      end: "abril/2025",
    },
    description:
      "Full‑stack em plataforma de gestão de aeródromos e dispositivos de iluminação para pistas de pouso. Criei APIs de usuários/permissões e de gerenciamento de aeródromos, todas orquestradas via API Gateway para comunicação eficiente entre serviços.",
    responsibilities: [
      "Planejei e implementei frontend em Next.js + Tailwind, com telas de login, dashboard e gestão de dispositivos.",
      "Desenvolvi API de usuários e permissões em NestJS + Prisma, com hierarquia de papéis e validações de acesso.",
      "Continuei a construção de API para aeródromos em NestJS + TypeORM; cadastrei aerodromos, geolocalização, status de dispositivos e agendamentos em tempo real.",
      "Colaborei na implementação de um API Gateway para roteamento dinâmico e segurança (JWT), orquestração de deploy com Docker + GitHub Actions.",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "NestJS", "PrismaORM", "TypeORM", "Docker", "GitHub Actions"],
    skills: [
      "Microserviços",
      "API Gateway",
      "Autenticação e Autorização",
      "Infraestrutura como Código",
      "Design de UX",
    ],
    image: "/placeholder.svg?height=450&width=800",
  },
  {
    id: 7,
    title: "Hashpay",
    company: "Plathanus",
    period: {
      start: "início 2025",
      end: "MVP",
    },
    description:
      "Desenvolvi páginas iniciais do site e painel administrativo para venda de terahash de mineração, permitindo que usuários comprem capacidade de hash e configurem recebíveis a partir de um portal web.",
    responsibilities: [
      "Implementei frontend em Next.js + Tailwind, com fluxo de compra e dashboards de assinaturas.",
      "Modelei backend em Django, criando APIs de cadastro de planos, processamentos de pagamentos e gestão de contratos.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Django"],
    skills: ["E‑commerce MVP", "Modelagem de planos de assinatura", "Integração de gateways de pagamento"],
    image: "/placeholder.svg?height=450&width=800",
  },
  {
    id: 8,
    title: "Super Bike",
    company: "Plathanus",
    period: {
      start: "setembro/2021",
      end: "dezembro/2021",
    },
    description:
      "Inciado como frontend e, ao longo do projeto, colaborei em melhorias de backend. O projeto consistia em marketplace de peças e serviços para bicicletas, com cadastro de produtos, carrinho e área do cliente.",
    responsibilities: [
      "Desenvolvi SPA em React + Material‑UI + styled‑components, implementando filtros dinâmicos com Redux e GraphQL.",
      "Apoiei construção de API GraphQL em Express + Knex, criando resolvers e testes unitários em Jest.",
      "Colaborei na otimização de consultas e na correção de bugs de performance.",
    ],
    technologies: ["React", "Material‑UI", "styled‑components", "Redux", "GraphQL", "Express", "Knex", "Jest"],
    skills: [
      "GraphQL Schema Design",
      "Otimização de consultas SQL",
      "Testes de front/backend",
      "Colaboração em equipe",
    ],
    image: "/placeholder.svg?height=450&width=800",
  },
  {
    id: 9,
    title: "Professor Ferreto",
    company: "Plathanus",
    period: {
      start: "dezembro/2021",
      end: "abril/2022",
    },
    description:
      "Suporte e desenvolvimento de novas funcionalidades tanto para o Painel Administrativo quanto para o App. Planejamento e execução de novas atividades com o Time Professor ferreto, seguindo regras de negócios e gerenciando tempo de entrega.",
    responsibilities: [
      "Construi mobile app em React Native + Redux + GraphQL, integrando SQLite para cache offline e notificações push.",
      "Desenvolvi web em React + Material‑UI, criando componentes reutilizáveis e gerenciando estado com useContext.",
      "Implementei backend em Express + GraphQL + Mongoose, definindo modelos de conteúdo e resolvers de dados.",
    ],
    technologies: [
      "React Native",
      "Redux",
      "Styled‑components",
      "GraphQL",
      "SQLite",
      "React",
      "Material‑UI",
      "Express",
      "Mongoose",
    ],
    skills: ["Desenvolvimento Mobile & Web", "Cache Offline", "Notificações Push", "Design de API GraphQL"],
    image: "/placeholder.svg?height=450&width=800",
  },
  {
    id: 10,
    title: "PV Operations | SunWeg",
    company: "Plathanus",
    period: {
      start: "abril/2021",
      end: "agosto/2021",
    },
    description:
      "Finalização e suporte de app mobile para monitoramento de sistemas fotovoltaicos, permitindo exibição de dados em tempo real e alertas de falhas.",
    responsibilities: [
      "Desenvolvi últimas telas e refinamentos em React Native + Expo, com notificações push e integração Axios.",
      "Ajustei lógica de consumo de APIs e estados com useContext, melhorando estabilidade em redes instáveis.",
    ],
    technologies: ["React Native", "Expo", "Push Notification", "styled‑components", "useContext", "Axios"],
    skills: ["Suporte & manutenção", "Resiliência em mobile", "Integração de hardware IoT"],
    image: "/placeholder.svg?height=450&width=800",
  },
  {
    id: 11,
    title: "Sodexo | Pluxee (Wizeo)",
    company: "Plathanus",
    period: {
      start: "junho/2021",
      end: "agosto/2021",
    },
    description:
      "Suporte e manutenção de app e portal web de benefícios corporativos, trabalhando junto à equipe Sodexo para evoluir front-ends consumindo APIs internas.",
    responsibilities: [
      "Criei componentes em React Native + styled‑components e React + Material‑UI, integrando Redux e Axios.",
      "Implementei fluxo de notificações push e ajustes de UI/UX conforme guidelines da marca.",
    ],
    technologies: ["React Native", "styled‑components", "Push Notification", "Redux", "Axios", "React", "Material‑UI"],
    skills: ["Adaptação a guidelines corporativas", "Suporte em ambiente complexo"],
    image: "/placeholder.svg?height=450&width=800",
  },
  {
    id: 12,
    title: "Plathanus Website & Blog",
    company: "Plathanus",
    period: {
      start: "agosto/2021",
      end: "fevereiro/2022",
    },
    description:
      "Liderança técnica no website institucional e blog da Plathanus, atuando desde idealização até deploy, e coordenando desenvolvedores juniores.",
    responsibilities: [
      "Planejei arquitetura Next.js + Chakra UI, definindo fluxo de posts, SEO e templates de página.",
      "Implementação de backend Express + TypeORM para gerenciar posts, usuários e comentários.",
      "Mentoria de 2 desenvolvedores juniores, criando guidelines de código e revisão de PRs.",
    ],
    technologies: ["Next.js", "Chakra UI", "Express", "TypeORM"],
    skills: ["Liderança técnica", "Planejamento de features", "Mentoria", "SEO básico"],
    image: "/placeholder.svg?height=450&width=800",
  },
  {
    id: 13,
    title: "CashOpera",
    company: "Plathanus",
    period: {
      start: "janeiro/2022",
      end: "abril/2022",
    },
    description:
      "Colaboração no desenvolvimento de app mobile para operações financeiras, com in‑app purchases e notificações.",
    responsibilities: [
      "Criei interfaces em React Native + Expo, integrando compra de serviços via In‑App Purchase e push notifications.",
      "Refatorei endpoints Python/Django + Celery, melhorando performance de processamento de tasks assíncronas.",
    ],
    technologies: [
      "React Native",
      "Expo",
      "styled‑components",
      "Axios",
      "useContext",
      "In‑App Purchase",
      "Django",
      "Celery",
    ],
    skills: ["Pagamentos mobile", "Processamento assíncrono", "Refatoração de código"],
    image: "/placeholder.svg?height=450&width=800",
  },
  {
    id: 14,
    title: "Multiplicara",
    company: "Plathanus",
    period: {
      start: "outubro/2022",
      end: "janeiro/2023",
      additional: {
        label: "Suporte",
        start: "fevereiro/2023",
        end: "contínuo",
      },
    },
    description:
      "Finalização, suporte e manutenção de app de desafios e recompensas, com fluxos de compra e notificações e streaming de videos.",
    responsibilities: [
      "Entreguei telas em React Native + Expo, integrando notificações e In‑App Purchases.",
      "Ajustei backend em Express + TypeORM, configurando jobs com Node Cron e Worker Threads para envio de lembretes.",
    ],
    technologies: [
      "React Native",
      "Expo",
      "styled‑components",
      "Axios",
      "Push Notification",
      "In‑App Purchase",
      "Express",
      "TypeORM",
      "Node Cron",
      "Worker Threads",
    ],
    skills: ["Gamificação", "Automação de notificações", "Manutenção contínua"],
    image: "/placeholder.svg?height=450&width=800",
  },
]

// Helper function to get all unique technologies from projects
export function getAllProjectTechnologies(): string[] {
  const allTechs = detailedProjects.flatMap((project) => project.technologies)
  return Array.from(new Set(allTechs)).sort()
}

// Helper function to get all unique skills from projects
export function getAllProjectSkills(): string[] {
  const allSkills = detailedProjects.flatMap((project) => project.skills)
  return Array.from(new Set(allSkills)).sort()
}

// Helper function to get a project by ID
export function getProjectById(id: number): DetailedProject | undefined {
  return detailedProjects.find((project) => project.id === id)
}
