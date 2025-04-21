"use client"

import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="about" className="py-20">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Leonardo Souza</h1>
          <h2 className="text-2xl text-muted-foreground mb-6">Full Stack Developer</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Experienced developer specializing in building scalable and high-performance applications. With over 5 years
            of expertise in both frontend and backend development, I create robust solutions using modern technologies.
          </p>
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
          <div className="flex mt-6 space-x-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative h-72 w-72 md:h-80 md:w-80 overflow-hidden rounded-full border-4 border-primary dark:border-primary/80 transition-colors duration-300">
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="Leonardo Souza"
              width={320}
              height={320}
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
