"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface DiagonalElement {
  id: number
  delay: number
  duration: number
  size: number
  color: string
  shape: string
  path: "diagonal" | "curve" | "zigzag"
}

export default function DiagonalMovingElements() {
  const [elements, setElements] = useState<DiagonalElement[]>([])

  useEffect(() => {
    const shapes = ["circle", "square", "triangle", "star", "diamond"]
    const colors = ["#fbbf24", "#f59e0b", "#d97706", "#92400e", "#78350f"]
    const paths = ["diagonal", "curve", "zigzag"] as const

    const newElements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: i * 3,
      duration: 12 + Math.random() * 8,
      size: 15 + Math.random() * 25,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      path: paths[Math.floor(Math.random() * paths.length)],
    }))
    setElements(newElements)
  }, [])

  const getAnimationPath = (path: string) => {
    switch (path) {
      case "curve":
        return {
          x: ["0vw", "25vw", "50vw", "75vw", "100vw"],
          y: ["0vh", "30vh", "20vh", "60vh", "100vh"],
        }
      case "zigzag":
        return {
          x: ["0vw", "20vw", "40vw", "60vw", "80vw", "100vw"],
          y: ["0vh", "25vh", "10vh", "40vh", "20vh", "100vh"],
        }
      default: // diagonal
        return {
          x: ["0vw", "100vw"],
          y: ["0vh", "100vh"],
        }
    }
  }

  const getShapeElement = (element: DiagonalElement) => {
    const baseStyle = {
      width: element.size,
      height: element.size,
      filter: `drop-shadow(0 0 ${element.size / 2}px ${element.color}60)`,
    }

    switch (element.shape) {
      case "circle":
        return (
          <div
            style={{
              ...baseStyle,
              background: `radial-gradient(circle, ${element.color}, ${element.color}80)`,
              borderRadius: "50%",
            }}
          />
        )
      case "square":
        return (
          <div
            style={{
              ...baseStyle,
              background: `linear-gradient(45deg, ${element.color}, ${element.color}80)`,
              borderRadius: "8px",
            }}
          />
        )
      case "triangle":
        return (
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${element.size / 2}px solid transparent`,
              borderRight: `${element.size / 2}px solid transparent`,
              borderBottom: `${element.size}px solid ${element.color}`,
              filter: `drop-shadow(0 0 ${element.size / 2}px ${element.color}60)`,
            }}
          />
        )
      case "star":
        return (
          <svg width={element.size} height={element.size} viewBox="0 0 24 24" fill={element.color}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        )
      case "diamond":
        return (
          <div
            style={{
              width: element.size,
              height: element.size,
              background: `linear-gradient(45deg, ${element.color}, ${element.color}80)`,
              transform: "rotate(45deg)",
              borderRadius: "4px",
              filter: `drop-shadow(0 0 ${element.size / 2}px ${element.color}60)`,
            }}
          />
        )
      default:
        return (
          <div
            style={{
              ...baseStyle,
              background: `radial-gradient(circle, ${element.color}, ${element.color}80)`,
              borderRadius: "50%",
            }}
          />
        )
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {elements.map((element) => {
        const animationPath = getAnimationPath(element.path)
        return (
          <motion.div
            key={element.id}
            initial={{
              x: "-50px",
              y: "-50px",
              scale: 0,
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              ...animationPath,
              scale: [0, 1, 1, 1, 0],
              rotate: [0, 180, 360, 540, 720],
              opacity: [0, 0.7, 0.7, 0.7, 0],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              times: [0, 0.1, 0.3, 0.8, 1],
            }}
            className="absolute"
          >
            {getShapeElement(element)}
          </motion.div>
        )
      })}
    </div>
  )
}
