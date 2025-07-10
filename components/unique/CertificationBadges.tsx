"use client"

import { motion } from "framer-motion"
import { Award, Star } from "lucide-react"

interface CertBadgeProps {
  title: string
  issuer: string
  status: "completed" | "planned"
  index: number
}

export default function CertificationBadges({ title, issuer, status, index }: CertBadgeProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
    >
      <div
        className={`relative p-6 rounded-2xl border-4 ${
          status === "completed"
            ? "border-green-400 bg-gradient-to-br from-green-50 to-emerald-100"
            : "border-amber-400 bg-gradient-to-br from-amber-50 to-yellow-100"
        }`}
      >
        {/* Badge Ribbon */}
        <div
          className={`absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-bold text-white ${
            status === "completed" ? "bg-green-500" : "bg-amber-500"
          }`}
        >
          {status === "completed" ? "EARNED" : "PLANNED"}
        </div>

        {/* Badge Icon */}
        <div className="flex justify-center mb-4">
          <motion.div
            className={`p-4 rounded-full ${
              status === "completed" ? "bg-green-500 text-white" : "bg-amber-500 text-white"
            }`}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Award size={32} />
          </motion.div>
        </div>

        {/* Badge Content */}
        <div className="text-center space-y-2">
          <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
          <p className="text-gray-600 text-sm">{issuer}</p>
        </div>

        {/* Stars for completed badges */}
        {status === "completed" && (
          <div className="flex justify-center mt-4 gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + i * 0.1 }}
              >
                <Star className="text-yellow-400 fill-current" size={16} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
