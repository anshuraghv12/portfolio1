"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github } from "lucide-react"

export default function FloatingContactLinks() {
  const contactLinks = [
    {
      icon: Mail,
      href: "mailto:anshulshrivastava8055@gmail.com",
      color: "from-red-400 to-red-600",
      label: "Email",
    },
    {
      icon: Linkedin,
      href: "#",
      color: "from-blue-400 to-blue-600",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "#",
      color: "from-gray-400 to-gray-600",
      label: "GitHub",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="fixed bottom-8 left-8 z-30 flex flex-col items-center gap-4"
    >
      {/* Logo/Brand */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2.2, type: "spring", stiffness: 200, damping: 15 }}
        className="glass-effect-strong p-4 rounded-full mb-2"
      >
        <div className="text-2xl font-bold gradient-text">AS</div>
      </motion.div>

      {/* Contact Links */}
      <div className="flex flex-col gap-3">
        {contactLinks.map(({ icon: Icon, href, color, label }, index) => (
          <motion.a
            key={label}
            href={href}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.4 + index * 0.1, duration: 0.6 }}
            whileHover={{
              scale: 1.15,
              x: 10,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            whileTap={{ scale: 0.9 }}
            className={`cursor-pointer glass-effect-strong p-3 rounded-full hover-glow bg-gradient-to-r ${color} text-white shadow-lg group relative`}
            title={label}
          >
            <Icon size={20} />

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none"
            >
              {label}
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
            </motion.div>
          </motion.a>
        ))}
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        className="w-0.5 h-16 bg-gradient-to-t from-amber-400 to-transparent rounded-full mt-2"
      />
    </motion.div>
  )
}
