import { motion } from 'framer-motion'

const HEARTS = Array.from({ length: 14 }).map((_, index) => {
  const delay = (index % 7) * 0.9
  const duration = 7 + (index % 5)
  const size = 16 + (index % 4) * 4
  const left = 5 + (index * 7) % 90

  return { id: index, delay, duration, size, left }
})

export default function FloatingHearts() {
  return (
    <div
      aria-hidden="true"
      style={{
        pointerEvents: 'none',
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {HEARTS.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '110%', opacity: 0, scale: 0.8 }}
          animate={{ y: '-20%', opacity: [0, 0.8, 0], scale: [0.8, 1, 0.9] }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'easeOut',
          }}
          style={{
            position: 'absolute',
            left: `${heart.left}%`,
            bottom: '-10%',
            fontSize: `${heart.size}px`,
            color: 'rgba(255, 137, 179, 0.8)',
            textShadow: '0 8px 20px rgba(220, 80, 140, 0.55)',
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  )
}

