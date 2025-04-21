import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/simplified-header"
import { SimplifiedFooter } from "@/components/simplified-footer"
import { FilteredProjectsList } from "@/components/filtered-projects-list"

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center hover:text-primary transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">Projetos</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Conheça os principais projetos que desenvolvi ao longo da minha carreira.
        </p>

        <FilteredProjectsList />
      </main>
      <SimplifiedFooter />
    </>
  )
}
