"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Skill = {
  name: string
  level: number
  icon: string
  description: string
  projects: string[]
}

const skills: Skill[] = [
  {
    name: "React",
    level: 95,
    icon: "⚛️",
    description:
      "Building interactive UIs with React and its ecosystem including hooks, context, and state management libraries.",
    projects: ["E-commerce Platform", "Task Management App", "Real Estate Listing Platform"],
  },
  {
    name: "Next.js",
    level: 90,
    icon: "▲",
    description:
      "Creating server-rendered React applications with Next.js, leveraging its routing, API routes, and SSR/SSG capabilities.",
    projects: ["E-commerce Platform", "Portfolio Website", "Company Dashboard"],
  },
  {
    name: "TypeScript",
    level: 88,
    icon: "TS",
    description: "Writing type-safe JavaScript code to improve developer experience and reduce runtime errors.",
    projects: ["Fitness Tracking Mobile App", "E-commerce Platform", "Task Management App"],
  },
  {
    name: "Node.js",
    level: 85,
    icon: "🟢",
    description: "Building scalable backend services and APIs with Node.js and Express.",
    projects: ["E-commerce Platform", "Task Management App", "AI-Powered Content Generator"],
  },
  {
    name: "GraphQL",
    level: 80,
    icon: "◈",
    description: "Designing and implementing GraphQL APIs for efficient data fetching and manipulation.",
    projects: ["E-commerce Platform", "Task Management App", "Social Media Dashboard"],
  },
  {
    name: "PostgreSQL",
    level: 85,
    icon: "🐘",
    description: "Designing and optimizing relational databases for various applications.",
    projects: ["E-commerce Platform", "Real Estate Listing Platform", "Company Dashboard"],
  },
]

export function InteractiveSkills() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    // Atualiza a posição do mouse em relação à janela
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section id="interactive-skills" className="py-16 relative" onMouseMove={handleMouseMove} ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Interactive Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onMouseEnter={() => setActiveSkill(skill)}
              onMouseLeave={() => setActiveSkill(null)}
              className="cursor-pointer"
            >
              <Card
                className={`h-full transition-all duration-300 ${
                  activeSkill?.name === skill.name ? "border-primary shadow-lg" : ""
                }`}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{skill.icon}</span>
                    {skill.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden dark:bg-muted/40">
                      <motion.div
                        className="h-full bg-primary dark:bg-primary/90"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floating info card */}
        <AnimatedTooltip activeSkill={activeSkill} mousePosition={mousePosition} />
      </motion.div>
    </section>
  )
}

function AnimatedTooltip({
  activeSkill,
  mousePosition,
}: {
  activeSkill: Skill | null
  mousePosition: { x: number; y: number }
}) {
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ left: 0, top: 0 })
  const [tooltipSize, setTooltipSize] = useState({ width: 0, height: 0 })

  // Atualiza as dimensões do tooltip quando ele é renderizado ou redimensionado
  useEffect(() => {
    if (!tooltipRef.current || !activeSkill) return

    const updateTooltipSize = () => {
      if (tooltipRef.current) {
        const rect = tooltipRef.current.getBoundingClientRect()
        setTooltipSize({
          width: rect.width,
          height: rect.height,
        })
      }
    }

    // Atualiza imediatamente e depois de um pequeno delay para garantir que o conteúdo foi renderizado
    updateTooltipSize()
    const timeoutId = setTimeout(updateTooltipSize, 50)

    // Adiciona listener para redimensionamento da janela
    window.addEventListener("resize", updateTooltipSize)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("resize", updateTooltipSize)
    }
  }, [activeSkill])

  // Calcula a posição ideal para o tooltip sempre que o mouse ou o tamanho do tooltip mudar
  useEffect(() => {
    if (!activeSkill || tooltipSize.width === 0) return

    // Margem de segurança para as bordas da tela
    const margin = 20

    // Posição inicial (offset do cursor)
    let left = mousePosition.x + 15
    let top = mousePosition.y + 15

    // Ajusta horizontalmente se necessário
    if (left + tooltipSize.width > window.innerWidth - margin) {
      left = mousePosition.x - tooltipSize.width - 15
    }

    // Se ainda estiver fora da tela à esquerda, centraliza horizontalmente
    if (left < margin) {
      left = Math.max(
        margin,
        Math.min(window.innerWidth - tooltipSize.width - margin, mousePosition.x - tooltipSize.width / 2),
      )
    }

    // Ajusta verticalmente se necessário
    if (top + tooltipSize.height > window.innerHeight - margin) {
      top = mousePosition.y - tooltipSize.height - 15
    }

    // Se ainda estiver fora da tela acima, centraliza verticalmente
    if (top < margin) {
      top = Math.max(
        margin,
        Math.min(window.innerHeight - tooltipSize.height - margin, mousePosition.y - tooltipSize.height / 2),
      )
    }

    setTooltipPosition({ left, top })
  }, [mousePosition, tooltipSize, activeSkill])

  if (!activeSkill) return null

  return (
    <motion.div
      ref={tooltipRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="fixed z-50 max-w-sm bg-popover text-popover-foreground rounded-lg shadow-lg border p-4"
      style={{
        left: `${tooltipPosition.left}px`,
        top: `${tooltipPosition.top}px`,
        pointerEvents: "none",
        transition: "left 0.1s ease-out, top 0.1s ease-out",
      }}
    >
      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
        <span>{activeSkill.icon}</span> {activeSkill.name}
      </h3>
      <p className="text-sm text-muted-foreground mb-3">{activeSkill.description}</p>

      <div className="space-y-1">
        <h4 className="text-sm font-medium">Projects using {activeSkill.name}:</h4>
        <ul className="text-xs text-muted-foreground space-y-1">
          {activeSkill.projects.map((project) => (
            <li key={project} className="flex items-center">
              <span className="mr-1">•</span> {project}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
