"use client"

import { motion } from "framer-motion"
import CertificationBadges from "@/components/unique/CertificationBadges"

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Coming Soon",
    status: "planned" as const,
    description: "Foundational understanding of AWS Cloud services and architecture",
  },
  {
    title: "Google Cloud Associate",
    issuer: "Google Cloud",
    date: "Coming Soon",
    status: "planned" as const,
    description: "Cloud engineering and deployment on Google Cloud Platform",
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "Coming Soon",
    status: "planned" as const,
    description: "Container orchestration and Docker ecosystem expertise",
  },
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "Coming Soon",
    status: "planned" as const,
    description: "Advanced React development and best practices",
  },
]

const achievements = [
  {
    title: "Dean's List",
    description: "Academic excellence recognition",
    year: "2024",
  },
  {
    title: "Hackathon Participant",
    description: "Participated in multiple coding competitions",
    year: "2023-2024",
  },
  {
    title: "Open Source Contributor",
    description: "Active contributions to open source projects",
    year: "2023-Present",
  },
]

export default function Certifications() {
  return (
    <div className="min-h-screen relative pt-24 pb-16">
      {/* Pulsing gradient background would go here */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Certifications & Achievements</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Interactive certification badges with rotating icons and achievement stars
            </p>
          </div>

          {/* Certifications */}
          <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Professional Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <CertificationBadges
                  key={cert.title}
                  title={cert.title}
                  issuer={cert.issuer}
                  status={cert.status}
                  index={index}
                />
              ))}
            </div>
          </motion.section>

          {/* Achievements */}
          <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Notable Achievements</h2>
            <div className="glass-effect-strong p-8 rounded-2xl">
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-amber-200"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
                      <p className="text-gray-600 text-sm">{achievement.description}</p>
                    </div>
                    <span className="text-amber-600 font-medium text-sm">{achievement.year}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Learning Path */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-effect-strong p-8 rounded-2xl"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Continuous Learning</h2>
            <div className="text-center space-y-4">
              <p className="text-gray-600 max-w-2xl mx-auto">
                I believe in continuous learning and staying updated with the latest technologies. Currently working
                towards multiple certifications to enhance my expertise in cloud computing, DevOps, and modern
                development practices.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <span className="px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 rounded-full text-sm">
                  Cloud Computing
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 rounded-full text-sm">
                  DevOps Practices
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 rounded-full text-sm">
                  Modern Development
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 rounded-full text-sm">
                  System Architecture
                </span>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}
