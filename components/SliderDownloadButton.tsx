"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useTransform, type PanInfo } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

export default function SliderDownloadButton() {
  const [isSliding, setIsSliding] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const constraintsRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const buttonWidth = 280
  const sliderWidth = 60
  const maxSlide = buttonWidth - sliderWidth - 8 // 8px for padding

  const progress = useTransform(x, [0, maxSlide], [0, 100])
  const backgroundColor = useTransform(progress, [0, 50, 100], ["#fbbf24", "#f59e0b", "#10b981"])
  const textOpacity = useTransform(progress, [0, 30, 70, 100], [1, 0.5, 0.2, 0])
  const checkOpacity = useTransform(progress, [80, 100], [0, 1])

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const currentProgress = (x.get() / maxSlide) * 100

    if (currentProgress >= 90) {
      // Complete the slide
      x.set(maxSlide)
      setIsCompleted(true)
      setIsDownloading(true)

      // Simulate download
      setTimeout(() => {
        setIsDownloading(false)
        // Here you would trigger the actual download
        console.log("Downloading resume...")

        // Reset after download
        setTimeout(() => {
          x.set(0)
          setIsCompleted(false)
          setIsSliding(false)
        }, 1500)
      }, 2000)
    } else {
      // Snap back to start
      x.set(0)
      setIsSliding(false)
    }
  }

  const handleDragStart = () => {
    setIsSliding(true)
  }

  return (
    <div className="relative">
      <motion.div
        ref={constraintsRef}
        className="relative overflow-hidden rounded-full border-2 border-amber-300 bg-gradient-to-r from-amber-100 to-yellow-100 shadow-lg"
        style={{
          width: buttonWidth,
          height: 64,
        }}
      >
        {/* Background fill */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: backgroundColor,
            opacity: 0.8,
          }}
        />

        {/* Progress track */}
        <motion.div
          className="absolute top-1 left-1 bottom-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"
          style={{
            width: useTransform(progress, [0, 100], [0, maxSlide + sliderWidth]),
          }}
        />

        {/* Text content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.span className="text-gray-700 font-semibold text-lg select-none" style={{ opacity: textOpacity }}>
            {isSliding ? "Keep sliding..." : "Slide to Download Resume"}
          </motion.span>

          <motion.div
            className="absolute flex items-center gap-2 text-white font-bold"
            style={{ opacity: checkOpacity }}
          >
            {isDownloading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Downloading...</span>
              </>
            ) : (
              <>
                <Check size={20} />
                <span>Downloaded!</span>
              </>
            )}
          </motion.div>
        </div>

        {/* Slider handle */}
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0}
          dragMomentum={false}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{ x }}
          className="absolute top-1 left-1 w-14 h-14 bg-white rounded-full shadow-lg cursor-grab active:cursor-grabbing flex items-center justify-center border-2 border-amber-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{
              rotate: isSliding ? 360 : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            {isCompleted ? (
              <Check className="text-green-600" size={24} />
            ) : (
              <motion.div
                animate={{
                  x: isSliding ? [0, 3, 0] : 0,
                }}
                transition={{
                  duration: 0.6,
                  repeat: isSliding ? Number.POSITIVE_INFINITY : 0,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="text-amber-600" size={24} />
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
          animate={{
            x: isSliding ? ["-100%", "100%"] : "-100%",
          }}
          transition={{
            duration: 1.5,
            repeat: isSliding ? Number.POSITIVE_INFINITY : 0,
            ease: "linear",
          }}
          style={{
            width: "30%",
            transform: "skewX(-20deg)",
          }}
        />
      </motion.div>

      {/* Instructions */}
      <motion.p
        className="text-center text-sm text-gray-500 mt-3"
        animate={{
          opacity: isCompleted ? 0 : 1,
        }}
      >
        Drag the slider to the right to download
      </motion.p>
    </div>
  )
}
