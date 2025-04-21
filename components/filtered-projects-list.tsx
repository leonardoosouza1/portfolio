"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Filter, X, Building, Code, Briefcase, SortAsc, SortDesc } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import { detailedProjects, getAllProjectTechnologies, getAllProjectSkills } from "@/lib/projects-data"

type SortOption = "recent" | "oldest" | "alphabetical"

export function FilteredProjectsList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTechs, setSelectedTechs] = useState<string[]>([])
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<SortOption>("recent")
  const [filteredProjects, setFilteredProjects] = useState(detailedProjects)

  // Get all unique technologies, skills, and companies
  const allTechnologies = getAllProjectTechnologies()
  const allSkills = getAllProjectSkills()
  const allCompanies = Array.from(new Set(detailedProjects.map((project) => project.company))).sort()

  // Apply filters and sorting
  useEffect(() => {
    let results = [...detailedProjects]

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      results = results.filter(
        (project) =>
          project.title.toLowerCase().includes(term) ||
          project.company.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(term)) ||
          project.skills.some((skill) => skill.toLowerCase().includes(term)),
      )
    }

    // Filter by selected technologies
    if (selectedTechs.length > 0) {
      results = results.filter((project) => selectedTechs.some((tech) => project.technologies.includes(tech)))
    }

    // Filter by selected skills
    if (selectedSkills.length > 0) {
      results = results.filter((project) => selectedSkills.some((skill) => project.skills.includes(skill)))
    }

    // Filter by selected companies
    if (selectedCompanies.length > 0) {
      results = results.filter((project) => selectedCompanies.includes(project.company))
    }

    // Sort results
    results = sortProjects(results, sortBy)

    setFilteredProjects(results)
  }, [searchTerm, selectedTechs, selectedSkills, selectedCompanies, sortBy])

  // Sort projects based on selected option
  const sortProjects = (projects: typeof detailedProjects, sortOption: SortOption) => {
    const sortedProjects = [...projects]

    switch (sortOption) {
      case "recent":
        return sortedProjects.sort((a, b) => {
          // Assume que o período mais recente está no final (ex: "2024" > "2023")
          return b.period.end.localeCompare(a.period.end)
        })
      case "oldest":
        return sortedProjects.sort((a, b) => {
          return a.period.start.localeCompare(b.period.start)
        })
      case "alphabetical":
        return sortedProjects.sort((a, b) => {
          return a.title.localeCompare(b.title)
        })
      default:
        return sortedProjects
    }
  }

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  // Toggle technology filter
  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) => (prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]))
  }

  // Toggle skill filter
  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]))
  }

  // Toggle company filter
  const toggleCompany = (company: string) => {
    setSelectedCompanies((prev) => (prev.includes(company) ? prev.filter((c) => c !== company) : [...prev, company]))
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("")
    setSelectedTechs([])
    setSelectedSkills([])
    setSelectedCompanies([])
    setSortBy("recent")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar projetos..." value={searchTerm} onChange={handleSearchChange} className="pl-10" />
        </div>

        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filtros
                {(selectedTechs.length > 0 || selectedSkills.length > 0 || selectedCompanies.length > 0) && (
                  <Badge variant="secondary" className="ml-2">
                    {selectedTechs.length + selectedSkills.length + selectedCompanies.length}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 max-h-[70vh] overflow-y-auto">
              <DropdownMenuLabel>Filtrar Projetos</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuLabel className="flex items-center">
                <Building className="h-4 w-4 mr-2" />
                Empresas
              </DropdownMenuLabel>
              {allCompanies.map((company) => (
                <DropdownMenuCheckboxItem
                  key={company}
                  checked={selectedCompanies.includes(company)}
                  onCheckedChange={() => toggleCompany(company)}
                >
                  {company}
                </DropdownMenuCheckboxItem>
              ))}

              <DropdownMenuSeparator />

              <DropdownMenuLabel className="flex items-center">
                <Code className="h-4 w-4 mr-2" />
                Tecnologias
              </DropdownMenuLabel>
              {allTechnologies.map((tech) => (
                <DropdownMenuCheckboxItem
                  key={tech}
                  checked={selectedTechs.includes(tech)}
                  onCheckedChange={() => toggleTech(tech)}
                >
                  {tech}
                </DropdownMenuCheckboxItem>
              ))}

              <DropdownMenuSeparator />

              <DropdownMenuLabel className="flex items-center">
                <Briefcase className="h-4 w-4 mr-2" />
                Habilidades
              </DropdownMenuLabel>
              {allSkills.map((skill) => (
                <DropdownMenuCheckboxItem
                  key={skill}
                  checked={selectedSkills.includes(skill)}
                  onCheckedChange={() => toggleSkill(skill)}
                >
                  {skill}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                {sortBy === "recent" ? <SortDesc className="h-4 w-4" /> : <SortAsc className="h-4 w-4" />}
                Ordenar
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                <DropdownMenuRadioItem value="recent">Mais recentes</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="oldest">Mais antigos</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="alphabetical">Ordem alfabética</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {(searchTerm ||
            selectedTechs.length > 0 ||
            selectedSkills.length > 0 ||
            selectedCompanies.length > 0 ||
            sortBy !== "recent") && (
            <Button variant="ghost" onClick={clearFilters} aria-label="Limpar filtros">
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Active filters display */}
      {(selectedTechs.length > 0 || selectedSkills.length > 0 || selectedCompanies.length > 0) && (
        <div className="flex flex-wrap gap-2">
          {selectedCompanies.map((company) => (
            <Badge
              key={company}
              className="flex items-center gap-1 bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 hover:bg-blue-500/20 dark:hover:bg-blue-500/30"
            >
              <Building className="h-3 w-3 mr-1" />
              {company}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => toggleCompany(company)}
                aria-label={`Remover filtro ${company}`}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}

          {selectedTechs.map((tech) => (
            <Badge key={tech} variant="secondary" className="flex items-center gap-1">
              <Code className="h-3 w-3 mr-1" />
              {tech}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => toggleTech(tech)}
                aria-label={`Remover filtro ${tech}`}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}

          {selectedSkills.map((skill) => (
            <Badge key={skill} variant="outline" className="flex items-center gap-1">
              <Briefcase className="h-3 w-3 mr-1" />
              {skill}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => toggleSkill(skill)}
                aria-label={`Remover filtro ${skill}`}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
      )}

      <div className="text-sm text-muted-foreground mb-2">
        {filteredProjects.length} {filteredProjects.length === 1 ? "projeto encontrado" : "projetos encontrados"}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 border rounded-lg">
          <h3 className="text-xl font-medium mb-2">Nenhum projeto encontrado</h3>
          <p className="text-muted-foreground">
            Tente ajustar sua busca ou filtros para encontrar o que está procurando.
          </p>
          <Button variant="outline" onClick={clearFilters} className="mt-4">
            Limpar Filtros
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="flex items-center">
                  <Building className="h-3 w-3 mr-1 inline" /> {project.company}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-sm text-muted-foreground mb-2">
                  <span className="font-medium">Período:</span> {project.period.start} – {project.period.end}
                  {project.period.additional && (
                    <div className="mt-1 text-xs">
                      <span className="font-medium">{project.period.additional.label}:</span>{" "}
                      {project.period.additional.start} – {project.period.additional.end}
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <Badge key={tech} variant="secondary" className="cursor-pointer" onClick={() => toggleTech(tech)}>
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 5 && (
                    <Badge variant="outline">+{project.technologies.length - 5}</Badge>
                  )}
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
      )}
    </div>
  )
}
