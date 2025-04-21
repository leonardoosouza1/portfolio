export type TimelineProject = {
  id: number
  title: string
  company: string
  period: string
  description: string
  longDescription: string
  technologies: string[]
  role: string
  achievements: string[]
  category: "professional" | "freelance"
  image?: string
  demoUrl?: string
  repoUrl?: string
}

export const timelineProjects: TimelineProject[] = [
  // Adapt EAD
  {
    id: 1,
    title: "Adapt EAD",
    company: "Adapt Soluções EAD",
    period: "2019-2020",
    role: "Frontend Developer",
    description: "Developed interactive landing pages for distance education institutions",
    longDescription:
      "Developed interactive landing pages for distance education institutions (STJ | MED, Universidade Caixa, Bradesco) using HTML, CSS, JavaScript, and XML.",
    technologies: ["HTML", "CSS", "JavaScript", "XML", "SCORM 1.2"],
    achievements: [
      "Designed and implemented a reusable library of interactive UI components",
      "Created animations, microinteractions, interactive tests, and course timelines",
      "Integrated with SCORM 1.2 for e-learning compatibility",
    ],
    category: "professional",
    image: "/placeholder.svg?height=450&width=800",
  },

  // House Cell (Freelance)
  {
    id: 2,
    title: "House Cell",
    company: "Freelance",
    period: "05/2020 - 06/2020",
    role: "Full Stack Developer",
    description: "Created an e-commerce site with React and Express backend",
    longDescription:
      "Created an e-commerce site with React and Styled-components; built backend services with Express.",
    technologies: ["React", "Styled-components", "Express", "Node.js"],
    achievements: [
      "Developed complete e-commerce solution",
      "Implemented responsive design with Styled-components",
      "Built RESTful API with Express",
    ],
    category: "freelance",
    image: "/placeholder.svg?height=450&width=800",
  },

  // Votação (Freelance)
  {
    id: 3,
    title: "Votação",
    company: "Freelance",
    period: "09/2020",
    role: "Backend Developer",
    description: "Developed a Python API using Flask and Selenium to automate vote counting",
    longDescription: "Developed a Python API using Flask and Selenium to automate vote counting.",
    technologies: ["Python", "Flask", "Selenium"],
    achievements: [
      "Automated vote counting process",
      "Built RESTful API with Flask",
      "Implemented web scraping with Selenium",
    ],
    category: "freelance",
    image: "/placeholder.svg?height=450&width=800",
  },

  // Super Bike
  {
    id: 4,
    title: "Super Bike",
    company: "Plathanus",
    period: "09/2021 - 12/2021",
    role: "Full Stack Developer",
    description: "Started as a frontend developer using React and later contributed to backend improvements",
    longDescription:
      "Started as a frontend developer using React and later contributed to backend improvements with Express and Knex ORM.",
    technologies: ["React", "Express", "Knex ORM", "Node.js"],
    achievements: [
      "Transitioned from frontend to full stack development",
      "Improved backend performance with optimized queries",
      "Implemented responsive UI components",
    ],
    category: "professional",
    image: "/placeholder.svg?height=450&width=800",
  },

  // PV Operations | SunWeg
  {
    id: 5,
    title: "PV Operations | SunWeg",
    company: "Plathanus",
    period: "04/2021 - 08/2021",
    role: "Mobile Developer",
    description: "Finalized project stages and provided ongoing support for mobile solutions",
    longDescription:
      "Finalized project stages and provided ongoing support for mobile solutions using React Native, Expo, and push notifications.",
    technologies: ["React Native", "Expo", "Push Notifications", "JavaScript"],
    achievements: [
      "Completed final development stages",
      "Implemented push notification system",
      "Provided ongoing maintenance and support",
    ],
    category: "professional",
    image: "/placeholder.svg?height=450&width=800",
  },

  // Sodexo | Pluxee
  {
    id: 6,
    title: "Sodexo | Pluxee",
    company: "Plathanus",
    period: "06/2021 - 08/2021",
    role: "Full Stack Developer",
    description: "Supported maintenance and enhancements for mobile and web platforms",
    longDescription:
      "Supported maintenance and enhancements for mobile and web platforms, integrating with pre-built APIs.",
    technologies: ["React", "React Native", "RESTful APIs"],
    achievements: [
      "Enhanced existing mobile and web platforms",
      "Integrated with third-party APIs",
      "Improved user experience with new features",
    ],
    category: "professional",
    image: "/placeholder.svg?height=450&width=800",
  },

  // Plathanus Website | Plathanus Blog
  {
    id: 7,
    title: "Plathanus Website | Plathanus Blog",
    company: "Plathanus",
    period: "08/2021 - 02/2022",
    role: "Technical Leader",
    description: "Led technical planning and execution as a technical leader",
    longDescription:
      "Led technical planning and execution as a technical leader, developing the web interface with Next.js, React, and Chakra-UI and managing backend tasks with Express and TypeORM.",
    technologies: ["Next.js", "React", "Chakra-UI", "Express", "TypeORM"],
    achievements: [
      "Led technical planning and execution",
      "Developed modern web interface with Next.js",
      "Managed backend development with Express and TypeORM",
    ],
    category: "professional",
    image: "/placeholder.svg?height=450&width=800",
  },

  // Professor Ferreto
  {
    id: 8,
    title: "Professor Ferreto",
    company: "Plathanus",
    period: "12/2021 - 04/2022",
    role: "Full Stack Developer",
    description: "Transitioned from solo mobile app development to collaborating in a team",
    longDescription:
      "Transitioned from solo mobile app development (React Native, TypeScript) to collaborating in a team, enhancing both mobile and web interfaces and backend services (Express, GraphQL).",
    technologies: ["React Native", "TypeScript", "Express", "GraphQL", "React"],
    achievements: [
      "Transitioned from solo development to team collaboration",
      "Enhanced mobile and web interfaces",
      "Improved backend services with Express and GraphQL",
    ],
    category: "professional",
    image: "/placeholder.svg?height=450&width=800",
  },

  // CashOpera
  {
    id: 9,
    title: "CashOpera",
    company: "Plathanus",
    period: "01/2022 - 04/2022",
    role: "Full Stack Developer",
    description: "Developed mobile interfaces and later refactored backend functionalities",
    longDescription: "Developed mobile interfaces and later refactored backend functionalities using Django.",
    technologies: ["React Native", "Django", "Python", "JavaScript"],
    achievements: [
      "Developed mobile interfaces",
      "Refactored backend functionalities with Django",
      "Improved system performance and reliability",
    ],
    category: "professional",
    image: "/placeholder.svg?height=450&width=800",
  },

  // Gravar Transmissão de Rádio (Freelance)
  {
    id: 10,
    title: "Gravar Transmissão de Rádio",
    company: "Freelance",
    period: "03/2022",
    role: "Backend Developer",
    description: "Engineered a Flask API to record audio streams",
    longDescription: "Engineered a Flask API to record audio streams, leveraging subprocess calls and PyDub.",
    technologies: ["Python", "Flask", "PyDub", "Subprocess"],
    achievements: [
      "Built API for recording audio streams",
      "Implemented audio processing with PyDub",
      "Utilized subprocess calls for system integration",
    ],
    category: "freelance",
    image: "/placeholder.svg?height=450&width=800",
  },

  // Multiplicara
  {
    id: 11,
    title: "Multiplicara",
    company: "Plathanus",
    period: "10/2022 - 01/2023",
    role: "Full Stack Developer",
    description: "Contributed to project finalization and provided maintenance",
    longDescription:
      "Contributed to project finalization and provided maintenance for mobile (React Native) and backend systems (Express, TypeORM).",
    technologies: ["React Native", "Express", "TypeORM", "Node.js"],
    achievements: [
      "Finalized project development",
      "Maintained mobile and backend systems",
      "Improved system stability and performance",
    ],
    category: "professional",
    image: "/placeholder.svg?height=450&width=800",
  },

  // Hidrolight
  {
    id: 12,
    title: "Hidrolight",
    company: "Plathanus",
    period: "02/2023 - 06/2023",
    role: "Frontend Developer",
    description: "Created a boilerplate for web development using Next.js and React",
    longDescription:
      "Created a boilerplate for web development using Next.js and React, supporting team collaboration on pull requests.",
    technologies: ["Next.js", "React", "TypeScript", "Git"],
    achievements: [
      "Created development boilerplate",
      "Supported team collaboration",
      "Implemented best practices for pull requests",
    ],
    category: "professional",
    image: "/placeholder.svg?height=450&width=800",
  },

  // Conteúdo School & Azul Linhas Aéreas
  {
    id: 13,
    title: "Conteúdo School & Azul Linhas Aéreas",
    company: "Plathanus",
    period: "01/2023 - 08/2023",
    role: "Frontend Developer",
    description: "Developed interactive landing pages and a component library",
    longDescription:
      "Developed interactive landing pages and a component library with Next.js and Chakra-UI, enhancing delivery speed and visual appeal.",
    technologies: ["Next.js", "React", "Chakra-UI", "TypeScript"],
    achievements: [
      "Built interactive landing pages",
      "Developed reusable component library",
      "Enhanced delivery speed and visual appeal",
    ],
    category: "professional",
    image: "/placeholder.svg?height=450&width=800",
  },

  // Webjasper
  {
    id: 14,
    title: "Webjasper",
    company: "Plathanus",
    period: "06/2023 - 12/2023 (Support: 01/2024 - 08/2024)",
    role: "Full Stack Developer",
    description: "Built a CMS for supermarket monitoring with Next.js and NestJS",
    longDescription:
      "Built a CMS for supermarket monitoring with Next.js (frontend) and NestJS with PrismaORM (backend), while integrating DevOps practices via Docker, Nginx, and CI/CD pipelines.",
    technologies: ["Next.js", "NestJS", "PrismaORM", "Docker", "Nginx", "CI/CD"],
    achievements: [
      "Developed complete CMS solution",
      "Implemented DevOps practices",
      "Set up CI/CD pipelines for automated deployment",
    ],
    category: "professional",
    image: "/placeholder.svg?height=450&width=800",
  },

  // Finance (Freelance)
  {
    id: 15,
    title: "Finance",
    company: "Freelance",
    period: "01/2024 - 06/2024",
    role: "Full Stack Developer",
    description: "Integrated Microsoft Teams and PowerBI into a unified portal",
    longDescription:
      "Integrated Microsoft Teams (chat, meetings, calendar management) and PowerBI into a unified portal using React (with Redux and Ant Design) on the frontend and NestJS with TypeORM on the backend.",
    technologies: ["React", "Redux", "Ant Design", "NestJS", "TypeORM", "Microsoft Teams API", "PowerBI"],
    achievements: [
      "Integrated Microsoft Teams functionality",
      "Embedded PowerBI dashboards",
      "Created unified portal for business intelligence",
    ],
    category: "freelance",
    image: "/placeholder.svg?height=450&width=800",
  },

  // ApexHub - Sporting Events
  {
    id: 16,
    title: "ApexHub - Sporting Events",
    company: "Plathanus",
    period: "11/2023 - 08/2024",
    role: "Full Stack Developer",
    description: "Collaborated across the full stack and integrated data analytics",
    longDescription:
      "Collaborated across the full stack—using Next.js, React, Tailwind, and Django—and integrated data analytics with Metabase.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Django", "Python", "Metabase"],
    achievements: [
      "Developed full stack sporting events platform",
      "Integrated data analytics with Metabase",
      "Implemented responsive design with Tailwind CSS",
    ],
    category: "professional",
    image: "/placeholder.svg?height=450&width=800",
  },

  // Mingoo
  {
    id: 17,
    title: "Mingoo",
    company: "Plathanus",
    period: "06/2024 - Present",
    role: "Backend Developer",
    description: "Currently developing a CMS and backend using NestJS and PrismaORM",
    longDescription:
      "Currently developing a CMS and backend using NestJS and PrismaORM, along with DevOps practices for continuous deployment and support.",
    technologies: ["NestJS", "PrismaORM", "TypeScript", "Docker", "CI/CD"],
    achievements: [
      "Developing CMS and backend systems",
      "Implementing DevOps practices",
      "Setting up continuous deployment pipelines",
    ],
    category: "professional",
    image: "/placeholder.svg?height=450&width=800",
  },
]

// Helper function to get all unique technologies from timeline projects
export function getAllTimelineTechnologies(): string[] {
  const allTechs = timelineProjects.flatMap((project) => project.technologies)
  return Array.from(new Set(allTechs)).sort()
}

// Helper function to get all unique companies from timeline projects
export function getAllCompanies(): string[] {
  const allCompanies = timelineProjects.map((project) => project.company)
  return Array.from(new Set(allCompanies)).sort()
}

// Helper function to get all unique roles from timeline projects
export function getAllRoles(): string[] {
  const allRoles = timelineProjects.map((project) => project.role)
  return Array.from(new Set(allRoles)).sort()
}
