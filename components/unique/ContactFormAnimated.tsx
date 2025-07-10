"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Send, User, Mail, MessageSquare, Sparkles } from "lucide-react"

export default function ContactFormAnimated() {
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const getFieldIcon = (field: string) => {
    switch (field) {
      case "firstName":
      case "lastName":
        return <User size={16} />
      case "email":
        return <Mail size={16} />
      case "subject":
        return <MessageSquare size={16} />
      default:
        return <Sparkles size={16} />
    }
  }

  return (
    <motion.div
      className="glass-effect-strong p-8 rounded-xl relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-6 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Send Me a Message
        </motion.h2>

        <form className="space-y-6">
          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            {["firstName", "lastName"].map((field, index) => (
              <motion.div
                key={field}
                className="relative"
                initial={{ x: index === 0 ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                  {getFieldIcon(field)}
                  {field === "firstName" ? "First Name" : "Last Name"}
                </label>
                <motion.input
                  type="text"
                  value={formData[field as keyof typeof formData]}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                  onFocus={() => setFocusedField(field)}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  placeholder={field === "firstName" ? "John" : "Doe"}
                  whileFocus={{ scale: 1.02 }}
                  animate={{
                    borderColor: focusedField === field ? "#fbbf24" : "#d1d5db",
                    boxShadow: focusedField === field ? "0 0 0 3px rgba(251, 191, 36, 0.1)" : "none",
                  }}
                />
                {focusedField === field && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Email Field */}
          <motion.div
            className="relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              {getFieldIcon("email")}
              Email
            </label>
            <motion.input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
              placeholder="john@example.com"
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>

          {/* Subject Field */}
          <motion.div
            className="relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              {getFieldIcon("subject")}
              Subject
            </label>
            <motion.input
              type="text"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
              placeholder="Project Collaboration"
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            className="relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              <MessageSquare size={16} />
              Message
            </label>
            <motion.textarea
              rows={6}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none transition-all"
              placeholder="Tell me about your project or opportunity..."
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="cursor-pointer w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-white py-3 rounded-lg hover-lift font-semibold transition-all flex items-center justify-center gap-2 relative overflow-hidden"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <Send size={20} />
            <span className="relative z-10">Send Message</span>
          </motion.button>
        </form>
      </div>
    </motion.div>
  )
}
