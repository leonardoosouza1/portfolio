import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Experience = {
  id: number
  role: string
  company: string
  period: string
  summary: string
  responsibilities: string[]
  achievements?: string[]
  technologies?: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Plathanus Software & Design",
    period: "2021 - Presente",
    summary:
      "Como desenvolvedor full stack, ajudo no planejamento, desenvolvimento e manutenção de aplicações web e mobile para clientes variados, atuando em todas as camadas de tecnologia e garantindo alta qualidade, performance e escalabilidade.",
    responsibilities: [
      "Projetar e implementar interfaces intuitivas com React, Next.js e React Native, priorizando experiência do usuário e acessibilidade.",
      "Desenvolver APIs robustas utilizando NestJS, Express, Django e FastAPI, definindo endpoints REST e GraphQL.",
      "Estruturar pipelines CI/CD com GitHub Actions, Docker e Nginx para deploys confiáveis e rollback controlado.",
      "Liderar tecnicamente projetos estratégicos (Plathanus Website & Blog), definindo arquitetura, revisando código e orientando desenvolvedores juniores.",
      "Colaborar com times multidisciplinares em diagnóstico de sistemas, suporte técnico e otimização de performance.",
    ],
    achievements: [
      "Redução de 30% no tempo de deploy, através da automação de pipelines.",
      "Melhoria de 25% na cobertura de testes unitários, garantindo maior confiabilidade em releases.",
      "Mentoria de 4 desenvolvedores juniores, acelerando seu ramp-up e autonomia técnica.",
    ],
    technologies: [
      "TypeScript",
      "Python",
      "React",
      "Next.js",
      "React Native",
      "NestJS",
      "Express.js",
      "Django",
      "GraphQL",
      "Docker",
      "Nginx",
      "GitHub Actions",
      "CI/CD",
      "Mentoria Técnica",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Adapt Soluções EAD",
    period: "2020 - 2021",
    summary:
      "Conduzi o desenvolvimento de landing pages e componentes interativos para plataformas de ensino a distância, garantindo alto engajamento e compatibilidade com padrões SCORM.",
    responsibilities: [
      "Criar layouts responsivos e componentes reutilizáveis com HTML5, CSS3, JavaScript e React.",
      "Desenvolver e manter catálogo de componentes UI, acelerando o delivery de novas páginas.",
      "Integrar front-end a sistemas de LMS via SCORM 1.2, assegurando rastreamento de progresso e relatórios de cursos.",
      "Realizar testes de usabilidade e ajustes de performance, melhorando carregamento em dispositivos móveis.",
    ],
    achievements: [
      "Aumento de 40% no tempo médio de permanência em landing pages.",
      "Implementação de biblioteca de componentes que reduziu em 50% o esforço de desenvolvimento de novas features.",
    ],
    technologies: [
      "React",
      "HTML5",
      "CSS3",
      "JavaScript",
      "SCORM 1.2",
      "Catálogo de Componentes",
      "Otimização de Performance",
    ],
  },
  {
    id: 3,
    role: "Desenvolvedor Freelancer",
    company: "Projetos Independentes",
    period: "2020 - Presente",
    summary:
      "Atuo de forma autônoma na criação de soluções web e mobile sob medida, atendendo a demandas que vão de e‑commerces a integrações corporativas, sempre focando em escalabilidade e experiência do usuário.",
    responsibilities: [
      "House Cell: E‑commerce integrado com API do WhatsApp para fechamento de vendas, com React e Express/Mongoose.",
      "Finance (Sispack): Portal unificado com integrações Microsoft Teams (Graph API) e Power BI, desenvolvido em React/Redux e NestJS/TypeORM.",
    ],
    technologies: ["React", "Redux", "Express", "Mongoose", "NestJS", "TypeORM", "Microsoft Graph API", "Power BI"],
  },
]

export function SimplifiedExperience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Experiência Profissional</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <Card key={exp.id} className="border-l-4 border-l-primary">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start flex-col md:flex-row gap-2">
                <div>
                  <CardTitle className="text-xl">{exp.role}</CardTitle>
                  <CardDescription className="text-base">
                    {exp.company} • {exp.period}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{exp.summary}</p>

              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-lg">Responsabilidades:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.responsibilities.map((item, index) => (
                      <li key={index} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.achievements && exp.achievements.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-lg">Principais conquistas:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.achievements.map((item, index) => (
                      <li key={index} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.technologies && exp.technologies.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2 text-lg">Tecnologias e Habilidades:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
