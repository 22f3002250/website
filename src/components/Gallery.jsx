import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Camera, Heart, Aperture } from 'lucide-react'

const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Photography gallery images (photo6 to photo12)
  const images = [
    {
      src: '/images/photo6.jpeg',
      caption: 'Exploring new horizons'
    },
    {
      src: '/images/photo7.jpeg',
      caption: 'Moments of serenity'
    },
    {
      src: '/images/photo8.jpeg',
      caption: 'Urban explorations'
    },
    {
      src: '/images/photo9.jpeg',
      caption: 'Nature\'s beauty'
    },
    {
      src: '/images/photo10.jpeg',
      caption: 'Cultural discoveries'
    },
    {
      src: '/images/photo11.jpeg',
      caption: 'Life in motion'
    },
    {
      src: '/images/photo12.jpeg',
      caption: 'Capturing the essence'
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
          <Camera className="w-16 h-16 mx-auto text-electric mb-6 animate-pulse" />
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Captured <span className="gradient-text">Moments</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            A glimpse into my world beyond the code
          </p>
          <p className="text-lg text-gray-500 italic">
            Through the lens: capturing stories, emotions, and beauty
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-purple mx-auto mt-8" />
        </motion.div>

        {/* Photography Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 rounded-3xl mb-16 text-center"
        >
          <Aperture className="w-12 h-12 mx-auto text-teal mb-4" />
          <h3 className="text-2xl font-bold mb-4">Photography: Another Creative Lens</h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Just like debugging code, photography teaches me to <span className="text-electric font-semibold">see details others miss</span>. 
            Every frame is about composition, timing, and perspective—skills that enhance my approach to 
            <span className="text-teal font-semibold"> problem-solving and design thinking</span>.
          </p>
        </motion.div>

        {/* Gallery Grid - Balanced Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="relative group cursor-pointer"
            >
              <div className="glass rounded-3xl overflow-hidden h-full">
                <div className="relative aspect-square">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.style.background = 'linear-gradient(135deg, #00D9FF, #B794F6)'
                    }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <p className="text-white text-lg font-semibold mb-2">{image.caption}</p>
                      <div className="flex items-center gap-2 text-electric">
                        <Camera className="w-4 h-4" />
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: Add a decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Heart className="w-8 h-8 mx-auto text-electric mb-4 animate-pulse" />
          <p className="text-gray-400 italic text-lg">
            "Every photograph is a story waiting to be told"
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
