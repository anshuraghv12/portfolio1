"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

interface TimelineItemProps {
  degree: string
  institution: string
  period: string
  location: string
  status: string
  index: number
  isLast: boolean
}

export default function EducationTimeline({
  degree,
  institution,
  period,
  location,
  status,
  index,
  isLast,
}: TimelineItemProps) {
  return (
    <div className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <motion.div
          className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-amber-400 to-amber-200"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: index * 0.3 + 0.5, duration: 0.8 }}
        />
      )}

      {/* Timeline Node */}
      <motion.div
        className="absolute left-6 top-6 w-4 h-4 bg-amber-400 rounded-full border-4 border-white shadow-lg z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.3, type: "spring", stiffness: 200 }}
      />

      {/* Content Card */}
      <motion.div
        className="ml-16 glass-effect-strong p-6 rounded-xl hover-lift"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.3 + 0.2 }}
        whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(251, 191, 36, 0.2)" }}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              className="p-3 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <GraduationCap className="text-amber-600" size={24} />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{degree}</h3>
              <p className="text-gray-600 font-medium">{institution}</p>
            </div>
          </div>
          <motion.span
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              status === "Completed" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
            }`}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            {status}
          </motion.span>
        </div>

        <div className="flex gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        </div>

        {/* Progress Bar for current education */}
        {status === "In Progress" && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Progress</span>
              <span>60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ delay: index * 0.3 + 0.8, duration: 1.5 }}
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
