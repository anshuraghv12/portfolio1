"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface StreamLine {
  id: number
  delay: number
  duration: number
  thickness: number
  color: string
  length: number
  speed: number
}

export default function StreamingLines() {
  const [streams, setStreams] = useState<StreamLine[]>([])

  useEffect(() => {
    const colors = ["#fbbf24", "#f59e0b", "#d97706", "#fcd34d", "#92400e"]

    const newStreams = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: i * 0.5,
      duration: 6 + Math.random() * 8,
      thickness: 0.5 + Math.random() * 2.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      length: 100 + Math.random() * 200,
      speed: 0.8 + Math.random() * 0.4,
    }))
    setStreams(newStreams)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-1 overflow-hidden">
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute"
          initial={{
            x: "-50px",
            y: "-50px",
            rotate: 45,
          }}
          animate={{
            x: "calc(100vw + 50px)",
            y: "calc(100vh + 50px)",
          }}
          transition={{
            duration: stream.duration,
            delay: stream.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div
            className="relative"
            style={{
              width: `${stream.length}px`,
              height: `${stream.thickness}px`,
              background: `linear-gradient(90deg, 
                transparent 0%, 
                ${stream.color}20 20%, 
                ${stream.color} 50%, 
                ${stream.color}20 80%, 
                transparent 100%
              )`,
              boxShadow: `
                0 0 ${stream.thickness * 2}px ${stream.color}60,
                0 0 ${stream.thickness * 4}px ${stream.color}30
              `,
              borderRadius: `${stream.thickness / 2}px`,
            }}
          >
            {/* Animated glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                background: `linear-gradient(90deg, 
                  transparent 0%, 
                  ${stream.color}40 50%, 
                  transparent 100%
                )`,
                filter: `blur(${stream.thickness / 2}px)`,
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
