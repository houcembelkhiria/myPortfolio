'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

export default function Contact() {
  return (
    <section
      id="contact"
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-sm sm:text-base text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
            I&apos;m currently exploring senior engineering opportunities where I can drive technical
            strategy and build impactful AI-powered systems. Let&apos;s discuss how I can contribute
            to your team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-montserrat mb-4 sm:mb-6 text-center">
              Contact Information
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 text-center">
              Reach out for technical collaborations, engineering leadership opportunities, or
              discussions on AI/ML architecture. I respond to all professional inquiries within 24 hours.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 sm:gap-4 glass rounded-lg p-3 sm:p-4 hover:bg-white/10 transition-all duration-300 group"
              whileHover={{ x: 5 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors flex-shrink-0">
                <HiMail className="text-blue-400 text-lg sm:text-xl" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs sm:text-sm text-gray-400">Email</div>
                <div className="text-sm sm:text-base text-white font-medium truncate sm:break-all">{personalInfo.email}</div>
              </div>
            </motion.a>

            <motion.a
              href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 sm:gap-4 glass rounded-lg p-3 sm:p-4 hover:bg-white/10 transition-all duration-300 group"
              whileHover={{ x: 5 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors flex-shrink-0">
                <HiPhone className="text-blue-400 text-lg sm:text-xl" />
              </div>
              <div>
                <div className="text-xs sm:text-sm text-gray-400">Phone</div>
                <div className="text-sm sm:text-base text-white font-medium">{personalInfo.phone}</div>
              </div>
            </motion.a>

            <div className="flex items-center gap-3 sm:gap-4 glass rounded-lg p-3 sm:p-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <HiLocationMarker className="text-blue-400 text-lg sm:text-xl" />
              </div>
              <div>
                <div className="text-xs sm:text-sm text-gray-400">Location</div>
                <div className="text-sm sm:text-base text-white font-medium">{personalInfo.location}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

