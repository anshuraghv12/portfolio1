"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { Target, FileText, Zap, CheckCircle } from "lucide-react"

export default function TriggerDownloadButton() {
  const [isArmed, setIsArmed] = useState(false)
  const [isTriggered, setIsTriggered] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [pressure, setPressure] = useState(0)

  const buttonRef = useRef<HTMLButtonElement>(null)
  const pressureValue = useMotionValue(0)
  const triggerProgress = useTransform(pressureValue, [0, 100], [0, 100])

  const handleMouseDown = () => {
    if (!isArmed) return

    setIsTriggered(true)
    const interval = setInterval(() => {
      setPressure((prev) => {
        const newPressure = prev + 5
        pressureValue.set(newPressure)

        if (newPressure >= 100) {
          clearInterval(interval)
          handleTriggerPull()
          return 100
        }
        return newPressure
      })
    }, 50)

    const handleMouseUp = () => {
      clearInterval(interval)
      if (pressure < 100) {
        setPressure(0)
        pressureValue.set(0)
        setIsTriggered(false)
      }
      document.removeEventListener("mouseup", handleMouseUp)
    }

    document.addEventListener("mouseup", handleMouseUp)
  }

  const handleTriggerPull = () => {
    setIsDownloading(true)

    // Simulate download
    setTimeout(() => {
      setIsCompleted(true)
      setIsDownloading(false)

      // Trigger actual download
      const link = document.createElement("a")
      link.href = "/resume.pdf"
      link.download = "Anshul_Shrivastava_Resume.pdf"
      link.click()

      // Reset after download
      setTimeout(() => {
        setIsCompleted(false)
        setIsArmed(false)
        setIsTriggered(false)
        setPressure(0)
        pressureValue.set(0)
      }, 3000)
    }, 2000)
  }

  const armTrigger = () => {
    setIsArmed(true)
  }

  return (
    <div className="relative">
      <motion.div
        className="glass-effect-strong p-8 rounded-2xl shadow-2xl"
        style={{ width: 350 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg">
            <Target className="text-red-600" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">Resume Download Trigger</h3>
            <p className="text-sm text-gray-600">Arm and pull the trigger to download</p>
          </div>
        </div>

        {/* Status Display */}
        <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Status:</span>
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  isCompleted
                    ? "bg-green-500"
                    : isDownloading
                      ? "bg-blue-500 animate-pulse"
                      : isArmed
                        ? "bg-red-500 animate-pulse"
                        : "bg-gray-400"
                }`}
              />
              <span className="text-sm font-medium">
                {isCompleted
                  ? "Downloaded"
                  : isDownloading
                    ? "Downloading..."
                    : isArmed
                      ? "Armed & Ready"
                      : "Safe Mode"}
              </span>
            </div>
          </div>

          {/* Pressure Gauge */}
          {isArmed && (
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-600">
                <span>Trigger Pressure</span>
                <span>{Math.round(pressure)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-full"
                  style={{ width: `${pressure}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Safety Switch */}
        {!isArmed && !isCompleted && (
          <motion.div
            className="mb-6 p-4 border-2 border-dashed border-amber-300 rounded-xl bg-amber-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-center space-y-3">
              <div className="text-amber-600">
                <Zap size={32} className="mx-auto" />
              </div>
              <p className="text-sm text-amber-700 font-medium">Safety is ON. Arm the trigger to enable download.</p>
              <motion.button
                onClick={armTrigger}
                className="cursor-pointer bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-amber-500 hover:to-yellow-600 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ARM TRIGGER
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Trigger Button */}
        {isArmed && !isCompleted && (
          <motion.div className="relative mb-6" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
            <motion.button
              ref={buttonRef}
              onMouseDown={handleMouseDown}
              disabled={isDownloading}
              className={`w-full h-20 rounded-xl font-bold text-lg transition-all duration-200 relative overflow-hidden ${
                isDownloading
                  ? "bg-blue-500 text-white cursor-not-allowed"
                  : isTriggered
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/50"
                    : "bg-gradient-to-r from-red-400 to-red-500 text-white hover:from-red-500 hover:to-red-600 cursor-pointer shadow-lg hover:shadow-red-500/30"
              }`}
              whileHover={!isDownloading ? { scale: 1.02 } : {}}
              whileTap={!isDownloading ? { scale: 0.98 } : {}}
              style={{
                boxShadow: isTriggered ? `0 0 30px rgba(239, 68, 68, ${pressure / 100})` : undefined,
              }}
            >
              {/* Background pulse effect */}
              {isTriggered && (
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.2, 0] }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                />
              )}

              {/* Button content */}
              <div className="relative z-10 flex items-center justify-center gap-3">
                {isDownloading ? (
                  <>
                    <motion.div
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                    <span>DOWNLOADING...</span>
                  </>
                ) : (
                  <>
                    <Target size={24} />
                    <span>PULL TRIGGER</span>
                  </>
                )}
              </div>

              {/* Trigger progress overlay */}
              {isTriggered && (
                <motion.div className="absolute bottom-0 left-0 h-1 bg-white" style={{ width: `${pressure}%` }} />
              )}
            </motion.button>

            {/* Warning text */}
            <motion.p
              className="text-center text-xs text-red-600 mt-2 font-medium"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              Hold down to charge • Release at 100% to fire
            </motion.p>
          </motion.div>
        )}

        {/* Success State */}
        {isCompleted && (
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <motion.div
              className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <CheckCircle className="text-white" size={32} />
            </motion.div>
            <div>
              <h4 className="text-lg font-bold text-green-600">Target Acquired!</h4>
              <p className="text-sm text-gray-600">Resume downloaded successfully</p>
            </div>
          </motion.div>
        )}

        {/* Instructions */}
        {!isCompleted && (
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <FileText size={16} />
              <span>Anshul_Shrivastava_Resume.pdf</span>
            </div>
            <p className="text-xs text-gray-500">
              {!isArmed
                ? "Arm the trigger first, then hold to charge and download"
                : "Hold the trigger button until 100% to download"}
            </p>
          </div>
        )}
      </motion.div>

      {/* Floating sparks effect when triggered */}
      {isTriggered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full"
              initial={{
                x: 175,
                y: 100,
                scale: 0,
              }}
              animate={{
                x: 175 + (Math.random() - 0.5) * 100,
                y: 100 + (Math.random() - 0.5) * 100,
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
