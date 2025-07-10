"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface ParallelLine {
  id: number
  delay: number
  duration: number
  thickness: number
  color: string
  spacing: number
  glowIntensity: number
}

export default function ParallelLines() {
  const [lines, setLines] = useState<ParallelLine[]>([])

  useEffect(() => {
    const colors = ["#fbbf24", "#f59e0b", "#d97706", "#fcd34d"]

    const newLines = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: i * 0.3,
      duration: 12 + Math.random() * 6,
      thickness: 1 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      spacing: i * 30,
      glowIntensity: 2 + Math.random() * 4,
    }))
    setLines(newLines)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-1 overflow-hidden">
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute"
          initial={{
            x: "-100px",
            y: `-${100 + line.spacing}px`,
            width: 0,
            height: `${line.thickness}px`,
            rotate: 45,
            opacity: 0,
          }}
          animate={{
            x: "calc(100vw + 100px)",
            y: `calc(100vh + 100px + ${line.spacing}px)`,
            width: "200px",
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            width: {
              duration: line.duration * 0.2,
              delay: line.delay,
              ease: "easeOut",
            },
            opacity: {
              times: [0, 0.1, 0.9, 1],
              duration: line.duration,
            },
          }}
          style={{
            background: `linear-gradient(90deg, transparent, ${line.color}, ${line.color}, transparent)`,
            boxShadow: `0 0 ${line.glowIntensity}px ${line.color}80, 0 0 ${line.glowIntensity * 2}px ${line.color}40`,
            transformOrigin: "left center",
          }}
        />
      ))}
    </div>
  )
}
