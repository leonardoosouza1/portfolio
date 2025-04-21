"use client"

import type React from "react"

import { useState } from "react"
import { Search, Filter, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type ProjectSearchProps = {
  allTechnologies: string[]
  onSearchChange: (search: string) => void
  onTechFilterChange: (techs: string[]) => void
}

export function ProjectSearch({ allTechnologies, onSearchChange, onTechFilterChange }: ProjectSearchProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTechs, setSelectedTechs] = useState<string[]>([])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearchChange(value)
  }

  const toggleTech = (tech: string) => {
    const newSelectedTechs = selectedTechs.includes(tech)
      ? selectedTechs.filter((t) => t !== tech)
      : [...selectedTechs, tech]

    setSelectedTechs(newSelectedTechs)
    onTechFilterChange(newSelectedTechs)
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedTechs([])
    onSearchChange("")
    onTechFilterChange([])
  }

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search projects..." value={searchTerm} onChange={handleSearchChange} className="pl-10" />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter by Technology
                {selectedTechs.length > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {selectedTechs.length}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 max-h-[300px] overflow-y-auto">
              {allTechnologies.map((tech) => (
                <DropdownMenuCheckboxItem
                  key={tech}
                  checked={selectedTechs.includes(tech)}
                  onCheckedChange={() => toggleTech(tech)}
                >
                  {tech}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {(searchTerm || selectedTechs.length > 0) && (
            <Button variant="ghost" onClick={clearFilters} aria-label="Clear filters">
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {selectedTechs.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedTechs.map((tech) => (
            <Badge key={tech} variant="outline" className="flex items-center gap-1">
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
        </div>
      )}
    </div>
  )
}
