import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { DetailedProject } from "@/lib/projects-data"

type ProjectDetailProps = {
  project: DetailedProject
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-muted-foreground mt-2">{project.company}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm">
        <div>
          <span className="font-medium">Desenvolvimento inicial:</span>{" "}
          <span className="text-muted-foreground">
            {project.period.start} – {project.period.end}
          </span>
        </div>
        {project.period.additional && (
          <div>
            <span className="font-medium">{project.period.additional.label}:</span>{" "}
            <span className="text-muted-foreground">
              {project.period.additional.start} – {project.period.additional.end}
            </span>
          </div>
        )}
      </div>

      {project.image && (
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={450}
            className="object-cover"
          />
        </div>
      )}

      <div>
        <h2 className="text-xl font-semibold mb-2">Descrição</h2>
        <p className="text-muted-foreground">{project.description}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Responsabilidades e conquistas</h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          {project.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>

      <Tabs defaultValue="technologies">
        <TabsList>
          <TabsTrigger value="technologies">Tecnologias</TabsTrigger>
          <TabsTrigger value="skills">Habilidades</TabsTrigger>
        </TabsList>
        <TabsContent value="technologies" className="pt-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="skills" className="pt-4">
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <Badge key={skill} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
