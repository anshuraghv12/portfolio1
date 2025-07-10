"use client"

import { motion } from "framer-motion"
import EducationTimeline from "@/components/unique/EducationTimeline"

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Geetanjali Institute Of Technical Studies",
    location: "Udaipur",
    period: "2023 - 2027",
    status: "In Progress",
    description:
      "Pursuing comprehensive education in computer science and engineering with focus on software development, data structures, and system design.",
    subjects: [
      "Data Structures & Algorithms",
      "Database Management",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
    ],
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Alok Senior Secondary School",
    location: "Udaipur",
    period: "2023",
    status: "Completed",
    grade: "60%",
    description:
      "Completed higher secondary education with focus on science stream, building foundation for engineering studies.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
  {
    degree: "Secondary (10th)",
    institution: "Alok Senior Secondary School",
    location: "Udaipur",
    period: "2021",
    status: "Completed",
    grade: "74%",
    description:
      "Completed secondary education with strong academic performance and developed interest in technology and programming.",
    subjects: ["Mathematics", "Science", "English", "Social Studies", "Computer Applications"],
  },
]

export default function Education() {
  return (
    <div className="min-h-screen relative pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Education</h1>
            <motion.div
              className="glass-effect-strong px-6 py-3 rounded-full inline-block hover-card group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-xl text-gray-600 max-w-2xl mx-auto group-hover:text-amber-600 transition-colors duration-300">
                Interactive timeline with animated progress bars and hover effects
              </p>

              {/* Corner neon lines */}
              <div className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div
                  className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-transparent"
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                />
                <motion.div
                  className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-amber-400 to-transparent"
                  animate={{ height: ["0%", "100%"] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Education Timeline */}
          <div className="relative space-y-12">
            {education.map((edu, index) => (
              <EducationTimeline
                key={edu.degree}
                degree={edu.degree}
                institution={edu.institution}
                period={edu.period}
                location={edu.location}
                status={edu.status}
                index={index}
                isLast={index === education.length - 1}
              />
            ))}
          </div>

          {/* Academic Highlights */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-effect-strong p-8 rounded-2xl hover-card group cursor-pointer relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-yellow-50/30 opacity-0 group-hover:opacity-100 rounded-2xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Corner effects */}
            <div className="absolute top-2 left-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-amber-400 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-0.5 h-full bg-amber-400 animate-pulse"></div>
            </div>
            <div className="absolute bottom-2 right-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 right-0 w-full h-0.5 bg-amber-400 animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-full bg-amber-400 animate-pulse"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center group-hover:scale-105 transition-transform duration-300">
                Academic Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    Current Focus Areas
                  </h3>
                  {[
                    "Advanced Programming Concepts",
                    "System Design & Architecture",
                    "Cloud Computing Technologies",
                    "DevOps Practices",
                  ].map((area, index) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-amber-200 hover:border-amber-400 hover:scale-105 transition-all duration-300"
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-amber-400 rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                      />
                      <span className="text-gray-700 font-medium">{area}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    Learning Philosophy
                  </h3>
                  <div className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-amber-200">
                    <p className="text-gray-700 leading-relaxed text-sm">
                      I believe in practical learning combined with strong theoretical foundations. My approach involves
                      hands-on projects, continuous practice, and staying updated with industry trends to bridge the gap
                      between academic knowledge and real-world applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Future Goals */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="glass-effect-strong p-8 rounded-2xl text-center hover-card group cursor-pointer relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {/* Rotating gradient background */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(251,191,36,0.1), rgba(245,158,11,0.1), rgba(217,119,6,0.1), rgba(251,191,36,0.1))",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold gradient-text mb-6 group-hover:scale-105 transition-transform duration-300">
                Future Academic Goals
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-lg group-hover:text-gray-700 transition-colors duration-300">
                Planning to pursue advanced certifications and potentially a Master's degree in Computer Science with
                specialization in Cloud Computing and DevOps.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                {["Master's Degree", "Cloud Certifications", "Research Projects"].map((goal, index) => (
                  <motion.span
                    key={goal}
                    className="px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 rounded-full text-sm font-medium hover:scale-110 transition-transform duration-300 cursor-pointer"
                    whileHover={{ y: -5 }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 },
                    }}
                  >
                    {goal}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Academic Statistics */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="glass-effect-strong p-8 rounded-2xl hover-card group cursor-pointer relative"
            whileHover={{ scale: 1.02 }}
          >
            {/* Neon corner lines */}
            <div className="absolute top-0 left-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-transparent"
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              />
              <motion.div
                className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-transparent"
                animate={{ height: ["0%", "100%"] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.7 }}
              />
            </div>
            <div className="absolute bottom-0 right-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <motion.div
                className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-amber-400 to-transparent"
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.3 }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-amber-400 to-transparent"
                animate={{ height: ["0%", "100%"] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1.0 }}
              />
            </div>

            <h2 className="text-3xl font-bold gradient-text mb-8 text-center group-hover:scale-105 transition-transform duration-300">
              Academic Journey
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { value: "4+", label: "Years of Study", color: "text-blue-600" },
                { value: "3", label: "Educational Levels", color: "text-green-600" },
                { value: "15+", label: "Subjects Covered", color: "text-purple-600" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="hover:scale-110 transition-transform duration-300"
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className={`text-4xl font-bold ${stat.color} mb-2`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.4 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}
