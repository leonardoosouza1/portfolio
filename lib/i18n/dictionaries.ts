import ptCommon from "@/locales/pt/common.json"
import ptHero from "@/locales/pt/hero.json"
import ptSkills from "@/locales/pt/skills.json"
import ptExperience from "@/locales/pt/experience.json"
import ptProjects from "@/locales/pt/projects.json"
import enCommon from "@/locales/en/common.json"
import enHero from "@/locales/en/hero.json"
import enSkills from "@/locales/en/skills.json"
import enExperience from "@/locales/en/experience.json"
import enProjects from "@/locales/en/projects.json"

export const dictionaries = {
  pt: {
    common: ptCommon,
    hero: ptHero,
    skills: ptSkills,
    experience: ptExperience,
    projects: ptProjects,
  },
  en: {
    common: enCommon,
    hero: enHero,
    skills: enSkills,
    experience: enExperience,
    projects: enProjects,
  },
}

export type Lang = keyof typeof dictionaries

/** Canonical dictionary shape (Portuguese is the source of truth). */
export type Dictionary = (typeof dictionaries)["pt"]

export const LANGS: Lang[] = ["pt", "en"]

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang] as unknown as Dictionary
}
