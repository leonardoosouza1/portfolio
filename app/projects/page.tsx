"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/simplified-header"
import { SimplifiedFooter } from "@/components/simplified-footer"
import { FilteredProjectsList } from "@/components/filtered-projects-list"
import { useI18n } from "@/lib/i18n/provider"

export default function ProjectsPage() {
  const { dict } = useI18n()
  const t = dict.common.projectsPage

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center hover:text-primary transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.backHome}
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
        <p className="text-lg text-muted-foreground mb-8">{t.subtitle}</p>

        <FilteredProjectsList />
      </main>
      <SimplifiedFooter />
    </>
  )
}
