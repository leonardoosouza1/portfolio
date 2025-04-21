"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  // Check if we're on a specific page or the home page
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Handle clicking on navigation items
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // Only use preventDefault and manual scrolling on the home page
    if (isHomePage && id.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
      }
    } else {
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Leonardo Souza</span>
        </Link>

        <nav className="hidden md:flex md:items-center md:space-x-6">
          {/* Home link always visible */}
          <Link
            href="/"
            className={`text-sm font-medium flex items-center hover:text-primary transition-colors ${!isHomePage ? "text-primary" : "text-muted-foreground"}`}
            onClick={(e) => handleNavClick(e, "/")}
          >
            <Home className="mr-1 h-4 w-4" />
            Home
          </Link>

          {/* Section links work as anchor links on home page, or navigate to home page with anchor on other pages */}
          <Link
            href={isHomePage ? "#about" : "/#about"}
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavClick(e, "#about")}
          >
            About
          </Link>
          <Link
            href={isHomePage ? "#experience" : "/#experience"}
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavClick(e, "#experience")}
          >
            Experience
          </Link>
          <Link
            href={isHomePage ? "#education" : "/#education"}
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavClick(e, "#education")}
          >
            Education
          </Link>
          <Link
            href={isHomePage ? "#skills" : "/#skills"}
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavClick(e, "#skills")}
          >
            Skills
          </Link>
          <Link
            href={isHomePage ? "#projects" : "/#projects"}
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavClick(e, "#projects")}
          >
            Projects
          </Link>
          <Link
            href="/projects"
            className={`text-sm font-medium hover:text-primary transition-colors ${pathname?.startsWith("/projects") ? "text-primary" : ""}`}
            onClick={(e) => handleNavClick(e, "/projects")}
          >
            Project Explorer
          </Link>
          <Link
            href={isHomePage ? "#contact" : "/#contact"}
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <ModeToggle />
          <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
          <nav className="container flex flex-col space-y-4 p-4">
            {/* Home link for mobile */}
            <Link
              href="/"
              className={`py-2 text-lg font-medium flex items-center hover:text-primary ${!isHomePage ? "text-primary" : ""}`}
              onClick={(e) => handleNavClick(e, "/")}
            >
              <Home className="mr-2 h-5 w-5" />
              Home
            </Link>

            <Link
              href={isHomePage ? "#about" : "/#about"}
              className="py-2 text-lg font-medium hover:text-primary"
              onClick={(e) => handleNavClick(e, "#about")}
            >
              About
            </Link>
            <Link
              href={isHomePage ? "#experience" : "/#experience"}
              className="py-2 text-lg font-medium hover:text-primary"
              onClick={(e) => handleNavClick(e, "#experience")}
            >
              Experience
            </Link>
            <Link
              href={isHomePage ? "#education" : "/#education"}
              className="py-2 text-lg font-medium hover:text-primary"
              onClick={(e) => handleNavClick(e, "#education")}
            >
              Education
            </Link>
            <Link
              href={isHomePage ? "#skills" : "/#skills"}
              className="py-2 text-lg font-medium hover:text-primary"
              onClick={(e) => handleNavClick(e, "#skills")}
            >
              Skills
            </Link>
            <Link
              href={isHomePage ? "#projects" : "/#projects"}
              className="py-2 text-lg font-medium hover:text-primary"
              onClick={(e) => handleNavClick(e, "#projects")}
            >
              Projects
            </Link>
            <Link
              href="/projects"
              className={`py-2 text-lg font-medium hover:text-primary ${pathname?.startsWith("/projects") ? "text-primary" : ""}`}
              onClick={(e) => handleNavClick(e, "/projects")}
            >
              Project Explorer
            </Link>
            <Link
              href={isHomePage ? "#contact" : "/#contact"}
              className="py-2 text-lg font-medium hover:text-primary"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Contact
            </Link>
            <div className="py-2">
              <ModeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
