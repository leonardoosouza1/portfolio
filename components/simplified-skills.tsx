import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type SkillCategory = {
  name: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "Chakra UI", "Styled-components"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "NestJS", "Express", "Django", "FastAPI", "GraphQL", "REST APIs"],
  },
  {
    name: "Banco de Dados",
    skills: ["PostgreSQL", "MongoDB", "PrismaORM", "TypeORM", "Redis"],
  },
  {
    name: "DevOps",
    skills: ["Docker", "CI/CD", "GitHub Actions", "AWS", "Nginx", "Linux"],
  },
  {
    name: "Ferramentas",
    skills: ["Git", "VS Code", "Figma", "Jira", "ClickUp", "Agile/Scrum"],
  },
]

export function SimplifiedSkills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Habilidades Técnicas</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <Card key={category.name}>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
