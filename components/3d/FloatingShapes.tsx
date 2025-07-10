"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Box, Octahedron } from "@react-three/drei"
import type * as THREE from "three"

function FloatingShape({
  position,
  geometry,
  color,
}: { position: [number, number, number]; geometry: string; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5
    }
  })

  return (
    <>
      {geometry === "sphere" && (
        <Sphere ref={meshRef} position={position} args={[0.5]}>
          <meshStandardMaterial color={color} transparent opacity={0.7} />
        </Sphere>
      )}
      {geometry === "box" && (
        <Box ref={meshRef} position={position} args={[0.5, 0.5, 0.5]}>
          <meshStandardMaterial color={color} transparent opacity={0.7} />
        </Box>
      )}
      {geometry === "octahedron" && (
        <Octahedron ref={meshRef} position={position} args={[0.5]}>
          <meshStandardMaterial color={color} transparent opacity={0.7} />
        </Octahedron>
      )}
    </>
  )
}

export default function FloatingShapes() {
  const shapes = [
    { position: [-2, 1, -1], geometry: "sphere", color: "#fbbf24" },
    { position: [2, -1, -2], geometry: "box", color: "#f59e0b" },
    { position: [0, 2, -1.5], geometry: "octahedron", color: "#d97706" },
    { position: [-1, -2, -1], geometry: "sphere", color: "#fbbf24" },
    { position: [1.5, 0, -2.5], geometry: "box", color: "#f59e0b" },
  ] as const

  return (
    <Canvas className="absolute inset-0 -z-10">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
    </Canvas>
  )
}
