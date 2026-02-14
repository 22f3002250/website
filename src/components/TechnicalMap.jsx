import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Server, Database, Brain, BarChart3 } from 'lucide-react'

const territories = [
  {
    icon: Code,
    title: 'Frontend Territory',
    color: 'electric',
    skills: ['React', 'Vue.js', 'Tailwind CSS', 'Bootstrap', 'Framer Motion', 'Responsive Design']
  },
  {
    icon: Server,
    title: 'Backend Territory',
    color: 'teal',
    skills: ['Node.js', 'Express', 'Flask', 'REST APIs', 'JWT Auth', 'Celery', 'Redis']
  },
  {
    icon: Brain,
    title: 'Data & AI Lab',
    color: 'purple',
    skills: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'ML Pipelines', 'Predictive Modeling']
  },
  {
    icon: Database,
    title: 'Database Realm',
    color: 'electric',
    skills: ['MongoDB', 'MySQL', 'SQLite', 'Data Modeling', 'Query Optimization']
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    color: 'teal',
    skills: ['Data Analytics', 'EDA', 'Forecasting', 'Reporting', 'Business Insights']
  }
]

const TechnicalMap = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Technical <span className="gradient-text">Map</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exploring territories of technology, one skill at a time
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-purple mx-auto mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {territories.map((territory, index) => (
            <motion.div
              key={territory.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-8 rounded-3xl group cursor-pointer relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${territory.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <territory.icon className={`w-12 h-12 text-${territory.color} mb-6 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-2xl font-bold mb-6">{territory.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {territory.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1 }}
                      className={`px-4 py-2 bg-white/5 rounded-full text-sm border border-${territory.color}/30 hover:border-${territory.color} hover:bg-${territory.color}/10 transition-all duration-300`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-400 italic">
            "Curious about <span className="text-electric">trending technologies</span> and always learning what's next"
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnicalMap
