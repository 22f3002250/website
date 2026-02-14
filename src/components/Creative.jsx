import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Music, Sparkles, Video, ChefHat, Feather } from 'lucide-react'

const Creative = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const hobbies = [
    {
      icon: Music,
      title: 'Dancing & Singing',
      description: 'Rhythm and melody fuel my creative energy',
      color: 'electric'
    },
    {
      icon: Feather,
      title: 'Poetry Writing',
      description: 'Expressing complex emotions through words',
      color: 'purple'
    },
    {
      icon: ChefHat,
      title: 'Cooking',
      description: 'Creating flavors is like debugging—precision matters',
      color: 'teal'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Self-taught storytelling through visual media',
      color: 'electric'
    }
  ]

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Sparkles className="w-16 h-16 mx-auto text-purple mb-6 animate-pulse" />
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            More Than <span className="gradient-text">Just Code</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Creativity isn't a hobby—it's how I solve problems
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-purple mx-auto mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-8 rounded-3xl group cursor-pointer"
            >
              <hobby.icon className={`w-12 h-12 text-${hobby.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="text-2xl font-bold mb-3">{hobby.title}</h3>
              <p className="text-gray-300">{hobby.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass p-10 rounded-3xl text-center"
        >
          <h3 className="text-3xl font-bold mb-6">The Creative Advantage</h3>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            My <span className="text-electric font-semibold">entertaining and energetic personality</span> isn't just for show—
            it's how I approach challenges with fresh perspectives. 
            Whether I'm choreographing a dance, editing a video, or debugging code, 
            <span className="gradient-text font-semibold"> creativity is my superpower</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Creative
