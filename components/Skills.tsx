'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data'
import { 
  SiPython, 
  SiJava, 
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTensorflow, 
  SiDocker, 
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiJupyter,
  SiFirebase
} from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'

const skillIcons: Record<string, any> = {
  Python: SiPython,
  Java: SiJava,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  TensorFlow: SiTensorflow,
  Docker: SiDocker,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Git: SiGit,
  Jupyter: SiJupyter,
  Firebase: SiFirebase,
}

const categoryColors = {
  language: 'from-blue-500 to-cyan-500',
  framework: 'from-purple-500 to-pink-500',
  tool: 'from-green-500 to-emerald-500',
  database: 'from-orange-500 to-red-500',
  expertise: 'from-indigo-500 to-purple-500',
}

const categoryLabels = {
  language: 'Programming Languages',
  framework: 'Frameworks & Libraries',
  tool: 'Tools & Platforms',
  database: 'Databases',
  expertise: 'Expertise',
}

export default function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-1 h-8 bg-gradient-to-b ${categoryColors[category as keyof typeof categoryColors]}`}></div>
                <h3 className="text-lg sm:text-xl font-bold font-montserrat">
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill) => {
                  const IconComponent = skillIcons[skill.name] || FaDatabase
                  return (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <IconComponent className="text-blue-400 text-base sm:text-lg" />
                      <span className="text-xs sm:text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

