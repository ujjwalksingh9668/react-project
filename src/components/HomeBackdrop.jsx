import { Canvas } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'

function BackdropOrb() {
  return (
    <>
      <Float speed={1.05} rotationIntensity={0.45} floatIntensity={0.55}>
        <mesh position={[-0.9, 4.9, -8.5]}>
          <sphereGeometry args={[0.58, 32, 32]} />
          <meshStandardMaterial color="#80dcff" emissive="#1d8dff" emissiveIntensity={1} roughness={0.16} metalness={0.82} />
        </mesh>
      </Float>

      <Float speed={0.82} rotationIntensity={0.75} floatIntensity={0.45}>
        <mesh position={[0.75, 4.55, -9]}>
          <icosahedronGeometry args={[0.34, 0]} />
          <meshStandardMaterial color="#9a58ff" emissive="#7a3dff" emissiveIntensity={1.15} roughness={0.18} metalness={0.88} />
        </mesh>
      </Float>
    </>
  )
}

export default function HomeBackdrop() {
  return (
    <div className="app-backdrop" aria-hidden="true">
      <div className="app-backdrop__halo" />
      <div className="app-backdrop__vignette" />

      <Canvas camera={{ position: [0, 0, 18], fov: 40 }} className="app-backdrop__canvas">
        <ambientLight intensity={0.32} />
        <pointLight position={[0, 5, 10]} intensity={1.2} color="#7bd8ff" />
        <pointLight position={[1.6, 4.2, 8]} intensity={0.7} color="#8f57ff" />
        <Stars radius={150} depth={80} count={900} factor={4.4} saturation={0} fade speed={0.35} />
        <BackdropOrb />
      </Canvas>
    </div>
  )
}
