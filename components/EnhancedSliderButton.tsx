"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useTransform, type PanInfo } from "framer-motion"
import { Download, Check, FileText } from "lucide-react"

export default function EnhancedSliderButton() {
  const [isSliding, setIsSliding] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const constraintsRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const buttonWidth = 320
  const sliderWidth = 70
  const maxSlide = buttonWidth - sliderWidth - 8

  const progress = useTransform(x, [0, maxSlide], [0, 100])
  const backgroundColor = useTransform(
    progress,
    [0, 30, 70, 100],
    ["rgba(251, 191, 36, 0.1)", "rgba(245, 158, 11, 0.3)", "rgba(217, 119, 6, 0.5)", "rgba(16, 185, 129, 0.8)"],
  )
  const borderColor = useTransform(progress, [0, 100], ["#fbbf24", "#10b981"])
  const textOpacity = useTransform(progress, [0, 40, 100], [1, 0.3, 0])
  const successOpacity = useTransform(progress, [70, 100], [0, 1])

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const currentProgress = (x.get() / maxSlide) * 100

    if (currentProgress >= 85) {
      x.set(maxSlide)
      setIsCompleted(true)
      setIsDownloading(true)

      setTimeout(() => {
        setIsDownloading(false)
        // Trigger actual download here
        const link = document.createElement("a")
        link.href = "/resume.pdf" // Replace with actual resume path
        link.download = "Anshul_Shrivastava_Resume.pdf"
        link.click()

        setTimeout(() => {
          x.set(0)
          setIsCompleted(false)
          setIsSliding(false)
        }, 2000)
      }, 1500)
    } else {
      x.set(0)
      setIsSliding(false)
    }
  }

  return (
    <div className="relative">
      <motion.div
        ref={constraintsRef}
        className="relative overflow-hidden rounded-full shadow-2xl backdrop-blur-sm"
        style={{
          width: buttonWidth,
          height: 72,
          background: backgroundColor,
          borderWidth: 2,
          borderColor: borderColor,
          borderStyle: "solid",
        }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: isSliding ? ["0% 0%", "100% 100%"] : "0% 0%",
            }}
            transition={{
              duration: 2,
              repeat: isSliding ? Number.POSITIVE_INFINITY : 0,
              ease: "linear",
            }}
            style={{
              backgroundImage: "linear-gradient(45deg, #fbbf24 25%, transparent 25%, transparent 75%, #fbbf24 75%)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* Progress fill */}
        <motion.div
          className="absolute top-1 left-1 bottom-1 rounded-full"
          style={{
            width: useTransform(progress, [0, 100], [0, maxSlide + sliderWidth]),
            background: "linear-gradient(90deg, #fbbf24, #f59e0b, #d97706)",
            opacity: 0.6,
          }}
        />

        {/* Main text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div className="flex items-center gap-3" style={{ opacity: textOpacity }}>
            <FileText className="text-gray-700" size={20} />
            <span className="text-gray-700 font-bold text-lg select-none">
              {isSliding ? "Almost there..." : "Slide to Download Resume"}
            </span>
          </motion.div>

          <motion.div
            className="absolute flex items-center gap-3 text-white font-bold text-lg"
            style={{ opacity: successOpacity }}
          >
            {isDownloading ? (
              <>
                <motion.div
                  className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <span>Preparing Download...</span>
              </>
            ) : (
              <>
                <Check size={24} />
                <span>Resume Downloaded!</span>
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
          onDragStart={() => setIsSliding(true)}
          onDragEnd={handleDragEnd}
          style={{ x }}
          className="absolute top-1 left-1 w-16 h-16 bg-white rounded-full shadow-xl cursor-grab active:cursor-grabbing flex items-center justify-center border-3 border-amber-300 z-10"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(251, 191, 36, 0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{
              rotate: isSliding ? [0, 360] : 0,
              scale: isSliding ? [1, 1.1, 1] : 1,
            }}
            transition={{
              rotate: { duration: 1, repeat: isSliding ? Number.POSITIVE_INFINITY : 0, ease: "linear" },
              scale: { duration: 0.5, repeat: isSliding ? Number.POSITIVE_INFINITY : 0, ease: "easeInOut" },
            }}
          >
            {isCompleted ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <Check className="text-green-600" size={28} />
              </motion.div>
            ) : (
              <motion.div
                animate={{
                  x: isSliding ? [0, 4, 0] : 0,
                }}
                transition={{
                  duration: 0.8,
                  repeat: isSliding ? Number.POSITIVE_INFINITY : 0,
                  ease: "easeInOut",
                }}
              >
                <Download className="text-amber-600" size={28} />
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Particle effects */}
        {isSliding && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-amber-400 rounded-full"
                initial={{
                  x: Math.random() * buttonWidth,
                  y: Math.random() * 72,
                  opacity: 0,
                }}
                animate={{
                  x: Math.random() * buttonWidth,
                  y: Math.random() * 72,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        )}

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 pointer-events-none"
          animate={{
            x: isSliding ? ["-100%", "100%"] : "-100%",
          }}
          transition={{
            duration: 1.2,
            repeat: isSliding ? Number.POSITIVE_INFINITY : 0,
            ease: "easeInOut",
          }}
          style={{
            width: "40%",
            transform: "skewX(-15deg)",
          }}
        />
      </motion.div>

      {/* Progress indicator */}
      <motion.div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden" style={{ width: buttonWidth }}>
        <motion.div
          className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"
          style={{
            width: useTransform(progress, [0, 100], ["0%", "100%"]),
          }}
        />
      </motion.div>

      {/* Instructions */}
      <motion.p
        className="text-center text-sm text-gray-500 mt-3 font-medium"
        animate={{
          opacity: isCompleted ? 0 : 1,
          y: isCompleted ? 10 : 0,
        }}
      >
        {isSliding ? "Keep dragging to complete download" : "Drag the handle to the right →"}
      </motion.p>
    </div>
  )
}
