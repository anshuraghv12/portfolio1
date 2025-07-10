"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface MovingLine {
  id: number
  delay: number
  duration: number
  thickness: number
  color: string
  opacity: number
  pattern: "solid" | "dashed" | "dotted" | "gradient"
}

export default function MovingLines() {
  const [lines, setLines] = useState<MovingLine[]>([])

  useEffect(() => {
    const colors = [
      "#fbbf24", // amber-400
      "#f59e0b", // amber-500
      "#d97706", // amber-600
      "#fcd34d", // amber-300
      "#92400e", // amber-800
    ]

    const patterns = ["solid", "dashed", "dotted", "gradient"] as const

    const newLines = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      delay: i * 0.8,
      duration: 8 + Math.random() * 4,
      thickness: 1 + Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.3 + Math.random() * 0.5,
      pattern: patterns[Math.floor(Math.random() * patterns.length)],
    }))
    setLines(newLines)
  }, [])

  const getLineStyle = (line: MovingLine) => {
    const baseStyle = {
      height: `${line.thickness}px`,
      opacity: line.opacity,
    }

    switch (line.pattern) {
      case "dashed":
        return {
          ...baseStyle,
          background: line.color,
          backgroundImage: `repeating-linear-gradient(
            90deg,
            ${line.color} 0px,
            ${line.color} 10px,
            transparent 10px,
            transparent 20px
          )`,
        }
      case "dotted":
        return {
          ...baseStyle,
          background: `repeating-linear-gradient(
            90deg,
            ${line.color} 0px,
            ${line.color} 3px,
            transparent 3px,
            transparent 8px
          )`,
          borderRadius: `${line.thickness / 2}px`,
        }
      case "gradient":
        return {
          ...baseStyle,
          background: `linear-gradient(90deg, transparent, ${line.color}, transparent)`,
          boxShadow: `0 0 ${line.thickness * 2}px ${line.color}60`,
        }
      default: // solid
        return {
          ...baseStyle,
          background: line.color,
          boxShadow: `0 0 ${line.thickness}px ${line.color}80`,
        }
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-1 overflow-hidden">
      {lines.map((line) => (
        <motion.div
          key={line.id}
          initial={{
            x: "-100px",
            y: "-100px",
            width: 0,
            rotate: 45,
          }}
          animate={{
            x: "calc(100vw + 100px)",
            y: "calc(100vh + 100px)",
            width: "141.42vw", // sqrt(2) * 100vw to cover diagonal
            rotate: 45,
          }}
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            width: {
              duration: line.duration * 0.3,
              delay: line.delay,
              ease: "easeOut",
            },
          }}
          className="absolute origin-left"
          style={getLineStyle(line)}
        />
      ))}
    </div>
  )
}
