import { Canvas } from '@react-three/fiber'
import { Float, Html, OrbitControls, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'

const labItems = [
  { title: 'Robot', label: 'Autonomous Robotics', detail: 'Motion systems, sensor fusion, and next-gen humanoid exploration.' },
  { title: 'Drone', label: 'Aerial Innovation', detail: 'High-speed flight, precision control, and delivery-grade design.' },
  { title: 'Satellite', label: 'Orbit Systems', detail: 'Space-ready architecture, communication arrays, and mission control.' },
]

function Model({ variant }) {
  return (
    <mesh>
      {variant === 'Robot' ? <boxGeometry args={[2.2, 3.2, 1.2]} /> : variant === 'Drone' ? <boxGeometry args={[3.2, 0.4, 2.4]} /> : <cylinderGeometry args={[1.4, 1.4, 2.8, 24]} />}
      <meshStandardMaterial color={variant === 'Drone' ? '#8c6dff' : variant === 'Satellite' ? '#52f0ff' : '#7be2ff'} emissiveOpacity={0.45} metalness={0.9} roughness={0.18} />
    </mesh>
  )
}

export default function TechLab() {
  return (
    <section id="lab" className="section-frame page-section relative overflow-hidden py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="section-headline mb-16 text-center">
          <p className="section-label">Tech Lab</p>
          <h2 className="section-title text-white mt-4">Interactive 3D models for robots, drones and satellites.</h2>
          <p className="section-copy mx-auto max-w-2xl mt-6">
            Hover over each model to see motion, then click to unlock details from the most advanced engineering tracks.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {labItems.map((item, index) => (
            <motion.div key={item.title} whileHover={{ y: -10 }} className="glass-panel group overflow-hidden rounded-2xl border border-cyan-300/15 bg-[#060816]/90 p-6 shadow-[0_40px_120px_-90px_rgba(66,218,255,0.22)] hover:border-cyan-300/30 transition">
              <div className="relative min-h-[320px] overflow-hidden rounded-xl border border-white/5 bg-[#02040f]/80">
                <Canvas camera={{ position: [0, 0, 10], fov: 45 }} className="h-[320px] w-full">
                  <ambientLight intensity={0.35} />
                  <directionalLight position={[5, 5, 5]} intensity={1.1} />
                  <Stars radius={90} depth={40} count={250} factor={4} saturation={0} fade />
                  <Float speed={1.05} rotationIntensity={0.3} floatIntensity={0.65}>
                    <Model variant={item.title} />
                  </Float>
                  <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
                </Canvas>
                <div className="model-badge absolute left-5 top-5 rounded-full border border-cyan-300/20 bg-[#000c1c]/80 px-4 py-2 text-sm uppercase tracking-[0.28em] text-cyan-100">
                  {item.title}
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <h3 className="text-2xl font-semibold text-white">{item.label}</h3>
                <p className="text-slate-300">{item.detail}</p>
                <button className="interactive-card rounded-full border border-cyan-400/30 bg-cyan-500/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-100 transition hover:bg-cyan-500/15">
                  Discover details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
