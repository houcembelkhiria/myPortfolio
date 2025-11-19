'use client'

import { useState, useEffect } from 'react'

interface TypeWriterProps {
  texts: string[]
  speed?: number
  deleteSpeed?: number
  delay?: number
  className?: string
}

export default function TypeWriter({
  texts,
  speed = 100,
  deleteSpeed = 50,
  delay = 2000,
  className = '',
}: TypeWriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && currentText === currentFullText) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, delay)
    } else if (isDeleting && currentText === '') {
      // Move to next text
      setIsDeleting(false)
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
    } else {
      // Typing or deleting
      const currentSpeed = isDeleting ? deleteSpeed : speed
      timeout = setTimeout(() => {
        setCurrentText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1)
          } else {
            return currentFullText.slice(0, prev.length + 1)
          }
        })
      }, currentSpeed)
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, speed, deleteSpeed, delay])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

