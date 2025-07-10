"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface LineWave {
  id: number
  delay: number
  duration: number
  thickness: number
  color: string
  waveOffset: number
}

export default function DiagonalLineWaves() {
  const [waves, setWaves] = useState<LineWave[]>([])

  useEffect(() => {
    const colors = ["#fbbf24", "#f59e0b", "#d97706", "#fcd34d", "#92400e"]

    const newWaves = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: i * 1.5,
      duration: 10 + Math.random() * 5,
      thickness: 2 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      waveOffset: i * 50,
    }))
    setWaves(newWaves)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {waves.map((wave) => (
        <motion.div
          key={wave.id}
          initial={{
            x: "-200px",
            y: `-${200 + wave.waveOffset}px`,
            pathLength: 0,
          }}
          animate={{
            x: "calc(100vw + 200px)",
            y: `calc(100vh + 200px + ${wave.waveOffset}px)`,
            pathLength: 1,
          }}
          transition={{
            duration: wave.duration,
            delay: wave.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute"
        >
          <svg width="200" height={wave.thickness * 2} viewBox="0 0 200 20" className="overflow-visible">
            <motion.path
              d="M0,10 Q50,5 100,10 T200,10"
              stroke={wave.color}
              strokeWidth={wave.thickness}
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{
                duration: wave.duration * 0.3,
                delay: wave.delay,
                ease: "easeOut",
              }}
              style={{
                filter: `drop-shadow(0 0 ${wave.thickness}px ${wave.color}80)`,
              }}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
