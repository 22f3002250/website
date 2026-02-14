import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, Code, TrendingUp } from 'lucide-react'

const Timeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const milestones = [
    {
      year: '2022',
      icon: GraduationCap,
      title: 'Started at IIT Madras',
      description: 'Bachelor of Science in Data Science and Applications',
      color: 'electric'
    },
    {
      year: '2023',
      icon: Award,
      title: 'Foundation Certificate',
      description: 'Data Science – Indian Institute of Technology Madras',
      color: 'teal'
    },
    {
      year: '2023',
      icon: Code,
      title: 'Diploma in Programming',
      description: 'Advanced programming concepts – IIT Madras',
      color: 'purple'
    },
    {
      year: '2024',
      icon: TrendingUp,
      title: 'Full-Stack MERN',
      description: 'Self-initiated learning journey into modern web development',
      color: 'electric'
    },
    {
      year: '2024',
      icon: Award,
      title: 'Deloitte Certification',
      description: 'Data Analytics & Business Intelligence',
      color: 'teal'
    }
  ]

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-xl text-gray-400">A journey of continuous learning and growth</p>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-purple mx-auto mt-8" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-electric via-teal to-purple" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass p-6 rounded-2xl inline-block"
                >
                  <div className={`text-${milestone.color} text-2xl font-bold mb-2`}>{milestone.year}</div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-400 text-sm">{milestone.description}</p>
                </motion.div>
              </div>

              <div className="w-2/12 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`glass w-16 h-16 rounded-full flex items-center justify-center border-2 border-${milestone.color}`}
                >
                  <milestone.icon className={`w-8 h-8 text-${milestone.color}`} />
                </motion.div>
              </div>

              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
