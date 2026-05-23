"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n/provider"

export function SimplifiedSkills() {
  const { dict } = useI18n()
  const t = dict.skills

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-8">{t.heading}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {t.categories.map((category) => (
          <Card key={category.name}>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
