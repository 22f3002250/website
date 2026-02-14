import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Let's Build Something That{' '}
            <span className="gradient-text">Travels Far</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            Ready to collaborate on your next big idea? Let's connect.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <MapPin className="w-4 h-4" />
            <span>Darbhanga, Bihar • Open to Remote Opportunities</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass p-12 rounded-3xl"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.a
              href="mailto:tkjha1335@gmail.com"
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/5 hover:bg-electric/10 border border-white/10 hover:border-electric transition-all duration-300"
            >
              <Mail className="w-12 h-12 text-electric mb-4" />
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-sm text-gray-400 text-center">tkjha1335@gmail.com</p>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/tripti-jha-76153b289"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/5 hover:bg-teal/10 border border-white/10 hover:border-teal transition-all duration-300"
            >
              <Linkedin className="w-12 h-12 text-teal mb-4" />
              <h3 className="text-lg font-bold mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-400 text-center">Connect with me</p>
            </motion.a>

            <motion.a
              href="https://github.com/22f3002250"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/5 hover:bg-purple/10 border border-white/10 hover:border-purple transition-all duration-300"
            >
              <Github className="w-12 h-12 text-purple mb-4" />
              <h3 className="text-lg font-bold mb-2">GitHub</h3>
              <p className="text-sm text-gray-400 text-center">View my code</p>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="tel:+917353993181"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glow-button relative px-10 py-4 bg-gradient-to-r from-electric to-teal rounded-full text-black font-bold text-lg inline-flex items-center gap-3"
            >
              <span className="relative z-10">Phone</span>
              <Send className="w-5 h-5 relative z-10" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center text-gray-500"
        >
          <p className="mb-2">Designed & Built by Tripti Kumari</p>
          <p className="text-sm">Code. Create. Explore. 🚀</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
