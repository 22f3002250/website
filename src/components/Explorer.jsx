import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plane, MapPin, Camera, Compass } from 'lucide-react'

const Explorer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const destinations = [
    { name: 'Mountains', icon: '🏔️' },
    { name: 'Beaches', icon: '🏖️' },
    { name: 'Cities', icon: '🌆' },
    { name: 'Temples', icon: '🛕' },
    { name: 'Forests', icon: '🌲' },
  ]

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Plane className="w-16 h-16 mx-auto text-electric mb-6 animate-float" />
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Beyond Code – <span className="gradient-text">The Explorer</span>
          </h2>
          <p className="text-2xl text-gray-300 italic max-w-3xl mx-auto leading-relaxed">
            "Every destination teaches me something that no classroom ever could."
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-purple mx-auto mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass p-10 rounded-3xl mb-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Travel Fuels Innovation</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I don't just visit places—I <span className="text-teal font-semibold">absorb cultures, perspectives, and stories</span>. 
                Every trip is a lesson in adaptability, problem-solving, and creativity.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From planning itineraries to navigating unknown territories, travel has taught me to think on my feet—
                a skill that translates directly into how I approach <span className="text-electric font-semibold">complex technical challenges</span>.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {destinations.map((dest, i) => (
                <motion.div
                  key={dest.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="glass p-6 rounded-2xl text-center"
                >
                  <div className="text-4xl mb-2">{dest.icon}</div>
                  <p className="text-sm text-gray-400">{dest.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Travel Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Adventures <span className="gradient-text">Captured</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((num, index) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group cursor-pointer"
              >
                <div className="glass rounded-2xl overflow-hidden aspect-square">
                  <img
                    src={`/images/photo${num}.jpeg`}
                    alt={`Travel moment ${num}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.style.background = 'linear-gradient(135deg, #00D9FF, #B794F6)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="glass p-6 rounded-2xl text-center">
            <MapPin className="w-10 h-10 text-electric mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Trip Planning</h4>
            <p className="text-gray-400 text-sm">Meticulous planning meets spontaneous adventure</p>
          </div>
          <div className="glass p-6 rounded-2xl text-center">
            <Compass className="w-10 h-10 text-teal mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Cultural Curiosity</h4>
            <p className="text-gray-400 text-sm">Learning from every culture and conversation</p>
          </div>
          <div className="glass p-6 rounded-2xl text-center">
            <Camera className="w-10 h-10 text-purple mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Creativity Through Travel</h4>
            <p className="text-gray-400 text-sm">Capturing moments that inspire innovation</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Explorer
