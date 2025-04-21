import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { detailedProjects } from "@/lib/projects-data"

export function SimplifiedProjects() {
  // Mostrar apenas os 4 projetos mais recentes na home
  const featuredProjects = detailedProjects.slice(0, 4)

  return (
    <section id="projects" className="py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Projetos Destacados</h2>
          <p className="text-muted-foreground">Conheça alguns dos meus trabalhos mais recentes</p>
        </div>
        <Button asChild className="mt-4 md:mt-0">
          <Link href="/projects" className="flex items-center">
            Ver Todos os Projetos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {featuredProjects.map((project) => (
          <Card key={project.id} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="line-clamp-2">{project.title}</CardTitle>
              <CardDescription>{project.company}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-sm text-muted-foreground mb-2">
                <span className="font-medium">Período:</span> {project.period.start} – {project.period.end}
              </div>
              <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && <Badge variant="outline">+{project.technologies.length - 3}</Badge>}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href={`/projects/${project.id}`}>Ver Detalhes</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center bg-muted/30 p-8 rounded-lg border">
        <h3 className="text-2xl font-bold mb-4">Explore Meu Portfólio Completo</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Veja todos os meus {detailedProjects.length} projetos, filtre por tecnologias ou habilidades específicas e
          descubra mais sobre minha experiência profissional.
        </p>
        <Button size="lg" asChild>
          <Link href="/projects" className="flex items-center">
            Acessar Portfólio Completo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
