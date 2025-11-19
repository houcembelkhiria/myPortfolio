'use client'

import { motion } from 'framer-motion'
import { education, experience } from '@/data'
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi'

export default function EducationExperience() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat mb-4">
            Education & <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <HiAcademicCap className="text-2xl sm:text-3xl text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold font-montserrat">Education</h3>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <TimelineItem
                    key={edu.id}
                    period={edu.period}
                    title={edu.degree}
                    subtitle={edu.institution}
                    location={edu.location}
                    isLast={index === education.length - 1}
                    type="education"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <HiBriefcase className="text-2xl sm:text-3xl text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold font-montserrat">Experience</h3>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <ExperienceItem
                    key={exp.id}
                    period={exp.period}
                    title={exp.position}
                    subtitle={exp.company}
                    location={exp.location}
                    description={exp.description}
                    isLast={index === experience.length - 1}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({
  period,
  title,
  subtitle,
  location,
  isLast,
  type,
}: {
  period: string
  title: string
  subtitle: string
  location?: string
  isLast: boolean
  type: 'education' | 'experience'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-12 sm:pl-16"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border-2 sm:border-4 border-black">
          {type === 'education' ? (
            <HiAcademicCap className="text-white text-base sm:text-lg" />
          ) : (
            <HiBriefcase className="text-white text-base sm:text-lg" />
          )}
        </div>
      </div>

      <div className="glass rounded-lg p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
        <div className="text-xs sm:text-sm text-blue-400 font-semibold mb-2">{period}</div>
        <h4 className="text-lg sm:text-xl font-bold font-montserrat mb-1">{title}</h4>
        <p className="text-sm sm:text-base text-gray-300 font-medium mb-1">{subtitle}</p>
        {location && (
          <p className="text-gray-400 text-xs sm:text-sm">{location}</p>
        )}
      </div>
    </motion.div>
  )
}

function ExperienceItem({
  period,
  title,
  subtitle,
  location,
  description,
  isLast,
}: {
  period: string
  title: string
  subtitle: string
  location?: string
  description: string[]
  isLast: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-12 sm:pl-16"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border-2 sm:border-4 border-black">
          <HiBriefcase className="text-white text-lg" />
        </div>
      </div>

      <div className="glass rounded-lg p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
        <div className="text-xs sm:text-sm text-blue-400 font-semibold mb-2">{period}</div>
        <h4 className="text-lg sm:text-xl font-bold font-montserrat mb-1">{title}</h4>
        <p className="text-sm sm:text-base text-gray-300 font-medium mb-3">{subtitle}</p>
        {location && (
          <p className="text-gray-400 text-xs sm:text-sm mb-3">{location}</p>
        )}
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-gray-400 text-xs sm:text-sm flex items-start gap-2">
              <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

