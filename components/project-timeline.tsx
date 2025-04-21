"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, ExternalLink, Github, ChevronRight, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Project = {
  id: number
  title: string
  description: string
  date: string
  image: string
  technologies: string[]
  demoUrl: string
  repoUrl: string
  longDescription: string
  features: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with cart, checkout, and payment integration",
    date: "2023",
    image: "/placeholder.svg?height=450&width=800",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Stripe"],
    demoUrl: "#",
    repoUrl: "#",
    longDescription:
      "A comprehensive e-commerce solution built with Next.js and NestJS. The platform includes user authentication, product management, shopping cart, checkout process, and payment integration with Stripe.",
    features: [
      "User authentication and profile management",
      "Product catalog with filtering and search",
      "Shopping cart and wishlist functionality",
      "Secure checkout process with Stripe integration",
      "Order tracking and history",
      "Admin dashboard for inventory management",
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application for teams",
    date: "2022",
    image: "/placeholder.svg?height=450&width=800",
    technologies: ["React", "Express", "MongoDB", "Socket.io", "Docker"],
    demoUrl: "#",
    repoUrl: "#",
    longDescription:
      "A real-time collaborative task management application built for teams. The application allows users to create, assign, and track tasks in real-time, with notifications and deadline reminders.",
    features: [
      "Real-time updates using Socket.io",
      "Task creation, assignment, and tracking",
      "Project organization and team management",
      "Deadline reminders and notifications",
      "Activity logs and reporting",
      "Docker containerization for easy deployment",
    ],
  },
  {
    id: 3,
    title: "Fitness Tracking Mobile App",
    description: "A cross-platform mobile app for tracking workouts and nutrition",
    date: "2022",
    image: "/placeholder.svg?height=450&width=800",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    demoUrl: "#",
    repoUrl: "#",
    longDescription:
      "A comprehensive fitness tracking application built with React Native. The app allows users to track workouts, set goals, monitor nutrition, and view progress over time with detailed analytics.",
    features: [
      "Workout tracking and exercise library",
      "Nutrition logging and meal planning",
      "Goal setting and progress tracking",
      "Detailed analytics and reports",
      "Social sharing and community features",
      "Offline functionality with local data storage",
    ],
  },
  {
    id: 4,
    title: "Real Estate Listing Platform",
    description: "A platform for listing and finding properties with interactive maps",
    date: "2021",
    image: "/placeholder.svg?height=450&width=800",
    technologies: ["React", "Django", "PostgreSQL", "Mapbox", "AWS"],
    demoUrl: "#",
    repoUrl: "#",
    longDescription:
      "A comprehensive real estate platform that allows users to list properties, search with advanced filters, view properties on interactive maps, and schedule viewings. The platform includes features for both buyers and sellers.",
    features: [
      "Property listing with detailed information and photos",
      "Advanced search with filters (price, location, amenities)",
      "Interactive maps with property markers",
      "Virtual tours and image galleries",
      "Contact forms and messaging system",
      "User dashboard for managing listings and favorites",
    ],
  },
  {
    id: 5,
    title: "AI-Powered Content Generator",
    description: "A tool that uses AI to generate marketing content and social media posts",
    date: "2021",
    image: "/placeholder.svg?height=450&width=800",
    technologies: ["Python", "Flask", "OpenAI API", "React", "MongoDB"],
    demoUrl: "#",
    repoUrl: "#",
    longDescription:
      "An AI-powered content generation tool that helps marketers create engaging content for various platforms. The application uses OpenAI's GPT models to generate content based on user prompts and preferences.",
    features: [
      "AI-powered content generation",
      "Content templates for different platforms",
      "Content scheduling and publishing",
      "Analytics and performance tracking",
      "Team collaboration features",
      "Content library and organization",
    ],
  },
  {
    id: 6,
    title: "Blockchain Voting System",
    description: "A secure voting system built on blockchain technology",
    date: "2020",
    image: "/placeholder.svg?height=450&width=800",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
    demoUrl: "#",
    repoUrl: "#",
    longDescription:
      "A secure and transparent voting system built on the Ethereum blockchain. The system ensures vote integrity, prevents double-voting, and provides a transparent audit trail of all voting activities.",
    features: [
      "Secure voter authentication",
      "Immutable vote recording on blockchain",
      "Real-time vote counting and results",
      "Transparent audit trail",
      "Admin dashboard for election management",
      "Mobile-friendly voting interface",
    ],
  },
]

export function ProjectTimeline() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [selectedTech, setSelectedTech] = useState<string[]>([])
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  // Get all unique technologies
  const allTechnologies = Array.from(new Set(projects.flatMap((project) => project.technologies))).sort()

  // Filter projects based on selected technologies
  const filteredProjects =
    selectedTech.length > 0
      ? projects.filter((project) => selectedTech.some((tech) => project.technologies.includes(tech)))
      : projects

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const toggleTech = (tech: string) => {
    setSelectedTech((prev) => (prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]))
  }

  return (
    <section id="project-timeline" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-center">Project Timeline</h2>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter by Technology
                {selectedTech.length > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {selectedTech.length}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {allTechnologies.map((tech) => (
                <DropdownMenuCheckboxItem
                  key={tech}
                  checked={selectedTech.includes(tech)}
                  onCheckedChange={() => toggleTech(tech)}
                >
                  {tech}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border transform md:-translate-x-1/2" />

          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-[50%] pl-10 md:pl-0" : "md:pl-[50%] pl-10"
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center transform md:-translate-x-1/2 z-10"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Calendar className="h-4 w-4 text-primary-foreground" />
              </motion.div>

              {/* Date badge */}
              <div
                className={`absolute top-0 hidden md:block ${
                  index % 2 === 0 ? "left-[calc(50%+20px)]" : "right-[calc(50%+20px)]"
                }`}
              >
                <Badge variant="outline" className="text-sm">
                  {project.date}
                </Badge>
              </div>

              {/* Mobile date badge */}
              <div className="absolute top-0 left-10 md:hidden">
                <Badge variant="outline" className="text-sm">
                  {project.date}
                </Badge>
              </div>

              {/* Project card */}
              <motion.div
                className={`mt-8 md:mt-0 ${index % 2 === 0 ? "md:text-right" : ""}`}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <Card
                  className={`overflow-hidden transition-all duration-300 ${
                    hoveredId === project.id ? "shadow-lg dark:shadow-primary/10" : ""
                  }`}
                >
                  <CardHeader className="pb-2">
                    <div className={`flex ${index % 2 === 0 ? "md:justify-end" : "justify-between"} items-start`}>
                      <div className={`${index % 2 === 0 ? "md:order-2" : ""}`}>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription className="md:hidden">{project.date}</CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleExpand(project.id)}
                        aria-expanded={expandedId === project.id}
                        aria-label={expandedId === project.id ? "Collapse details" : "Expand details"}
                        className={`${index % 2 === 0 ? "md:order-1 md:mr-2" : "ml-auto"}`}
                      >
                        <ChevronRight
                          className={`h-5 w-5 transition-transform ${expandedId === project.id ? "rotate-90" : ""}`}
                        />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.description}</p>

                    <div className={`flex flex-wrap gap-2 mt-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant={selectedTech.includes(tech) ? "default" : "secondary"}
                          className="transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <AnimatePresence>
                      {expandedId === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4"
                        >
                          <div className="relative aspect-video overflow-hidden rounded-md mb-4">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              width={800}
                              height={450}
                              className="object-cover transition-transform hover:scale-105"
                            />
                          </div>

                          <h4 className={`font-medium mb-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                            Key Features:
                          </h4>
                          <ul
                            className={`list-disc ${
                              index % 2 === 0 ? "md:ml-auto md:pl-0 md:pr-5 pl-5" : "pl-5"
                            } space-y-1`}
                          >
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="text-muted-foreground">
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>

                  {expandedId === project.id && (
                    <CardFooter className={`flex ${index % 2 === 0 ? "md:justify-end" : "justify-between"} pt-0`}>
                      <div className="flex gap-2">
                        <Button size="sm" asChild>
                          <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </Link>
                        </Button>
                      </div>
                    </CardFooter>
                  )}
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
