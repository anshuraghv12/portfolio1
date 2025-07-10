"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const skills = [
  { name: "React", color: "#61DAFB", size: 60 },
  { name: "Python", color: "#3776AB", size: 55 },
  { name: "Node.js", color: "#339933", size: 50 },
  { name: "Docker", color: "#2496ED", size: 45 },
  { name: "AWS", color: "#FF9900", size: 65 },
  { name: "MySQL", color: "#4479A1", size: 40 },
  { name: "Git", color: "#F05032", size: 35 },
  { name: "Linux", color: "#FCC624", size: 50 },
]

export default function SkillOrbs() {
  const [orbs, setOrbs] = useState<
    Array<{
      id: number
      skill: (typeof skills)[0]
      x: number
      y: number
      vx: number
      vy: number
    }>
  >([])

  useEffect(() => {
    const newOrbs = skills.map((skill, i) => ({
      id: i,
      skill,
      x: Math.random() * (window.innerWidth - skill.size),
      y: Math.random() * (window.innerHeight - skill.size),
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }))
    setOrbs(newOrbs)

    const interval = setInterval(() => {
      setOrbs((prevOrbs) =>
        prevOrbs.map((orb) => {
          let newX = orb.x + orb.vx
          let newY = orb.y + orb.vy
          let newVx = orb.vx
          let newVy = orb.vy

          // Bounce off walls
          if (newX <= 0 || newX >= window.innerWidth - orb.skill.size) {
            newVx = -newVx
            newX = Math.max(0, Math.min(window.innerWidth - orb.skill.size, newX))
          }
          if (newY <= 0 || newY >= window.innerHeight - orb.skill.size) {
            newVy = -newVy
            newY = Math.max(0, Math.min(window.innerHeight - orb.skill.size, newY))
          }

          return { ...orb, x: newX, y: newY, vx: newVx, vy: newVy }
        }),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg cursor-pointer"
          style={{
            width: orb.skill.size,
            height: orb.skill.size,
            backgroundColor: orb.skill.color,
            left: orb.x,
            top: orb.y,
            boxShadow: `0 0 20px ${orb.skill.color}40`,
          }}
          whileHover={{ scale: 1.2, zIndex: 10 }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        >
          {orb.skill.name}
        </motion.div>
      ))}
    </div>
  )
}
