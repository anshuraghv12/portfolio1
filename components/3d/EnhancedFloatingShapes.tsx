"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Box, Octahedron, Torus, Cone } from "@react-three/drei"
import type * as THREE from "three"

function EnhancedFloatingShape({
  position,
  geometry,
  color,
  scale = 1,
}: {
  position: [number, number, number]
  geometry: string
  color: string
  scale?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005 + Math.sin(state.clock.elapsedTime) * 0.005
      meshRef.current.rotation.y += 0.01 + Math.cos(state.clock.elapsedTime) * 0.005
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.8
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.5 + position[2]) * 0.3

      const material = meshRef.current.material as THREE.MeshStandardMaterial
      material.emissiveIntensity = 0.2 + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.1
    }
  })

  const ShapeComponent =
    {
      sphere: Sphere,
      box: Box,
      octahedron: Octahedron,
      torus: Torus,
      cone: Cone,
    }[geometry] || Sphere

  const args = {
    sphere: [0.5 * scale],
    box: [0.5 * scale, 0.5 * scale, 0.5 * scale],
    octahedron: [0.5 * scale],
    torus: [0.3 * scale, 0.1 * scale, 16, 32],
    cone: [0.3 * scale, 0.8 * scale, 8],
  }[geometry] || [0.5 * scale]

  return (
    <ShapeComponent ref={meshRef} position={position} args={args}>
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.8}
        emissive={color}
        emissiveIntensity={0.2}
        roughness={0.3}
        metalness={0.1}
      />
    </ShapeComponent>
  )
}

export default function EnhancedFloatingShapes() {
  const shapes = [
    { position: [-3, 2, -2], geometry: "sphere", color: "#fbbf24", scale: 1.2 },
    { position: [3, -1, -3], geometry: "box", color: "#f59e0b", scale: 0.8 },
    { position: [0, 3, -2], geometry: "octahedron", color: "#d97706", scale: 1.0 },
    { position: [-2, -2, -1], geometry: "torus", color: "#fbbf24", scale: 1.5 },
    { position: [2.5, 1, -2.5], geometry: "cone", color: "#f59e0b", scale: 0.9 },
    { position: [-1, 0, -3], geometry: "sphere", color: "#d97706", scale: 0.7 },
    { position: [1, -3, -1.5], geometry: "box", color: "#fbbf24", scale: 1.1 },
  ] as const

  return (
    <Canvas className="absolute inset-0 -z-10">
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#fbbf24" />
      <pointLight position={[-10, -10, 5]} intensity={0.5} color="#f59e0b" />
      <spotLight position={[0, 10, 0]} intensity={0.3} color="#d97706" />
      {shapes.map((shape, index) => (
        <EnhancedFloatingShape key={index} {...shape} />
      ))}
    </Canvas>
  )
}
