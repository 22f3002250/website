import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Quiz Master V2',
    tagline: 'Enterprise-Grade Quiz Platform',
    description: 'Built with Flask + Vue.js featuring JWT authentication, Celery background jobs, Redis caching, and role-based admin dashboards.',
    tech: ['Flask', 'Vue.js', 'JWT', 'Celery', 'Redis'],
    gradient: 'from-electric to-teal',
    github: 'https://github.com/22f3002250/Quiz-Master'
  },
  {
    title: 'Grocery Store Analytics',
    tagline: 'AI-Powered Business Intelligence',
    description: 'Capstone project with advanced EDA, demand forecasting, inventory optimization, and comprehensive business insights reporting.',
    tech: ['Python', 'ML', 'Forecasting', 'Analytics'],
    gradient: 'from-purple to-electric',
    github: 'https://github.com/22f3002250/bdm_capstone_project'
  },
  {
    title: 'ML Pipeline Project',
    tagline: 'Production-Ready Machine Learning',
    description: 'Regression & Classification models using Random Forest and Gradient Boosting with clean, scalable pipeline architecture.',
    tech: ['scikit-learn', 'Random Forest', 'Gradient Boosting'],
    gradient: 'from-teal to-purple',
    github: 'https://github.com/22f3002250/Machine_Learning_project'
  },
  {
    title: 'Private E-Commerce Platform',
    tagline: 'Full-Stack MERN Marketplace',
    description: 'Complete marketplace with authentication, product management, order system, and secure payment integration.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    gradient: 'from-electric to-purple',
    github: 'https://github.com/22f3002250'
  },
  {
    title: 'Farmers & Shopkeeper Platform',
    tagline: 'Real-World Business Solution',
    description: 'Full-stack platform with complex business logic, role-based dashboards, and seamless user experience.',
    tech: ['MERN', 'Role-Based Auth', 'Business Logic'],
    gradient: 'from-teal to-electric',
    github: 'https://github.com/22f3002250'
  }
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Projects as <span className="gradient-text">Journeys</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every project tells a story of problem-solving and innovation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-purple mx-auto mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl group cursor-pointer relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-electric text-sm mb-4">{project.tagline}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-electric hover:text-teal transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">View on GitHub</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
