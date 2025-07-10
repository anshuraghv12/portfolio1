"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Volume2, VolumeX, Download, FileText } from "lucide-react"

export default function VolumeDownloadButton() {
  const [volume, setVolume] = useState(50)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number.parseInt(e.target.value))
  }

  const handleDownload = () => {
    if (volume >= 80) {
      setIsDownloading(true)

      // Simulate download process
      setTimeout(() => {
        setIsCompleted(true)
        setIsDownloading(false)

        // Trigger actual download
        const link = document.createElement("a")
        link.href = "/resume.pdf" // Replace with actual resume path
        link.download = "Anshul_Shrivastava_Resume.pdf"
        link.click()

        // Reset after download
        setTimeout(() => {
          setIsCompleted(false)
          setVolume(50)
        }, 2000)
      }, 1500)
    }
  }

  const getVolumeIcon = () => {
    if (volume === 0) return VolumeX
    return Volume2
  }

  const VolumeIcon = getVolumeIcon()

  return (
    <div className="relative">
      <motion.div
        className="glass-effect-strong p-6 rounded-2xl shadow-xl"
        whileHover={{ scale: 1.02 }}
        style={{ width: 320 }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg">
            <FileText className="text-amber-600" size={20} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Resume Download</h3>
            <p className="text-sm text-gray-600">Turn up the volume to download</p>
          </div>
        </div>

        {/* Volume Control */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <VolumeIcon className={`${volume > 0 ? "text-amber-600" : "text-gray-400"} transition-colors`} size={24} />
            <div className="flex-1 relative">
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer volume-slider"
                style={{
                  background: `linear-gradient(to right, #fbbf24 0%, #fbbf24 ${volume}%, #e5e7eb ${volume}%, #e5e7eb 100%)`,
                }}
              />
              <div
                className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-2 border-amber-400 rounded-full shadow-lg pointer-events-none transition-all duration-200"
                style={{
                  left: `calc(${volume}% - 8px)`,
                  boxShadow: volume >= 80 ? "0 0 10px rgba(251, 191, 36, 0.6)" : "0 2px 4px rgba(0,0,0,0.2)",
                }}
              />
            </div>
            <span className="text-sm font-medium text-gray-700 w-8">{volume}</span>
          </div>

          {/* Volume Level Indicator */}
          <div className="flex justify-between text-xs text-gray-500">
            <span>Silent</span>
            <span className={volume >= 80 ? "text-amber-600 font-medium" : ""}>
              {volume >= 80 ? "Download Ready!" : "Max Volume"}
            </span>
          </div>

          {/* Download Button */}
          <motion.button
            onClick={handleDownload}
            disabled={volume < 80 || isDownloading}
            className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              volume >= 80 && !isDownloading
                ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-white hover:from-amber-500 hover:to-yellow-600 cursor-pointer shadow-lg hover:shadow-xl"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
            whileHover={volume >= 80 ? { scale: 1.02 } : {}}
            whileTap={volume >= 80 ? { scale: 0.98 } : {}}
          >
            {isDownloading ? (
              <>
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <span>Downloading...</span>
              </>
            ) : isCompleted ? (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </motion.div>
                <span>Downloaded!</span>
              </>
            ) : (
              <>
                <Download size={20} />
                <span>{volume >= 80 ? "Download Resume" : `Turn volume to 80+ (${volume}/100)`}</span>
              </>
            )}
          </motion.button>

          {/* Progress Visualization */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Progress</span>
              <span>{Math.min(volume, 80)}/80</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min((volume / 80) * 100, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        {/* Fun Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: volume >= 80 ? 1 : 0 }}
          className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg"
        >
          <p className="text-sm text-green-700 text-center font-medium">
            🎉 Perfect! You've reached the download threshold!
          </p>
        </motion.div>
      </motion.div>

      {/* Floating Sound Waves */}
      {volume > 0 && (
        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 bg-amber-400 rounded-full"
              style={{
                height: `${Math.max(volume / 5, 8)}px`,
                right: i * 8,
              }}
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
