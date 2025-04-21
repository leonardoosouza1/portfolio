"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/simplified-header"
import { SimplifiedFooter } from "@/components/simplified-footer"
import { ProjectDetail } from "@/components/project-detail"
import { getProjectById, type DetailedProject } from "@/lib/projects-data"

export default function ProjectDetailPage() {
  const params = useParams()
  const [project, setProject] = useState<DetailedProject | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const projectId = Number(params.id)
      const foundProject = getProjectById(projectId)

      if (foundProject) {
        setProject(foundProject)
      }

      setLoading(false)
    }
  }, [params.id])

  if (loading) {
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          <div className="flex justify-center">
            <div className="animate-pulse">Carregando detalhes do projeto...</div>
          </div>
        </main>
        <SimplifiedFooter />
      </>
    )
  }

  if (!project) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="mb-8">
          <Link href="/projects" className="inline-flex items-center hover:text-primary transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Projetos
          </Link>
        </div>

        <ProjectDetail project={project} />
      </main>
      <SimplifiedFooter />
    </>
  )
}
