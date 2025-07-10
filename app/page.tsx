"use client"

import { motion } from "framer-motion"
import ParticleBackground from "@/components/ParticleBackground"
import EnhancedSliderButton from "@/components/EnhancedSliderButton"
import FloatingContactLinks from "@/components/FloatingContactLinks"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen relative flex items-center justify-center pt-16 overflow-hidden">
      {/* Temporary placeholder for Three.js component */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-100/20 to-yellow-100/20"></div>
      <ParticleBackground count={30} />
      <FloatingContactLinks />

      {/* Animated background gradient */}
      <div className="absolute inset-0 animated-gradient opacity-20 -z-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Enhanced Profile Image with unique hover effects */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
            className="relative mx-auto w-56 h-56 rounded-full overflow-hidden glass-effect-strong p-3 pulse-glow hover-card group cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            {/* Rotating golden ring on hover */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent"
              style={{
                background: "conic-gradient(from 0deg, #fbbf24, #f59e0b, #d97706, #fbbf24)",
                padding: "4px",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-white" />
            </motion.div>

            <div className="w-full h-full rounded-full overflow-hidden relative z-10">
              <Image
                src="/placeholder.svg?height=220&width=220"
                alt="Anshul Shrivastava"
                width={220}
                height={220}
                className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-400/20 to-transparent rounded-full"></div>
            </div>

            {/* Floating particles on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-amber-400 rounded-full"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [-10, -30, -10],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Enhanced Name with hover effects */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative hover-card group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="unique-name-container">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-96 h-20 bg-gradient-to-r from-transparent via-amber-100/30 to-transparent rounded-full blur-xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>

                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="name-part-first"
                  >
                    <span className="unique-text-style group-hover:text-shadow-glow transition-all duration-300">
                      ANSHUL
                    </span>
                    <div className="name-underline group-hover:w-full transition-all duration-500"></div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, duration: 0.4 }}
                    className="decorative-separator"
                  >
                    <div className="separator-dot group-hover:scale-150 transition-transform duration-300"></div>
                    <div className="separator-line group-hover:w-20 transition-all duration-500"></div>
                    <div className="separator-dot group-hover:scale-150 transition-transform duration-300"></div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="name-part-last"
                  >
                    <span className="unique-text-style group-hover:text-shadow-glow transition-all duration-300">
                      SHRIVASTAVA
                    </span>
                    <div className="name-underline group-hover:w-full transition-all duration-500"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="glass-effect-strong px-8 py-4 rounded-full inline-block hover-card group cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 191, 36, 0.3)" }}
            >
              <p className="text-lg md:text-xl text-gray-700 font-medium tracking-wide group-hover:text-amber-600 transition-colors duration-300">
                Software Engineer / DevOps / Cloud Engineer
              </p>
            </motion.div>
          </div>

          {/* Enhanced summary with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="glass-effect p-8 rounded-2xl max-w-3xl mx-auto hover-card group cursor-pointer relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {/* Animated border on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div
                className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 rounded-2xl animate-pulse"
                style={{ padding: "2px" }}
              >
                <div className="w-full h-full bg-white/90 rounded-2xl" />
              </div>
            </div>

            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                Results-driven engineer with expertise in <span className="gradient-text font-semibold">DevOps</span>,{" "}
                <span className="gradient-text font-semibold">Cloud technologies</span>, and{" "}
                <span className="gradient-text font-semibold">Full-Stack development</span>. Passionate about building
                scalable solutions and optimizing development workflows.
              </p>
            </div>
          </motion.div>

          {/* Enhanced Slider Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="hover-card">
              <EnhancedSliderButton />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
