"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import type * as THREE from "three"

function GlowingSphere({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.MeshStandardMaterial
      material.opacity = 0.3 + Math.sin(state.clock.elapsedTime + position[0]) * 0.2
      meshRef.current.scale.setScalar(scale + Math.sin(state.clock.elapsedTime * 0.5 + position[1]) * 0.1)
    }
  })

  return (
    <Sphere ref={meshRef} position={position} args={[1]}>
      <meshStandardMaterial color="#fbbf24" transparent opacity={0.3} emissive="#f59e0b" emissiveIntensity={0.2} />
    </Sphere>
  )
}

export default function GlowingShapes() {
  const spheres = [
    { position: [-3, 2, -2], scale: 1.2 },
    { position: [3, -1, -3], scale: 0.8 },
    { position: [0, 0, -4], scale: 1.5 },
    { position: [-1, -2, -1], scale: 0.9 },
    { position: [2, 1, -2.5], scale: 1.1 },
  ] as const

  return (
    <Canvas className="absolute inset-0 -z-10">
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.5} />
      {spheres.map((sphere, index) => (
        <GlowingSphere key={index} {...sphere} />
      ))}
    </Canvas>
  )
}
