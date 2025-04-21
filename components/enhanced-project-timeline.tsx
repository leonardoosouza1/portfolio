"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ChevronRight, Filter, Briefcase, Code, X, Search, Award, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { timelineProjects, getAllTimelineTechnologies, getAllCompanies, getAllRoles } from "@/lib/timeline-data"

export function EnhancedProjectTimeline() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [selectedTechs, setSelectedTechs] = useState<string[]>([])
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([])
  const [selectedRoles, setSelectedRoles] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<string>("all")

  // Get all unique values for filters
  const allTechnologies = getAllTimelineTechnologies()
  const allCompanies = getAllCompanies()
  const allRoles = getAllRoles()

  // Filter projects based on selected filters and search term
  const filteredProjects = timelineProjects
    .filter((project) => {
      // Filter by search term
      if (searchTerm) {
        const term = searchTerm.toLowerCase()
        return (
          project.title.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term) ||
          project.company.toLowerCase().includes(term) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(term))
        )
      }
      return true
    })
    .filter((project) => {
      // Filter by selected technologies
      if (selectedTechs.length > 0) {
        return selectedTechs.some((tech) => project.technologies.includes(tech))
      }
      return true
    })
    .filter((project) => {
      // Filter by selected companies
      if (selectedCompanies.length > 0) {
        return selectedCompanies.includes(project.company)
      }
      return true
    })
    .filter((project) => {
      // Filter by selected roles
      if (selectedRoles.length > 0) {
        return selectedRoles.includes(project.role)
      }
      return true
    })
    .filter((project) => {
      // Filter by category
      if (selectedCategory === "professional") {
        return project.category === "professional"
      } else if (selectedCategory === "freelance") {
        return project.category === "freelance"
      }
      return true
    })
    // Sort by date (most recent first)
    .sort((a, b) => {
      // Extract the end year from the period
      const getEndYear = (period: string) => {
        if (period.includes("Present")) return 9999 // Present is always the most recent
        const match = period.match(/\d{4}$/) // Match year at the end
        if (match) return Number.parseInt(match[0])
        const match2 = period.match(/\d{2}\/(\d{4})/) // Match MM/YYYY format
        if (match2) return Number.parseInt(match2[1])
        return 0
      }

      return getEndYear(b.period) - getEndYear(a.period)
    })

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) => (prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]))
  }

  const toggleCompany = (company: string) => {
    setSelectedCompanies((prev) => (prev.includes(company) ? prev.filter((c) => c !== company) : [...prev, company]))
  }

  const toggleRole = (role: string) => {
    setSelectedRoles((prev) => (prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]))
  }

  const clearFilters = () => {
    setSelectedTechs([])
    setSelectedCompanies([])
    setSelectedRoles([])
    setSelectedCategory(null)
    setSearchTerm("")
    setActiveTab("all")
  }

  // Handle tab changes
  useEffect(() => {
    if (activeTab === "all") {
      setSelectedCategory(null)
    } else if (activeTab === "professional") {
      setSelectedCategory("professional")
    } else if (activeTab === "freelance") {
      setSelectedCategory("freelance")
    }
  }, [activeTab])

  return (
    <section id="project-timeline" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold">Project Timeline</h2>
            <p className="text-muted-foreground mt-2">
              A chronological history of my professional projects and freelance work
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                  {(selectedTechs.length > 0 || selectedCompanies.length > 0 || selectedRoles.length > 0) && (
                    <Badge variant="secondary" className="ml-2">
                      {selectedTechs.length + selectedCompanies.length + selectedRoles.length}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 max-h-[70vh] overflow-y-auto">
                <DropdownMenuLabel>Filter Projects</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuLabel className="flex items-center">
                  <Code className="h-4 w-4 mr-2" />
                  Technologies
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
                  <Building2 className="h-4 w-4 mr-2" />
                  Companies
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
                  <Briefcase className="h-4 w-4 mr-2" />
                  Roles
                </DropdownMenuLabel>
                {allRoles.map((role) => (
                  <DropdownMenuCheckboxItem
                    key={role}
                    checked={selectedRoles.includes(role)}
                    onCheckedChange={() => toggleRole(role)}
                  >
                    {role}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {(searchTerm ||
              selectedTechs.length > 0 ||
              selectedCompanies.length > 0 ||
              selectedRoles.length > 0 ||
              selectedCategory) && (
              <Button variant="ghost" onClick={clearFilters} aria-label="Clear filters">
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Active filters display */}
        {(selectedTechs.length > 0 || selectedCompanies.length > 0 || selectedRoles.length > 0) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedTechs.map((tech) => (
              <Badge key={tech} variant="outline" className="flex items-center gap-1">
                <Code className="h-3 w-3 mr-1" />
                {tech}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4 p-0 ml-1"
                  onClick={() => toggleTech(tech)}
                  aria-label={`Remove ${tech} filter`}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}

            {selectedCompanies.map((company) => (
              <Badge key={company} variant="outline" className="flex items-center gap-1">
                <Building2 className="h-3 w-3 mr-1" />
                {company}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4 p-0 ml-1"
                  onClick={() => toggleCompany(company)}
                  aria-label={`Remove ${company} filter`}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}

            {selectedRoles.map((role) => (
              <Badge key={role} variant="outline" className="flex items-center gap-1">
                <Briefcase className="h-3 w-3 mr-1" />
                {role}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4 p-0 ml-1"
                  onClick={() => toggleRole(role)}
                  aria-label={`Remove ${role} filter`}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
        )}

        {/* Category tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="professional">Professional</TabsTrigger>
            <TabsTrigger value="freelance">Freelance</TabsTrigger>
          </TabsList>
        </Tabs>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 border rounded-lg">
            <h3 className="text-xl font-medium mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <Button variant="outline" onClick={clearFilters} className="mt-4">
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border transform md:-translate-x-1/2" />

            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-[50%] pl-10 md:pl-0" : "md:pl-[50%] pl-10"
                }`}
              >
                {/* Timeline dot - different colors for professional vs freelance */}
                <motion.div
                  className={`absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 ${
                    project.category === "professional" ? "bg-primary" : "bg-amber-500"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {project.category === "professional" ? (
                    <Briefcase className="h-4 w-4 text-primary-foreground" />
                  ) : (
                    <Award className="h-4 w-4 text-primary-foreground" />
                  )}
                </motion.div>

                {/* Date badge */}
                <div
                  className={`absolute top-0 hidden md:block ${
                    index % 2 === 0 ? "left-[calc(50%+20px)]" : "right-[calc(50%+20px)]"
                  }`}
                >
                  <Badge variant="outline" className="text-sm">
                    {project.period}
                  </Badge>
                </div>

                {/* Mobile date badge */}
                <div className="absolute top-0 left-10 md:hidden">
                  <Badge variant="outline" className="text-sm">
                    {project.period}
                  </Badge>
                </div>

                {/* Company badge */}
                <div className="absolute top-8 left-10 md:hidden">
                  <Badge variant="secondary" className="text-sm">
                    {project.company}
                  </Badge>
                </div>

                {/* Project card */}
                <motion.div
                  className={`mt-8 md:mt-0 ${index % 2 === 0 ? "md:text-right" : ""}`}
                  whileHover={{ y: -5 }}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                >
                  <Card
                    className={`overflow-hidden transition-all duration-300 ${
                      hoveredId === project.id ? "shadow-lg dark:shadow-primary/10" : ""
                    } ${project.category === "freelance" ? "border-amber-500/30" : ""}`}
                  >
                    <CardHeader className="pb-2">
                      <div className={`flex ${index % 2 === 0 ? "md:justify-end" : "justify-between"} items-start`}>
                        <div className={`${index % 2 === 0 ? "md:order-2" : ""}`}>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription className="md:hidden">{project.period}</CardDescription>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="hidden md:inline-flex">
                              {project.company}
                            </Badge>
                            <Badge variant="outline">{project.role}</Badge>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleExpand(project.id)}
                          aria-expanded={expandedId === project.id}
                          aria-label={expandedId === project.id ? "Collapse details" : "Expand details"}
                          className={`${index % 2 === 0 ? "md:order-1 md:mr-2" : "ml-auto"}`}
                        >
                          <ChevronRight
                            className={`h-5 w-5 transition-transform ${expandedId === project.id ? "rotate-90" : ""}`}
                          />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{project.description}</p>

                      <div className={`flex flex-wrap gap-2 mt-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant={selectedTechs.includes(tech) ? "default" : "secondary"}
                            className="transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                        )}
                      </div>

                      <AnimatePresence>
                        {expandedId === project.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4"
                          >
                            {project.image && (
                              <div className="relative aspect-video overflow-hidden rounded-md mb-4">
                                <Image
                                  src={project.image || "/placeholder.svg"}
                                  alt={project.title}
                                  width={800}
                                  height={450}
                                  className="object-cover transition-transform hover:scale-105"
                                />
                              </div>
                            )}

                            <div className="space-y-4">
                              <div>
                                <h4 className={`font-medium mb-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                                  Technologies Used:
                                </h4>
                                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                  {project.technologies.map((tech) => (
                                    <Badge
                                      key={tech}
                                      variant={selectedTechs.includes(tech) ? "default" : "secondary"}
                                      className="transition-colors duration-300"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className={`font-medium mb-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                                  Key Achievements:
                                </h4>
                                <ul
                                  className={`list-disc ${
                                    index % 2 === 0 ? "md:ml-auto md:pl-0 md:pr-5 pl-5" : "pl-5"
                                  } space-y-1`}
                                >
                                  {project.achievements.map((achievement, idx) => (
                                    <li key={idx} className="text-muted-foreground">
                                      {achievement}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>

                    {expandedId === project.id && project.demoUrl && project.repoUrl && (
                      <CardFooter className={`flex ${index % 2 === 0 ? "md:justify-end" : "justify-between"} pt-0`}>
                        <div className="flex gap-2">
                          <Button size="sm" asChild>
                            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </Link>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              View Code
                            </Link>
                          </Button>
                        </div>
                      </CardFooter>
                    )}
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  )
}
