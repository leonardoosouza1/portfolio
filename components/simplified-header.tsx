"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Code } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-5xl mx-auto flex h-16 items-center justify-between px-4">

        <nav className="hidden md:flex md:items-center md:space-x-6">
          <button
            onClick={() => handleNavClick("#about")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => handleNavClick("#experience")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Experiência
          </button>
          <button
            onClick={() => handleNavClick("#skills")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Habilidades
          </button>
          <button
            onClick={() => handleNavClick("#projects")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Projetos
          </button>
          <button
            onClick={() => handleNavClick("#contact")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contato
          </button>
        </nav>

        <div className="flex items-center space-x-2">
          <ModeToggle />
          <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
          <nav className="container flex flex-col space-y-4 p-4 bg-background">
            <button onClick={() => handleNavClick("#about")} className="py-2 text-lg font-medium hover:text-primary">
              Sobre
            </button>
            <button
              onClick={() => handleNavClick("#experience")}
              className="py-2 text-lg font-medium hover:text-primary"
            >
              Experiência
            </button>
            <button onClick={() => handleNavClick("#skills")} className="py-2 text-lg font-medium hover:text-primary">
              Habilidades
            </button>
            <button onClick={() => handleNavClick("#projects")} className="py-2 text-lg font-medium hover:text-primary">
              Projetos
            </button>
            <button onClick={() => handleNavClick("#contact")} className="py-2 text-lg font-medium hover:text-primary">
              Contato
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
