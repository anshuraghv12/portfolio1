"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface MovingElementProps {
  count?: number
  speed?: number
  size?: number
  color?: string
  shape?: "circle" | "square" | "triangle" | "star"
}

export default function MovingElement({
  count = 5,
  speed = 15,
  size = 20,
  color = "#fbbf24",
  shape = "circle",
}: MovingElementProps) {
  const [elements, setElements] = useState<Array<{ id: number; delay: number; duration: number }>>([])

  useEffect(() => {
    const newElements = Array.from({ length: count }, (_, i) => ({
      id: i,
      delay: i * (speed / count),
      duration: speed + Math.random() * 5,
    }))
    setElements(newElements)
  }, [count, speed])

  const getShapeComponent = (elementId: number) => {
    const baseClasses = "absolute opacity-70"
    const sizeStyle = { width: size, height: size }

    switch (shape) {
      case "circle":
        return (
          <div
            className={`${baseClasses} rounded-full`}
            style={{
              ...sizeStyle,
              background: `radial-gradient(circle, ${color}, ${color}80)`,
              boxShadow: `0 0 ${size}px ${color}40`,
            }}
          />
        )
      case "square":
        return (
          <div
            className={`${baseClasses} rounded-lg`}
            style={{
              ...sizeStyle,
              background: `linear-gradient(45deg, ${color}, ${color}80)`,
              boxShadow: `0 0 ${size}px ${color}40`,
            }}
          />
        )
      case "triangle":
        return (
          <div
            className={baseClasses}
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid ${color}`,
              filter: `drop-shadow(0 0 ${size / 2}px ${color}40)`,
            }}
          />
        )
      case "star":
        return (
          <div
            className={`${baseClasses} flex items-center justify-center`}
            style={{
              ...sizeStyle,
              color: color,
              filter: `drop-shadow(0 0 ${size / 2}px ${color}40)`,
            }}
          >
            <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        )
      default:
        return (
          <div
            className={`${baseClasses} rounded-full`}
            style={{
              ...sizeStyle,
              background: `radial-gradient(circle, ${color}, ${color}80)`,
              boxShadow: `0 0 ${size}px ${color}40`,
            }}
          />
        )
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          initial={{
            x: -size,
            y: -size,
            scale: 0,
            rotate: 0,
          }}
          animate={{
            x: "calc(100vw + 50px)",
            y: "calc(100vh + 50px)",
            scale: [0, 1, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            scale: {
              times: [0, 0.1, 0.9, 1],
              duration: element.duration,
            },
          }}
          className="absolute"
        >
          {getShapeComponent(element.id)}
        </motion.div>
      ))}
    </div>
  )
}
