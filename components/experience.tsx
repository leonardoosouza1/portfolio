"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Experience = {
  id: number
  role: string
  company: string
  period: string
  description: string
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Mid level Full Stack Developer",
    company: "Plathanus",
    period: "2021 - Present",
    description: "Leading development of enterprise-level web applications",
    responsibilities: [
      "Architected and implemented scalable solutions using React, Django and Node.js",
      "Implemented CI/CD pipelines using GitHub Actions",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Adapt Soluções EAD.",
    period: "2020 - 2021",
    description: "Developed and maintained web applications for clients",
    responsibilities: [
      "Built responsive web applications using React",
      "Collaborated with design teams to create intuitive user interfaces",
    ],
  },
]

export function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(1)

  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null)
    } else {
      setExpandedId(id)
    }
  }

  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <Card key={exp.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{exp.role}</CardTitle>
                    <CardDescription>
                      {exp.company} • {exp.period}
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleExpand(exp.id)}
                    aria-expanded={expandedId === exp.id}
                    aria-label={expandedId === exp.id ? "Collapse details" : "Expand details"}
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${expandedId === exp.id ? "rotate-180" : ""}`}
                    />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>

                {expandedId === exp.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.responsibilities.map((item, index) => (
                        <li key={index} className="text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
