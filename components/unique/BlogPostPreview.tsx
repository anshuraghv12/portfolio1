"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Eye, Heart } from "lucide-react"
import { useState } from "react"

interface BlogPreviewProps {
  title: string
  excerpt: string
  category: string
  readTime: string
  index: number
}

export default function BlogPostPreview({ title, excerpt, category, readTime, index }: BlogPreviewProps) {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 50) + 10)
  const [views, setViews] = useState(Math.floor(Math.random() * 200) + 50)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  return (
    <motion.article
      className="glass-effect-strong rounded-xl overflow-hidden hover-lift cursor-pointer group"
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{
        scale: 1.02,
        rotateX: 5,
        boxShadow: "0 25px 50px rgba(251, 191, 36, 0.2)",
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Header with floating category */}
      <div className="relative p-6 pb-4">
        <motion.div
          className="absolute -top-3 left-6 px-4 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-white rounded-full text-sm font-bold shadow-lg"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          {category}
        </motion.div>

        <div className="mt-4">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors mb-3">{title}</h3>
          <p className="text-gray-600 leading-relaxed line-clamp-3">{excerpt}</p>
        </div>
      </div>

      {/* Interactive Stats Bar */}
      <div className="px-6 py-4 bg-gradient-to-r from-amber-50 to-yellow-50 border-t border-amber-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>Coming Soon</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{readTime}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <motion.div className="flex items-center gap-1 text-sm text-gray-600" whileHover={{ scale: 1.1 }}>
              <Eye size={14} />
              <span>{views}</span>
            </motion.div>

            <motion.button
              onClick={handleLike}
              className={`flex items-center gap-1 text-sm transition-colors ${
                isLiked ? "text-red-500" : "text-gray-600 hover:text-red-500"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div animate={{ scale: isLiked ? [1, 1.3, 1] : 1 }} transition={{ duration: 0.3 }}>
                <Heart size={14} fill={isLiked ? "currentColor" : "none"} />
              </motion.div>
              <span>{likes}</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.article>
  )
}
