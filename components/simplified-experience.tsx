"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n/provider"

type Experience = {
  id: number
  role: string
  company: string
  period: string
  summary: string
  responsibilities: string[]
  achievements?: string[]
  technologies?: string[]
}

export function SimplifiedExperience() {
  const { dict } = useI18n()
  const t = dict.experience
  const experiences = t.items as unknown as Experience[]

  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-8">{t.heading}</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <Card key={exp.id} className="border-l-4 border-l-primary">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start flex-col md:flex-row gap-2">
                <div>
                  <CardTitle className="text-xl">{exp.role}</CardTitle>
                  <CardDescription className="text-base">
                    {exp.company} • {exp.period}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{exp.summary}</p>

              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-lg">{t.labels.responsibilities}</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.responsibilities.map((item, index) => (
                      <li key={index} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.achievements && exp.achievements.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-lg">{t.labels.achievements}</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.achievements.map((item, index) => (
                      <li key={index} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.technologies && exp.technologies.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2 text-lg">{t.labels.technologies}</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
