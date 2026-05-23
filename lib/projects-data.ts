// Project data now lives in the i18n dictionaries (locales/{pt,en}/projects.json)
// so it can be translated. This module keeps the shared type and pure helpers
// that operate on a localized list of projects.

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

/** All unique technologies across the given projects, sorted. */
export function getAllProjectTechnologies(projects: DetailedProject[]): string[] {
  const all = projects.flatMap((project) => project.technologies)
  return Array.from(new Set(all)).sort()
}

/** All unique skills across the given projects, sorted. */
export function getAllProjectSkills(projects: DetailedProject[]): string[] {
  const all = projects.flatMap((project) => project.skills)
  return Array.from(new Set(all)).sort()
}

/** Find a project by id within the given list. */
export function getProjectById(projects: DetailedProject[], id: number): DetailedProject | undefined {
  return projects.find((project) => project.id === id)
}
