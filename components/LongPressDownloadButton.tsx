"use client"

import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { Download, FileText, Clock, CheckCircle } from "lucide-react"

export default function LongPressDownloadButton() {
  const [isPressed, setIsPressed] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(3)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const PRESS_DURATION = 3000 // 3 seconds

  const startPress = useCallback(() => {
    if (isDownloading || isCompleted) return

    setIsPressed(true)
    setProgress(0)
    setTimeRemaining(3)

    const startTime = Date.now()

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / PRESS_DURATION) * 100, 100)
      const remaining = Math.max(Math.ceil((PRESS_DURATION - elapsed) / 1000), 0)

      setProgress(newProgress)
      setTimeRemaining(remaining)

      if (newProgress >= 100) {
        handleDownload()
      }
    }, 50)

    // Fallback timeout
    timeoutRef.current = setTimeout(() => {
      handleDownload()
    }, PRESS_DURATION)
  }, [isDownloading, isCompleted])

  const stopPress = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    if (progress < 100) {
      setIsPressed(false)
      setProgress(0)
      setTimeRemaining(3)
    }
  }, [progress])

  const handleDownload = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    setIsPressed(false)
    setIsDownloading(true)
    setProgress(100)

    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false)
      setIsCompleted(true)

      // Trigger actual download
      const link = document.createElement("a")
      link.href = "/resume.pdf"
      link.download = "Anshul_Shrivastava_Resume.pdf"
      link.click()

      // Reset after success message
      setTimeout(() => {
        setIsCompleted(false)
        setProgress(0)
        setTimeRemaining(3)
      }, 3000)
    }, 1500)
  }, [])

  const getButtonContent = () => {
    if (isCompleted) {
      return (
        <motion.div
          className="flex items-center gap-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="text-green-600" size={24} />
          <span className="text-green-600 font-bold">Downloaded Successfully!</span>
        </motion.div>
      )
    }

    if (isDownloading) {
      return (
        <div className="flex items-center gap-3">
          <motion.div
            className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <span className="text-blue-600 font-bold">Preparing Download...</span>
        </div>
      )
    }

    if (isPressed) {
      return (
        <div className="flex items-center gap-3">
          <Clock className="text-white" size={24} />
          <span className="text-white font-bold">Hold for {timeRemaining}s...</span>
        </div>
      )
    }

    return (
      <div className="flex items-center gap-3">
        <Download className="text-white" size={24} />
        <span className="text-white font-bold">Press & Hold to Download</span>
      </div>
    )
  }

  const getButtonStyle = () => {
    if (isCompleted) {
      return "bg-gradient-to-r from-green-400 to-green-600 cursor-default"
    }
    if (isDownloading) {
      return "bg-gradient-to-r from-blue-400 to-blue-600 cursor-wait"
    }
    if (isPressed) {
      return "bg-gradient-to-r from-orange-500 to-red-600 cursor-pointer"
    }
    return "bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 cursor-pointer"
  }

  return (
    <div className="relative">
      <motion.div
        className="glass-effect-strong p-8 rounded-2xl shadow-2xl"
        style={{ width: 380 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg">
            <FileText className="text-amber-600" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">Resume Download</h3>
            <p className="text-sm text-gray-600">Press and hold the button for 3 seconds</p>
          </div>
        </div>

        {/* Progress Ring */}
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32">
            {/* Background circle */}
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-gray-200"
              />
              {/* Progress circle */}
              <motion.circle
                cx="60"
                cy="60"
                r="50"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                className={
                  isCompleted
                    ? "text-green-500"
                    : isDownloading
                      ? "text-blue-500"
                      : isPressed
                        ? "text-orange-500"
                        : "text-amber-500"
                }
                style={{
                  strokeDasharray: 314, // 2 * π * 50
                  strokeDashoffset: 314 - (314 * progress) / 100,
                }}
                transition={{ duration: 0.1 }}
              />
            </svg>

            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">{Math.round(progress)}%</div>
                <div className="text-xs text-gray-600">
                  {isCompleted ? "Complete" : isDownloading ? "Loading" : isPressed ? "Hold..." : "Ready"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Long Press Button */}
        <motion.button
          onMouseDown={startPress}
          onMouseUp={stopPress}
          onMouseLeave={stopPress}
          onTouchStart={startPress}
          onTouchEnd={stopPress}
          disabled={isDownloading}
          className={`w-full h-16 rounded-xl font-bold text-lg transition-all duration-200 relative overflow-hidden shadow-lg ${getButtonStyle()}`}
          whileHover={!isDownloading && !isCompleted ? { scale: 1.02 } : {}}
          whileTap={!isDownloading && !isCompleted ? { scale: 0.98 } : {}}
          style={{
            boxShadow: isPressed ? `0 0 30px rgba(251, 191, 36, ${progress / 100})` : "0 4px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Progress overlay */}
          <motion.div
            className="absolute inset-0 bg-white/20"
            style={{
              width: `${progress}%`,
            }}
            transition={{ duration: 0.1 }}
          />

          {/* Ripple effect when pressed */}
          {isPressed && (
            <motion.div
              className="absolute inset-0 bg-white/10 rounded-xl"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
            />
          )}

          {/* Button content */}
          <div className="relative z-10">{getButtonContent()}</div>
        </motion.button>

        {/* Instructions */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <FileText size={16} />
            <span>Anshul_Shrivastava_Resume.pdf</span>
          </div>

          {!isCompleted && !isDownloading && (
            <div className="text-center space-y-2">
              <p className="text-xs text-gray-500">
                {isPressed
                  ? `Keep holding... ${timeRemaining} seconds remaining`
                  : "Press and hold the button for 3 seconds to start download"}
              </p>
              <div className="flex justify-center gap-4 text-xs text-gray-400">
                <span>🖱️ Mouse: Click & Hold</span>
                <span>📱 Touch: Tap & Hold</span>
              </div>
            </div>
          )}

          {isCompleted && (
            <motion.div
              className="text-center p-3 bg-green-50 border border-green-200 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-sm text-green-700 font-medium">
                🎉 Resume downloaded successfully! Check your downloads folder.
              </p>
            </motion.div>
          )}
        </div>

        {/* Visual feedback indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-2 h-2 rounded-full ${progress > (i + 1) * 33 ? "bg-amber-500" : "bg-gray-300"}`}
              animate={{
                scale: isPressed && progress > (i + 1) * 33 ? [1, 1.3, 1] : 1,
              }}
              transition={{
                duration: 0.5,
                repeat: isPressed && progress > (i + 1) * 33 ? Number.POSITIVE_INFINITY : 0,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating particles when pressed */}
      {isPressed && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-400 rounded-full"
              initial={{
                x: 190,
                y: 150,
                scale: 0,
              }}
              animate={{
                x: 190 + (Math.random() - 0.5) * 200,
                y: 150 + (Math.random() - 0.5) * 200,
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
