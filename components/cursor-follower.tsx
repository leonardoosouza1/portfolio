"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const particlesRef = useRef<HTMLDivElement>(null)
  const particlesCount = 12
  const particlesArray = Array.from({ length: particlesCount })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Atualiza a posição do mouse diretamente, sem atrasos
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  return (
    <>
      {/* Cursor circle - com animação mais rápida e leve */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-primary pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 40, // Aumentado para movimento mais rápido
          stiffness: 500, // Aumentado para movimento mais rápido
          mass: 0.2, // Reduzido para movimento mais leve
        }}
      />

      {/* Partículas que seguem o mouse */}
      <div ref={particlesRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-40 hidden md:block">
        {particlesArray.map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 rounded-full bg-primary/30 pointer-events-none"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
              opacity: isVisible ? [0, 0.5, 0] : 0,
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 1,
              delay: index * 0.05,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 0,
              ease: "easeOut",
            }}
            style={{
              // Posição aleatória ao redor do cursor
              left: `calc(${Math.cos((index * (Math.PI * 2)) / particlesCount) * 20}px)`,
              top: `calc(${Math.sin((index * (Math.PI * 2)) / particlesCount) * 20}px)`,
            }}
          />
        ))}
      </div>
    </>
  )
}
