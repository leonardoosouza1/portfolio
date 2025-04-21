"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe } from "lucide-react"

type Language = {
  name: string
  level: string
  proficiency: number // 0-100
}

const languages: Language[] = [
  { name: "Portuguese", level: "Native", proficiency: 100 },
  { name: "English", level: "Fluent", proficiency: 90 },
  { name: "Spanish", level: "Intermediate", proficiency: 60 },
]

export function Languages() {
  return (
    <section id="languages" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Languages</h2>
        <Card>
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            <Globe className="h-6 w-6" />
            <CardTitle>Language Proficiency</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-6">
              {languages.map((language) => (
                <div key={language.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{language.name}</span>
                    <span className="text-muted-foreground">{language.level}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden dark:bg-muted/40">
                    <motion.div
                      className="h-full bg-primary dark:bg-primary/90"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
