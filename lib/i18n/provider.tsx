"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { getDictionary, type Dictionary, type Lang } from "./dictionaries"

type I18nContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  dict: Dictionary
}

const I18nContext = createContext<I18nContextValue | null>(null)
const STORAGE_KEY = "portfolio-lang"

/** Browser language → app locale. Anything not pt* falls back to English. */
function detectLang(): Lang {
  if (typeof navigator === "undefined") return "pt"
  const nav = (navigator.languages?.[0] ?? navigator.language ?? "").toLowerCase()
  return nav.startsWith("pt") ? "pt" : "en"
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // SSR + first client paint render "pt" (matches <html lang="pt-BR">) to avoid
  // hydration mismatch; the real language is resolved on mount.
  const [lang, setLangState] = useState<Lang>("pt")

  useEffect(() => {
    const stored = typeof localStorage !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null
    const initial: Lang = stored === "pt" || stored === "en" ? stored : detectLang()
    setLangState(initial)
  }, [])

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "pt" ? "pt-BR" : "en"
    }
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    if (typeof localStorage !== "undefined") localStorage.setItem(STORAGE_KEY, next)
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, dict: getDictionary(lang) }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within an I18nProvider")
  return ctx
}
