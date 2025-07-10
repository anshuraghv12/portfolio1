"use client"

import { motion } from "framer-motion"
import TechConstellation from "@/components/3d/TechConstellation"

const technicalSkills = {
  Languages: ["Python", "Java", "C", "C++", "MySQL"],
  Tools: ["VS Code", "MySQL", "PyCharm", "Dev C++", "IntelliJ IDEA"],
  "Tech/Frameworks": ["Linux", "GitHub", "ReactJS", "NodeJS", "JWT", "Flutter"],
}

const softSkills = [
  "Data Structures & Algorithms",
  "C/C++/Python Programming",
  "Database Management Systems",
  "Communication",
  "Problem Solving",
  "Video Editing",
  "3D Design",
  "System Software Management",
]

export default function Skills() {
  return (
    <div className="min-h-screen relative pt-24 pb-16 overflow-hidden">
      <TechConstellation />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 -z-20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold gradient-text-alt mb-6 drop-shadow-lg"
            >
              Skills & Expertise
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-effect-strong px-6 py-3 rounded-full inline-block hover-card group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-xl text-gray-600 group-hover:text-amber-600 transition-colors duration-300">
                Interactive skill orbs floating around - try hovering over them!
              </p>
            </motion.div>
          </div>

          {/* Enhanced Technical Skills with unique hover effects */}
          <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-4xl font-bold gradient-text mb-8 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(technicalSkills).map(([category, skills], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="glass-effect-strong p-8 rounded-2xl hover-lift hover-glow hover-card group cursor-pointer relative overflow-hidden"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                >
                  {/* Rotating border effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: "conic-gradient(from 0deg, #fbbf24, #f59e0b, #d97706, #fbbf24)",
                        padding: "2px",
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <div className="w-full h-full bg-white/90 rounded-2xl" />
                    </motion.div>
                  </div>

                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                        {category}
                      </h3>
                      <motion.div
                        className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mx-auto mt-2"
                        animate={{ width: [64, 80, 64] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </div>
                    <div className="space-y-4">
                      {skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 + skillIndex * 0.05 }}
                          className="flex items-center space-x-3 p-3 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-amber-200 hover:border-amber-300 hover:scale-105 hover:shadow-lg transition-all duration-300"
                          whileHover={{ x: 10 }}
                        >
                          <motion.div
                            className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: skillIndex * 0.2 }}
                          />
                          <span className="text-gray-700 font-medium">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Enhanced Soft Skills with pulsing effects */}
          <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <h2 className="text-4xl font-bold gradient-text mb-8 text-center">Soft Skills</h2>
            <div
              className="glass-effect-strong p-8 rounded-2xl hover-card group cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Pulsing background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-100/30 via-yellow-100/30 to-amber-100/30 opacity-0 group-hover:opacity-100 rounded-2xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />

              <div className="relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.7 + index * 0.05, type: "spring", stiffness: 200 }}
                      className="animated-gradient p-6 rounded-xl text-white hover-lift cursor-pointer group/item relative overflow-hidden"
                      whileHover={{ scale: 1.1, rotate: 2 }}
                    >
                      {/* Glowing effect */}
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                      <div className="text-center relative z-10">
                        <motion.div
                          className="w-4 h-4 bg-white rounded-full mx-auto mb-3"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.1 }}
                        />
                        <span className="font-semibold text-sm group-hover/item:text-lg transition-all duration-300">
                          {skill}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Enhanced Skill Proficiency with animated progress bars */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-effect-strong p-8 rounded-2xl hover-card group cursor-pointer relative"
            whileHover={{ scale: 1.02 }}
          >
            {/* Corner neon lines */}
            <div className="absolute top-0 left-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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

            <h2 className="text-4xl font-bold gradient-text mb-8 text-center group-hover:scale-105 transition-transform duration-300">
              Proficiency Levels
            </h2>
            <div className="space-y-8">
              {[
                { skill: "Python", level: 90, color: "from-green-400 to-green-600" },
                { skill: "React/Node.js", level: 85, color: "from-blue-400 to-blue-600" },
                { skill: "DevOps/Cloud", level: 80, color: "from-purple-400 to-purple-600" },
                { skill: "Database Management", level: 85, color: "from-red-400 to-red-600" },
                { skill: "Problem Solving", level: 95, color: "from-amber-400 to-yellow-500" },
              ].map((item, index) => (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="space-y-3 hover:scale-105 transition-transform duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-bold text-lg">{item.skill}</span>
                    <motion.span
                      className="text-2xl font-bold gradient-text"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                    >
                      {item.level}%
                    </motion.span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.level}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 1.5, ease: "easeOut" }}
                      className={`bg-gradient-to-r ${item.color} h-4 rounded-full relative overflow-hidden`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}
