'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data'
import { HiMail, HiLocationMarker, HiUser } from 'react-icons/hi'
import Image from 'next/image'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900"
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative order-2 md:order-1">
            <div className="relative w-full max-w-xs sm:max-w-md mx-auto aspect-square mb-8 md:mb-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-blue-500/50">
                {personalInfo.profileImage ? (
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 order-1 md:order-2">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-montserrat mb-4">
                {personalInfo.name}
              </h3>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <div className="flex items-start sm:items-center gap-3 text-gray-300">
                <HiMail className="text-blue-400 text-lg sm:text-xl flex-shrink-0 mt-0.5 sm:mt-0" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-400 transition-colors break-all sm:break-normal"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <HiLocationMarker className="text-blue-400 text-lg sm:text-xl flex-shrink-0" />
                <span className="text-sm sm:text-base">{personalInfo.location}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <HiUser className="text-blue-400 text-lg sm:text-xl flex-shrink-0" />
                <span className="text-sm sm:text-base text-green-400 font-semibold">
                  {personalInfo.status}
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
            >
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2.5 sm:py-3 text-center glass rounded-lg hover:bg-blue-500/20 transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2.5 sm:py-3 text-center glass rounded-lg hover:bg-blue-500/20 transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

