"use client"

import { motion } from "framer-motion"
import ProjectCards3D from "@/components/unique/ProjectCards3D"

const projects = [
  {
    title: "Bus Tracking Device",
    year: "2023",
    description: "Real-time bus tracking system with live location updates and route optimization",
    technologies: ["Flutter", "Google Maps API", "Firebase"],
    features: ["Real-time GPS tracking", "Route optimization", "User notifications", "Admin dashboard"],
    status: "Completed",
  },
  {
    title: "Library Management System",
    year: "2024",
    description: "Comprehensive library cataloging and automation system with user management",
    technologies: ["React", "Node.js", "MySQL", "JWT"],
    features: ["Book cataloging", "User authentication", "Borrowing system", "Automated notifications"],
    status: "Completed",
  },
  {
    title: "Smart Queue System",
    year: "2025",
    description: "Intelligent queue management system for optimized customer flow",
    technologies: ["React", "Node.js", "Firebase", "Flutter"],
    features: ["Queue optimization", "Real-time updates", "Mobile app integration", "Analytics dashboard"],
    status: "In Progress",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen relative pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Projects</h1>
            <motion.div
              className="glass-effect-strong px-6 py-3 rounded-full inline-block hover-card group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-xl text-gray-600 max-w-2xl mx-auto group-hover:text-amber-600 transition-colors duration-300">
                3D project cards with neon corner lines - hover to flip and see technologies used!
              </p>

              {/* Animated corner indicators */}
              <div className="absolute top-2 left-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div
                  className="absolute top-0 left-0 w-full h-0.5 bg-amber-400"
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                />
                <motion.div
                  className="absolute top-0 left-0 w-0.5 h-full bg-amber-400"
                  animate={{ height: ["0%", "100%"] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.4 }}
                />
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="hover-card group cursor-pointer relative">
                {/* Neon corner lines */}
                <div className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-transparent"
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  />
                  <motion.div
                    className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-transparent"
                    animate={{ height: ["0%", "100%"] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
                  />
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <motion.div
                    className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-amber-400 to-transparent"
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.2 }}
                  />
                  <motion.div
                    className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-amber-400 to-transparent"
                    animate={{ height: ["0%", "100%"] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.7 }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-transparent"
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.4 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-amber-400 to-transparent"
                    animate={{ height: ["0%", "100%"] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.9 }}
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <motion.div
                    className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-amber-400 to-transparent"
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.6 }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-amber-400 to-transparent"
                    animate={{ height: ["0%", "100%"] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1.1 }}
                  />
                </div>

                <ProjectCards3D
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  index={index}
                />
              </div>
            ))}
          </div>

          {/* Enhanced Project Stats with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-effect p-8 rounded-xl hover-card group cursor-pointer relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {/* Glowing background on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-100/30 via-yellow-100/30 to-amber-100/30 opacity-0 group-hover:opacity-100 rounded-xl"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center group-hover:scale-105 transition-transform duration-300">
                Project Statistics
              </h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                {[
                  { value: "3+", label: "Projects Completed" },
                  { value: "8+", label: "Technologies Used" },
                  { value: "100%", label: "Client Satisfaction" },
                  { value: "2+", label: "Years Experience" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="hover:scale-110 transition-transform duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className="text-3xl font-bold gradient-text"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
