"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Orb {
  id: number
  startDelay: number
  duration: number
  size: number
  color: string
  glowIntensity: number
}

export default function FloatingOrbs() {
  const [orbs, setOrbs] = useState<Orb[]>([])

  useEffect(() => {
    const colors = [
      "#fbbf24", // amber-400
      "#f59e0b", // amber-500
      "#d97706", // amber-600
      "#92400e", // amber-800
      "#fcd34d", // amber-300
    ]

    const newOrbs = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      startDelay: i * 4,
      duration: 20 + Math.random() * 10,
      size: 30 + Math.random() * 40,
      color: colors[Math.floor(Math.random() * colors.length)],
      glowIntensity: 20 + Math.random() * 30,
    }))
    setOrbs(newOrbs)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          initial={{
            x: -orb.size,
            y: -orb.size,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            x: `calc(100vw + ${orb.size}px)`,
            y: `calc(100vh + ${orb.size}px)`,
            scale: [0, 1, 1.2, 1, 0],
            opacity: [0, 0.8, 0.6, 0.8, 0],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.startDelay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            scale: {
              times: [0, 0.2, 0.5, 0.8, 1],
              ease: "easeInOut",
            },
            opacity: {
              times: [0, 0.2, 0.5, 0.8, 1],
              ease: "easeInOut",
            },
          }}
          className="absolute"
        >
          <div
            className="rounded-full"
            style={{
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle, ${orb.color}CC, ${orb.color}80, ${orb.color}40, transparent)`,
              boxShadow: `
                0 0 ${orb.glowIntensity}px ${orb.color}80,
                0 0 ${orb.glowIntensity * 2}px ${orb.color}40,
                inset 0 0 ${orb.glowIntensity / 2}px ${orb.color}60
              `,
            }}
          >
            {/* Inner glow effect */}
            <div
              className="absolute inset-2 rounded-full"
              style={{
                background: `radial-gradient(circle, ${orb.color}FF, ${orb.color}80, transparent)`,
                animation: "pulse 3s ease-in-out infinite",
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
