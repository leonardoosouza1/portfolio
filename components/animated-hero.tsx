"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MousePointer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function AnimatedHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return

    const rect = heroRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={heroRef} onMouseMove={handleMouseMove}>
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, var(--primary) 0%, transparent 60%)`,
          transition: "background 0.3s ease",
        }}
      />

      {/* Scroll indicator */}
      <motion.div
        className={cn(
          "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center transition-opacity duration-500",
          isScrolled ? "opacity-0" : "opacity-100",
        )}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
        <MousePointer className="h-5 w-5 text-primary animate-bounce" />
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Leonardo Souza</h1>
            <h2 className="text-2xl text-muted-foreground mb-6">Full Stack Developer</h2>
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Experienced developer specializing in building scalable and high-performance applications. With over 5 years
            of expertise in both frontend and backend development, I create robust solutions using modern technologies.
          </motion.p>

          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button asChild className="relative overflow-hidden group">
                <Link href="#contact">
                  <span className="relative z-10">Contact Me</span>
                  <span className="absolute inset-0 bg-primary-foreground opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button variant="outline" asChild className="relative overflow-hidden group">
                <Link href="#project-timeline">
                  <span className="relative z-10">View Timeline</span>
                  <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex mt-6 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
            <Link href="mailto:leonardo.souza@example.com">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <motion.div
            className="relative h-72 w-72 md:h-80 md:w-80 overflow-hidden rounded-full border-4 border-primary dark:border-primary/80 transition-colors duration-300"
            variants={imageVariants}
            whileHover="hover"
            style={{
              boxShadow: "0 0 40px rgba(var(--primary), 0.2)",
            }}
          >
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="Leonardo Souza"
              width={320}
              height={320}
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
