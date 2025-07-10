"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const codeSnippets = [
  "const developer = 'Anshul';",
  "function buildFuture() {",
  "  return innovation;",
  "}",
  "class Engineer {",
  "  constructor() {",
  "    this.passion = true;",
  "  }",
  "}",
  "npm install success",
  "git commit -m 'life'",
  "docker run --name career",
  "kubectl apply -f dreams.yaml",
]

export default function FloatingCodeBlocks() {
  const [blocks, setBlocks] = useState<
    Array<{
      id: number
      text: string
      x: number
      y: number
      delay: number
      duration: number
    }>
  >([])

  useEffect(() => {
    const newBlocks = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      text: codeSnippets[i % codeSnippets.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: i * 2,
      duration: 15 + Math.random() * 10,
    }))
    setBlocks(newBlocks)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {blocks.map((block) => (
        <motion.div
          key={block.id}
          className="absolute bg-gray-900/90 text-green-400 px-3 py-2 rounded-lg font-mono text-sm backdrop-blur-sm border border-green-500/30"
          initial={{
            x: `${block.x}vw`,
            y: `${block.y}vh`,
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            x: [`${block.x}vw`, `${(block.x + 20) % 100}vw`, `${(block.x + 40) % 100}vw`],
            y: [`${block.y}vh`, `${(block.y + 15) % 100}vh`, `${(block.y + 30) % 100}vh`],
            opacity: [0, 0.8, 0.6, 0.8, 0],
            scale: [0.8, 1, 1.1, 1, 0.8],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: block.duration,
            delay: block.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {block.text}
        </motion.div>
      ))}
    </div>
  )
}
