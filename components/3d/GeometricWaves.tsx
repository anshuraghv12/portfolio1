"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Plane } from "@react-three/drei"
import type * as THREE from "three"

function WavePlane({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      const geometry = meshRef.current.geometry as THREE.PlaneGeometry
      const positionAttribute = geometry.attributes.position

      for (let i = 0; i < positionAttribute.count; i++) {
        const x = positionAttribute.getX(i)
        const y = positionAttribute.getY(i)
        const wave = Math.sin(x * 0.5 + state.clock.elapsedTime) * Math.cos(y * 0.5 + state.clock.elapsedTime) * 0.3
        positionAttribute.setZ(i, wave)
      }
      positionAttribute.needsUpdate = true

      meshRef.current.rotation.z += 0.002
    }
  })

  return (
    <Plane ref={meshRef} position={position} args={[8, 8, 32, 32]} rotation={[-Math.PI / 4, 0, 0]}>
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.3}
        wireframe
        emissive={color}
        emissiveIntensity={0.1}
      />
    </Plane>
  )
}

export default function GeometricWaves() {
  return (
    <Canvas className="absolute inset-0 -z-10">
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#fbbf24" />
      <WavePlane position={[0, 0, -3]} color="#fbbf24" />
      <WavePlane position={[0, 0, -5]} color="#f59e0b" />
      <WavePlane position={[0, 0, -7]} color="#d97706" />
    </Canvas>
  )
}
