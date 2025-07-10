"use client"

import { motion } from "framer-motion"
import GeometricWaves from "@/components/3d/GeometricWaves"
import ParticleBackground from "@/components/ParticleBackground"

export default function About() {
  return (
    <div className="min-h-screen relative pt-20 pb-16 overflow-hidden">
      <GeometricWaves />
      <ParticleBackground count={25} />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-transparent to-yellow-50/50 -z-20"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold gradient-text-alt mb-4 drop-shadow-lg relative"
            >
              About Me
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-effect-strong px-6 py-3 rounded-full inline-block relative hover-card group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-lg text-gray-600 group-hover:text-amber-600 transition-colors duration-300">
                Passionate about technology and continuous learning
              </p>

              {/* Corner neon lines */}
              <div className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-transparent animate-pulse"></div>
                <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-amber-400 to-transparent animate-pulse"></div>
              </div>
              <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-amber-400 to-transparent animate-pulse"></div>
                <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-amber-400 to-transparent animate-pulse"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-transparent animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-amber-400 to-transparent animate-pulse"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-amber-400 to-transparent animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-amber-400 to-transparent animate-pulse"></div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "My Journey",
                content:
                  "I'm a dedicated Software Engineer with a strong foundation in DevOps and Cloud technologies. Currently pursuing my B.Tech at Geetanjali Institute Of Technical Studies, I've been passionate about technology since my early days. My journey began with curiosity about how software systems work, which led me to explore various programming languages and development frameworks.",
                delay: 0.1,
              },
              {
                title: "What Drives Me",
                content:
                  "I believe in the power of technology to solve real-world problems. Whether it's optimizing development workflows through DevOps practices, building scalable cloud solutions, or creating intuitive user experiences, I'm always excited to take on new challenges. My approach combines technical expertise with creative problem-solving to deliver impactful solutions.",
                delay: 0.2,
              },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: section.delay, duration: 0.6 }}
                className="glass-effect-strong p-6 rounded-2xl hover-lift hover-card group cursor-pointer relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Moving corner elements */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125"></div>

                <div className="relative z-10">
                  <h2 className="text-2xl font-bold gradient-text mb-3 group-hover:scale-105 transition-transform duration-300">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Enhanced sections with unique hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="glass-effect-strong p-6 rounded-2xl hover-lift hover-card group cursor-pointer relative"
              whileHover={{ scale: 1.02, rotateX: 2 }}
            >
              {/* Pulsing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-yellow-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl animate-pulse"></div>

              <div className="relative z-10">
                <h2 className="text-2xl font-bold gradient-text mb-4 text-center group-hover:text-3xl transition-all duration-300">
                  Beyond Code
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      Interests
                    </h3>
                    {[
                      "3D Design and Modeling",
                      "Video Editing and Content Creation",
                      "Open Source Contributions",
                      "Tech Community Engagement",
                    ].map((interest, index) => (
                      <motion.div
                        key={interest}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                        className="flex items-center gap-3 p-2 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-amber-200 hover:border-amber-400 hover:scale-105 transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-700 text-sm font-medium">{interest}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      Soft Skills
                    </h3>
                    {[
                      "Effective Communication",
                      "Problem-Solving Mindset",
                      "Team Collaboration",
                      "Continuous Learning",
                    ].map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                        className="flex items-center gap-3 p-2 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-amber-200 hover:border-amber-400 hover:scale-105 transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-700 text-sm font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Continue with other sections with similar enhancements... */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="glass-effect-strong p-6 rounded-2xl text-center hover-lift hover-card group cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-yellow-500/10 to-amber-400/10 opacity-0 group-hover:opacity-100 rounded-2xl"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />

              <div className="relative z-10">
                <h2 className="text-2xl font-bold gradient-text mb-4 group-hover:scale-110 transition-transform duration-300">
                  My Philosophy
                </h2>
                <blockquote className="text-gray-700 italic text-lg leading-relaxed border-l-4 border-gradient-to-b from-amber-400 to-yellow-500 pl-4 bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-r-lg group-hover:bg-gradient-to-r group-hover:from-amber-100 group-hover:to-yellow-100 transition-all duration-300">
                  "Technology is best when it brings people together and solves meaningful problems. I strive to write
                  clean, efficient code that not only works but makes a difference."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
