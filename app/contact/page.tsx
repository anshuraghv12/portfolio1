"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, MapPin, Phone, Instagram } from "lucide-react"
import LongPressDownloadButton from "@/components/LongPressDownloadButton"
import ContactFormAnimated from "@/components/unique/ContactFormAnimated"

export default function Contact() {
  return (
    <div className="min-h-screen relative pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Get In Touch</h1>
            <motion.div
              className="glass-effect-strong px-6 py-3 rounded-full inline-block hover-card group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-xl text-gray-600 max-w-2xl mx-auto group-hover:text-amber-600 transition-colors duration-300">
                Interactive contact form with glowing field effects and animated elements
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div
                className="glass-effect p-8 rounded-xl hover-card group cursor-pointer relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                {/* Pulsing background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-yellow-50/50 opacity-0 group-hover:opacity-100 rounded-xl"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />

                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 group-hover:scale-105 transition-transform duration-300">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        label: "Email",
                        value: "anshulshrivastava8055@gmail.com",
                        href: "mailto:anshulshrivastava8055@gmail.com",
                      },
                      { icon: MapPin, label: "Location", value: "Udaipur, Rajasthan, India" },
                      { icon: Phone, label: "Availability", value: "Open to opportunities" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        className="flex items-center gap-4 hover:scale-105 transition-transform duration-300"
                        whileHover={{ x: 10 }}
                      >
                        <motion.div
                          className="p-3 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                        >
                          <item.icon className="text-amber-600" size={20} />
                        </motion.div>
                        <div>
                          <p className="text-gray-600 text-sm">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-gray-800 font-medium hover:text-amber-600 transition-colors cursor-pointer"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-gray-800 font-medium">{item.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div
                className="glass-effect p-8 rounded-xl hover-card group cursor-pointer relative"
                whileHover={{ scale: 1.02 }}
              >
                {/* Corner neon effects */}
                <div className="absolute top-0 left-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-0.5 bg-amber-400"
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  />
                  <motion.div
                    className="absolute top-0 left-0 w-0.5 h-full bg-amber-400"
                    animate={{ height: ["0%", "100%"] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-6 group-hover:scale-105 transition-transform duration-300">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  {[
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      href: "#",
                      color: "from-blue-50 to-blue-100",
                      textColor: "text-blue-700",
                      borderColor: "border-blue-200",
                    },
                    {
                      icon: Github,
                      label: "GitHub",
                      href: "#",
                      color: "from-gray-50 to-gray-100",
                      textColor: "text-gray-700",
                      borderColor: "border-gray-200",
                    },
                    {
                      icon: Instagram,
                      label: "Instagram",
                      href: "https://www.instagram.com/anshulll__8055?igsh=NDZyaWR4dHFiNHNo&utm_source=qr",
                      color: "from-pink-50 to-purple-100",
                      textColor: "text-pink-700",
                      borderColor: "border-pink-200",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`cursor-pointer flex items-center gap-3 p-4 bg-gradient-to-r ${social.color} rounded-lg hover-lift border ${social.borderColor} hover-card group/social relative overflow-hidden`}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                      {/* Glowing effect */}
                      <div className="absolute inset-0 bg-white/30 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <social.icon className={social.textColor} size={20} />
                      </motion.div>
                      <span className={`${social.textColor} font-medium relative z-10`}>{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Enhanced Resume Download */}
              <div className="flex justify-center">
                <div className="hover-card">
                  <LongPressDownloadButton />
                </div>
              </div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <ContactFormAnimated />
            </motion.div>
          </div>

          {/* Enhanced Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-effect p-8 rounded-xl text-center hover-card group cursor-pointer relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-yellow-500/10 to-amber-400/10 opacity-0 group-hover:opacity-100 rounded-xl"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(251,191,36,0.1), rgba(245,158,11,0.1))",
                  "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(217,119,6,0.1))",
                  "linear-gradient(225deg, rgba(217,119,6,0.1), rgba(251,191,36,0.1))",
                  "linear-gradient(315deg, rgba(251,191,36,0.1), rgba(245,158,11,0.1))",
                ],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:scale-105 transition-transform duration-300">
                Ready to Work Together?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6 group-hover:text-gray-700 transition-colors duration-300">
                I'm always interested in new opportunities, whether it's a full-time position, freelance project, or
                collaboration. Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="cursor-pointer bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-8 py-3 rounded-full hover-lift font-semibold relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Hire Me</span>
                </motion.button>
                <motion.button
                  className="cursor-pointer glass-effect px-8 py-3 rounded-full hover-lift text-gray-800 font-semibold border border-gray-200 hover-card group/btn relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="group-hover/btn:text-amber-600 transition-colors duration-300">View My Work</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
