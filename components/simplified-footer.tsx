"use client"

import { useI18n } from "@/lib/i18n/provider"

export function SimplifiedFooter() {
  const { dict } = useI18n()
  return (
    <footer className="border-t py-6">
      <div className="container max-w-5xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Leonardo Souza. {dict.common.footer.rights}
        </p>
      </div>
    </footer>
  )
}
