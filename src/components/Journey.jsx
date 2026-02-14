import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Brain, TrendingUp, Zap } from 'lucide-react'

const Counter = ({ end, label }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [isInView, end])

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-bold gradient-text mb-2">{count}+</div>
      <div className="text-gray-400">{label}</div>
    </div>
  )
}

const Journey = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="journey" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-purple mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 rounded-3xl"
          >
            <Code2 className="w-12 h-12 text-electric mb-6" />
            <h3 className="text-2xl font-bold mb-4">From Curiosity to Creation</h3>
            <p className="text-gray-300 leading-relaxed">
              It started with a question: <span className="text-teal italic">"What if I could build anything?"</span> 
              From that spark, I dove into the world of full-stack development. But I didn't stop there. 
              After mastering the MERN stack, I self-initiated my journey into Flask, Vue.js, and advanced authentication systems. 
              <span className="text-electric font-semibold"> I'm an extremely fast learner</span> who doesn't wait for permission to explore.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass p-8 rounded-3xl"
          >
            <Brain className="w-12 h-12 text-purple mb-6" />
            <h3 className="text-2xl font-bold mb-4">AI Meets Business Intelligence</h3>
            <p className="text-gray-300 leading-relaxed">
              Building applications is one thing. Making them <span className="text-purple font-semibold">intelligent</span> is another. 
              I combine machine learning pipelines with business analytics to create systems that don't just work—they predict, optimize, and evolve. 
              From demand forecasting to predictive modeling, I turn data into decisions.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass p-8 rounded-3xl mb-20"
        >
          <TrendingUp className="w-12 h-12 text-teal mb-6 mx-auto" />
          <h3 className="text-2xl font-bold mb-4 text-center">Innovation Fueled by Exploration</h3>
          <p className="text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
            My creativity doesn't come from textbooks—it comes from <span className="text-teal font-semibold">travel, curiosity, and life</span>. 
            Every destination I explore teaches me something no classroom ever could. I bring that same exploratory mindset to technology, 
            constantly seeking trending tools, experimenting with video editing, and pushing boundaries. 
            <span className="gradient-text font-semibold"> I don't just follow trends—I create them.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <Counter end={15} label="Projects" />
          <Counter end={20} label="Tech Stacks" />
          <Counter end={8} label="Certifications" />
          <Counter end={100} label="Commits/Month" />
        </motion.div>
      </div>
    </section>
  )
}

export default Journey
