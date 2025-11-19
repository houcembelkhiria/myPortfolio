'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '@/data'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Using Formspree endpoint (you'll need to replace with your actual Formspree form ID)
    // For now, we'll use a placeholder that you can replace
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-montserrat mb-4 sm:mb-6">
                Contact Information
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                Feel free to reach out through any of these channels. I'll get back to you as soon as possible.
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base glass rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base glass rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base glass rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base glass rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 sm:p-4 text-sm sm:text-base bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 sm:p-4 text-sm sm:text-base bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
                >
                  Something went wrong. Please try again or contact me directly via email.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              <p className="text-xs text-gray-500 text-center px-2">
                Note: Please replace the Formspree endpoint in the Contact component with your own form ID.
                Alternatively, you can use EmailJS or another service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

