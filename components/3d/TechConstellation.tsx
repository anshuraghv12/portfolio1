"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import * as THREE from "three"

function ConstellationNode({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.3
    }
  })

  return (
    <Sphere ref={meshRef} position={position} args={[0.05]}>
      <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.5} />
    </Sphere>
  )
}

function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null!)

  const nodes = useMemo(
    () =>
      [
        [-2, 1, -1],
        [2, -1, -2],
        [0, 2, -1.5],
        [-1, -2, -1],
        [1.5, 0, -2.5],
        [-2.5, 0, -2],
        [1, 1.5, -1],
        [0, -1, -3],
      ] as [number, number, number][],
    [],
  )

  const connections = useMemo(
    () => [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 0],
      [0, 2],
      [1, 3],
      [2, 4],
      [3, 5],
      [4, 6],
      [5, 7],
    ],
    [],
  )

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.children.forEach((line, index) => {
        const material = (line as THREE.Line).material as THREE.LineBasicMaterial
        material.opacity = 0.2 + Math.sin(state.clock.elapsedTime + index * 0.5) * 0.1
      })
    }
  })

  return (
    <group ref={linesRef}>
      {connections.map(([startIdx, endIdx], index) => {
        const start = nodes[startIdx]
        const end = nodes[endIdx]
        const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)]
        const geometry = new THREE.BufferGeometry().setFromPoints(points)

        return (
          <line key={index} geometry={geometry}>
            <lineBasicMaterial color="#fbbf24" transparent opacity={0.3} />
          </line>
        )
      })}
    </group>
  )
}

export default function TechConstellation() {
  const nodes = useMemo(
    () =>
      [
        [-2, 1, -1],
        [2, -1, -2],
        [0, 2, -1.5],
        [-1, -2, -1],
        [1.5, 0, -2.5],
        [-2.5, 0, -2],
        [1, 1.5, -1],
        [0, -1, -3],
      ] as [number, number, number][],
    [],
  )

  return (
    <Canvas className="absolute inset-0 -z-10">
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />

      <ConnectionLines />

      {nodes.map((position, index) => (
        <ConstellationNode key={index} position={position} />
      ))}
    </Canvas>
  )
}
