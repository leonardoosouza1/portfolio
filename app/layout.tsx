import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Leonardo Souza | Full Stack Developer",
  description: "Portfolio de Leonardo Souza, Desenvolvedor Full Stack especializado em React, Next.js e mais.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
  params, // Add params here
}: {
  children: React.ReactNode
  params: { lang: string } // Define the type for params
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning> {/* Use params.lang here */}
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
