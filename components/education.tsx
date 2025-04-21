"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <Card>
          <CardHeader className="flex flex-row items-start space-x-4 pb-2">
            <GraduationCap className="h-6 w-6 mt-1" />
            <div>
              <CardTitle>Bachelor's Degree in Systems Analysis and Development</CardTitle>
              <CardDescription>Estácio de Sá • 2019 - 2022</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Comprehensive education in software development methodologies, database management, and systems analysis.
              Graduated with honors, focusing on web development and distributed systems.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
