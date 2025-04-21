"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import { timelineProjects, getAllTimelineTechnologies } from "@/lib/timeline-data"

export function SimplifiedProjectList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProjects, setFilteredProjects] = useState(timelineProjects)

  // Get all unique technologies
  const allTechnologies = getAllTimelineTechnologies()

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)

    if (!term) {
      setFilteredProjects(timelineProjects)
      return
    }

    const filtered = timelineProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(term) ||
        project.company.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(term)),
    )

    setFilteredProjects(filtered)
  }

  return (
    <div>
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar projetos por nome, tecnologia ou empresa..."
          value={searchTerm}
          onChange={handleSearch}
          className="pl-10"
        />
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 border rounded-lg">
          <h3 className="text-xl font-medium mb-2">Nenhum projeto encontrado</h3>
          <p className="text-muted-foreground">Tente ajustar sua busca para encontrar o que está procurando.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  {project.company} • {project.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
