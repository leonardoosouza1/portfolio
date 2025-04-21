export function SimplifiedFooter() {
  return (
    <footer className="border-t py-6">
      <div className="container max-w-5xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Leonardo Souza. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
