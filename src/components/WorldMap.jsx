import React from 'react'
import { motion } from 'framer-motion'

const WorldMap = () => {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
      <svg className="w-full h-full" viewBox="0 0 1000 600">
        {/* Abstract world map lines */}
        <motion.path
          d="M 100 300 Q 250 200 400 300 T 700 300 Q 850 350 900 300"
          stroke="url(#gradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M 150 400 Q 300 350 450 400 T 750 400"
          stroke="url(#gradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M 200 200 Q 400 150 600 200 T 850 200"
          stroke="url(#gradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D9FF" />
            <stop offset="50%" stopColor="#00FFC6" />
            <stop offset="100%" stopColor="#B794F6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default WorldMap
