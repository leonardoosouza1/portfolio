"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Skill = {
  name: string
  level: number // 0-100
}

const frontendSkills: Skill[] = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "React Native", level: 85 },
  { name: "Styled-components", level: 90 },
  { name: "Tailwind CSS", level: 95 },
]

const backendSkills: Skill[] = [
  { name: "NestJS", level: 85 },
  { name: "Express", level: 90 },
  { name: "Django", level: 75 },
  { name: "FastAPI", level: 80 },
  { name: "GraphQL", level: 85 },
]

const databaseSkills: Skill[] = [
  { name: "PrismaORM", level: 90 },
  { name: "TypeORM", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "PostgreSQL", level: 85 },
  { name: "Redis", level: 75 },
]

const devopsSkills: Skill[] = [
  { name: "Docker", level: 85 },
  { name: "GitHub Actions", level: 80 },
  { name: "AWS", level: 75 },
  { name: "Vercel", level: 90 },
  { name: "CI/CD", level: 85 },
]

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="space-y-1 mb-4">
      <div className="flex justify-between">
        <span>{skill.name}</span>
        <span className="text-muted-foreground">{skill.level}%</span>
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
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
        <Card>
          <CardHeader>
            <CardTitle>Competencies</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="frontend">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="database">Database</TabsTrigger>
                <TabsTrigger value="devops">DevOps</TabsTrigger>
              </TabsList>
              <TabsContent value="frontend">
                {frontendSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </TabsContent>
              <TabsContent value="backend">
                {backendSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </TabsContent>
              <TabsContent value="database">
                {databaseSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </TabsContent>
              <TabsContent value="devops">
                {devopsSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
