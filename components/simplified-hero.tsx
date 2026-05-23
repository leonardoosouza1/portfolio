"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/provider"

export function SimplifiedHero() {
  const { dict } = useI18n()
  const t = dict.hero

  return (
    <section id="about" className="py-16">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">{t.name}</h1>
          <h2 className="text-2xl text-muted-foreground mb-6">{t.title}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">{t.bio}</p>
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="#contact">{t.contactBtn}</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">{t.projectsBtn}</Link>
            </Button>
          </div>
          <div className="flex mt-6 space-x-4">
            <Link href="https://github.com/leonardoosouza1" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/leonardo-s-640b49114/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:leonardo.souzadev@gmail.com">
              <Button variant="ghost" size="icon" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative h-64 w-64 md:h-72 md:w-72 overflow-hidden rounded-full border-4 border-primary dark:border-primary/80">
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="Leonardo Souza"
              width={320}
              height={320}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
