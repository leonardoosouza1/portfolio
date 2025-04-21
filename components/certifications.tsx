"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"

type Certification = {
  id: number
  title: string
  issuer: string
  date: string
  description: string
  url: string
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Back-End Programming with Node.js",
    issuer: "Udemy",
    date: "2022",
    description: "Advanced course covering Express, NestJS, and API development",
    url: "#",
  },
  {
    id: 2,
    title: "Introduction to DevOps",
    issuer: "Coursera",
    date: "2021",
    description: "Fundamentals of DevOps practices and tooling",
    url: "#",
  },
  {
    id: 3,
    title: "Docker Essentials",
    issuer: "LinkedIn Learning",
    date: "2021",
    description: "Containerization with Docker for application deployment",
    url: "#",
  },
  {
    id: 4,
    title: "Continuous Integration with GitHub Actions",
    issuer: "GitHub Learning Lab",
    date: "2020",
    description: "Setting up and optimizing CI/CD workflows with GitHub Actions",
    url: "#",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Certifications & Courses</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                  <Award className="h-6 w-6 mt-1 text-primary" />
                  <div>
                    <CardTitle>{cert.title}</CardTitle>
                    <CardDescription>
                      {cert.issuer} • {cert.date}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={cert.url}
                    className="text-sm text-primary flex items-center hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
