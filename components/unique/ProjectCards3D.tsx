"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface Project3DCardProps {
  title: string
  description: string
  technologies: string[]
  index: number
}

export default function ProjectCards3D({ title, description, technologies, index }: Project3DCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="relative w-full h-80 cursor-pointer"
      style={{ perspective: "1000px" }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 glass-effect-strong p-6 rounded-xl backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
            <div className="text-center">
              <motion.div
                className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full text-amber-700 text-sm font-medium"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Hover to flip
              </motion.div>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 glass-effect-strong p-6 rounded-xl backface-hidden bg-gradient-to-br from-amber-50 to-yellow-50"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="h-full flex flex-col justify-center">
            <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">Technologies Used</h4>
            <div className="space-y-3">
              {technologies.map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-amber-200"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: techIndex * 0.1 }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-pulse" />
                  <span className="text-gray-700 font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
