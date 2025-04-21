"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>(0)
  const isMouseMovingRef = useRef(false)
  const lastMousePositionRef = useRef({ x: 0, y: 0 })

  // Inicializa as partículas
  const initParticles = (width: number, height: number) => {
    const particles: Particle[] = []
    const particleCount = Math.min(Math.floor((width * height) / 15000), 100) // Ajusta a quantidade baseada no tamanho da tela

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.2 - 0.1,
        speedY: Math.random() * 0.2 - 0.1,
        opacity: Math.random() * 0.5 + 0.1,
        color: `hsl(var(--primary) / ${Math.random() * 0.3 + 0.1})`,
      })
    }

    particlesRef.current = particles
  }

  // Atualiza e desenha as partículas
  const animateParticles = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Atualiza e desenha cada partícula
    particlesRef.current.forEach((particle) => {
      // Movimento normal das partículas
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Movimento suave em direção ao mouse quando ele se move
      if (isMouseMovingRef.current) {
        const dx = mousePosition.x - particle.x
        const dy = mousePosition.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 200) {
          const force = 0.5 / distance
          particle.x += dx * force
          particle.y += dy * force
          particle.opacity = Math.min(0.8, particle.opacity + 0.01)
        } else {
          particle.opacity = Math.max(0.1, particle.opacity - 0.005)
        }
      }

      // Verifica limites da tela
      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

      // Desenha a partícula
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.globalAlpha = particle.opacity
      ctx.fill()
      ctx.globalAlpha = 1
    })

    // Verifica se o mouse está se movendo
    const currentMouseX = mousePosition.x
    const currentMouseY = mousePosition.y

    if (
      Math.abs(currentMouseX - lastMousePositionRef.current.x) > 3 ||
      Math.abs(currentMouseY - lastMousePositionRef.current.y) > 3
    ) {
      isMouseMovingRef.current = true
      lastMousePositionRef.current = { x: currentMouseX, y: currentMouseY }
    } else {
      isMouseMovingRef.current = false
    }

    animationFrameRef.current = requestAnimationFrame(animateParticles)
  }

  // Configura o canvas e inicia a animação
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const width = window.innerWidth
        const height = window.innerHeight
        canvasRef.current.width = width
        canvasRef.current.height = height
        setDimensions({ width, height })
        initParticles(width, height)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    animationFrameRef.current = requestAnimationFrame(animateParticles)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-70"
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  )
}
