import { Header } from "@/components/simplified-header"
import { SimplifiedHero } from "@/components/simplified-hero"
import { SimplifiedExperience } from "@/components/simplified-experience"
import { SimplifiedSkills } from "@/components/simplified-skills"
import { SimplifiedProjects } from "@/components/simplified-projects"
import { SimplifiedContact } from "@/components/simplified-contact"
import { SimplifiedFooter } from "@/components/simplified-footer"
import { Toaster } from "@/components/toaster"

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 pb-16 max-w-5xl">
        <SimplifiedHero />
        <SimplifiedExperience />
        <SimplifiedSkills />
        <SimplifiedProjects />
        <SimplifiedContact />
      </main>
      <SimplifiedFooter />
      <Toaster />
    </>
  )
}
