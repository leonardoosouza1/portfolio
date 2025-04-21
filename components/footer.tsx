export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 text-center md:gap-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Leonardo Souza. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">Built with Next.js, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  )
}
