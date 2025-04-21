"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Project = {
  id: number
  title: string
  description: string
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
]

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col transition-colors duration-300 hover:shadow-md dark:hover:shadow-primary/5">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">View Details</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>{project.longDescription}</DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <h4 className="font-medium mb-2">Key Features:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {project.features.map((feature, index) => (
                            <li key={index} className="text-muted-foreground">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-4 mt-6">
                        <Button asChild>
                          <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </Link>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
