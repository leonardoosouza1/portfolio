"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { useI18n } from "@/lib/i18n/provider"
import { LANGS, type Lang } from "@/lib/i18n/dictionaries"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { lang, setLang, dict } = useI18n()
  const nav = dict.common.nav
  const menu = dict.common.menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(id)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  const links: { id: string; label: string }[] = [
    { id: "#about", label: nav.about },
    { id: "#experience", label: nav.experience },
    { id: "#skills", label: nav.skills },
    { id: "#projects", label: nav.projects },
    { id: "#contact", label: nav.contact },
  ]

  const LangSwitch = () => (
    <div className="flex items-center rounded-md border text-xs font-medium" role="group" aria-label={dict.common.language.label}>
      {LANGS.map((l: Lang) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2 py-1 uppercase transition-colors ${
            lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"
          } ${l === "pt" ? "rounded-l-md" : "rounded-r-md"}`}
        >
          {l}
        </button>
      ))}
    </div>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-5xl mx-auto flex h-16 items-center justify-between px-4">
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <LangSwitch />
          <ModeToggle />
          <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? menu.close : menu.open}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
          <nav className="container flex flex-col space-y-4 p-4 bg-background">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="py-2 text-lg font-medium hover:text-primary"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
